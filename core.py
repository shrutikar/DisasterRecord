import atexit
import sys,os
import time as tm
import json
from tweepy.auth import OAuthHandler, API
from tweepy import StreamListener, streaming
from importlib import reload
from elasticsearch import Elasticsearch
from ibm_botocore.client import Config, ClientError
import ibm_boto3
from elasticsearch_dsl import Search, Q
from elasticsearch_dsl.connections import connections
import LNEx as lnex
import unicodedata, os, json
import requests, Geohash
import collections,operator
from collections import defaultdict
import xlrd
from watson_developer_cloud import NaturalLanguageClassifierV1, DiscoveryV1
from mike_img import load_pb
import object_detection
from object_detection.ObjectDetector import ObjectDetector
OD = ObjectDetector()
import nltk
nltk.download('words')
nltk.download('stopwords')
import unicodedata
import string, re, nltk
from nltk.corpus import stopwords
from nltk.stem.wordnet import WordNetLemmatizer
from nltk import word_tokenize, pos_tag
from nltk.stem.porter import PorterStemmer
words = set(nltk.corpus.words.words())
stop = set(stopwords.words('english'))
exclude = set(string.punctuation)
lemma = WordNetLemmatizer()

token_dict = {}
stemmer = PorterStemmer()

printable = set(string.printable)


natural_language_classifier = NaturalLanguageClassifierV1(
  username='99eb081e-2c0c-4080-960e-4a3a0183c8b0',
  password='uPNV4Saj0pLO')


ES_SIZE = 1000





class data_process(object):

    def read(self,dataset,Flood_flag,Objects_flag,Satellite_image,bb):
        start=0
        end=3
        es = Elasticsearch([{'host': 'localhost', 'port': 9200}])
        geo_info = self.init_using_elasticindex(cache=False, augmentType="HP",gaz_name=dataset, bb=bb, capital_word_shape=False)
        while 1:
          #Query to get the maximum id number of the records.
          temp = es.search(index=dataset + '-file', body={"size": ES_SIZE, "query": {"match_all":{}}})['hits']['hits']
          temp_rec = [s['_source'] for s in temp]
          temp_id=list()
          for e in temp_rec:
            temp_id.append(e['record']['record-id'])
          #set maximum id number as the end of range.
          end = max(temp_id)
          print(start,end)
          #Query for the range start to end
          result = es.search(index=dataset + '-file', body={"size": ES_SIZE, "query": {"bool":{"must":{"range" : {
                "record.record-id" : {
                    "gt" : start,
                    "lte" : end
                }
            }}}
                    }})['hits']['hits']
          rec = [s['_source'] for s in result]
          #rec_id=list()
          for e in rec:
            text=e['record']['text']
            time=e['record']['time']
            imageurl=e['record']['imageurl']
            id=e['record']['id']
            #rec_id.append(e['record']['record-id'])
            all_geo_points = self.prepare_geo_points(dataset,text,time,id,imageurl,Flood_flag, Objects_flag, Satellite_image, geo_info)
          tm.sleep(30)
          #start=max(rec_id)
          #end=start+10
          #This end becomes the start for the next iteration
          start=end
          #print(start,end)

    def clean(self,doc):
        stop_free = " ".join([i for i in doc.lower().split() if i not in stop])
        punc_free = ''.join(ch for ch in stop_free if ch not in exclude)
        normalized = " ".join(lemma.lemmatize(word) for word in punc_free.split())
        normalized = " ".join(stemmer.stem(word) for word in normalized.split())
        return normalized

    def preprocess_tweet(self,tweet):
        '''Preprocesses the tweet text and break the hashtags'''

        tweet = self.strip_non_ascii(tweet)

        #     print tweet
        tweet = str(tweet.lower())

        if tweet[:1] == "\n":
            tweet = tweet[1:len(tweet)]

        # remove retweet handler
        if tweet[:2] == "rt":
            try:
              colon_idx = tweet.index(": ")
              tweet = tweet[colon_idx + 2:]
            except BaseException:
              pass

        # remove url from tweet
        tweet = re.sub(r'\w+:\/{2}[\d\w-]+(\.[\d\w-]+)*(?:(?:\/[^\s/]*))*', 'URL', tweet)

        # remove non-ascii characters
        tweet = "".join([x for x in tweet if x in printable])

        # additional preprocessing
        tweet = tweet.replace("\n", " ").replace(" https", "").replace("http", "")

        # remove all mentions
        tweet = re.sub(r"@\w+", "@USER", tweet)

        # remove all mentions
        tweet = re.sub(r"#\w+", "#HASH", tweet)

        # padding punctuations
        tweet = re.sub('([,!?():])', r' \1 ', tweet)

        tweet = tweet.replace(". ", " . ").replace("-", " ")

        # shrink blank spaces in preprocessed tweet text to only one space
        tweet = re.sub('\s{2,}', ' ', tweet)

        tweet = " ".join(w for w in nltk.wordpunct_tokenize(tweet) if w.lower() in words or not w.isalpha())

        tweet = re.sub("^\d+\s|\s\d+\s|\s\d+$", " NUM ", tweet)

        # # remove consecutive duplicate tokens which causes an explosion in tree
        # while re.search(r'\b(.+)(\s+\1\b)+', tweet):
        #     tweet = re.sub(r'\b(.+)(\s+\1\b)+', r'\1', tweet)

        #     tweet = clean(tweet)

        tweet = tweet.replace('\n', '. ').replace('\t', ' ').replace(',', ' ').replace('"', ' ').replace("'", " ").replace(
            ";", " ").replace("\n", " ").replace("\r", " ")

        # remove trailing spaces
        tweet = tweet.strip()

        return tweet

    def strip_non_ascii(self,s):

        if isinstance(s, str):
            nfkd = unicodedata.normalize('NFKD', s)
            return str(nfkd.encode('ASCII', 'ignore').decode('ASCII'))
        else:
            return s

    def get_all_tweets_and_annotations(self,text,time,id,imageurl,Flood_flag,Objects_flag):
        l=list()
        all_tweets_and_annotations=list()
        for img in imageurl:
            if Flood_flag=="ON":
                r=load_pb.load(img,'flood')
                if str(r)=='flood' and Objects_flag=="ON":
                    obj = {}
                    url = img
                    water = True
                    img = {}
                    obj = OD.extract(url)
                    print (obj)
                    img = {"water": water, "objects": obj, "imageURL": url}
                    l.append(img)
        text = self.strip_non_ascii(text)
        try:
          text = unicodedata.normalize('NFKD', text).encode('ascii', 'ignore')
        except:
          pass
        e = self.preprocess_tweet(text)
        k = id
        lst = list()
        all_tweets_and_annotations.append((text, k, time, l, e))
        return all_tweets_and_annotations

    def init_using_elasticindex(self, cache, augmentType, gaz_name, bb, capital_word_shape):

        lnex.elasticindex(conn_string='localhost:9200', index_name="photon")
        return lnex.initialize(bb, augmentType=augmentType,
                                    cache=cache,
                                    dataset_name=gaz_name,
                                    capital_word_shape=capital_word_shape)

    def prepare_geo_points(self,dataset,text,time,id,imageurl,Flood_flag, Objects_flag, Satellite_image, geo_info):
        os.environ['NO_PROXY'] = '127.0.0.1'
        all_geo_points = list()
        es = Elasticsearch([{'host': 'localhost', 'port': 9200}])
        for tweet in self.get_all_tweets_and_annotations(text,time,id,imageurl,Flood_flag,Objects_flag):
            try:
                classes = natural_language_classifier.classify('6876e8x557-nlc-635',tweet[0].decode("utf-8")).get_result()
                #classes = "shelter_matching"
            except Exception as excp:
                print('exception occured')
                print(excp)
                tm.sleep(30)
                continue

            #print (classes)
            #print (type(classes))
            r = classes['top_class']
            print(r)
            # r="shelter_matching"
            if r == "shelter_matching":
                cl = "shelter_matching"
                i = '/static/shelter.png'
            elif r == "infrastructure_need":
                cl = "infrastructure_need"
                i = '/static/utility_infrastructure'
            elif r == "rescue_match":
                cl = "rescue_match"
                i = '/static/medical_need.png'
            else:
                cl = "not_related_or_irrelevant"
                i = ''
            for ln in lnex.extract(tweet[0].decode("utf-8")):
                if ln[0].lower() == dataset.lower():
                    continue
                ln_offsets = ln[1]
                geoinfo = [geo_info[x] for x in ln[3]["main"]]
                if len(geoinfo) == 0:
                    continue
                for geopoint in geoinfo:
                    lat = geopoint["geo_item"]["point"]["lat"]
                    lon = geopoint["geo_item"]["point"]["lon"]
                    try:
                        if Satellite_image == "ON":
                        #fl = flooded(lat, lon)
                        # print str(fl)
                            if str(fl) == 'True':
                                fld = True
                            else:
                                fld = False
                        else:
                            fld = False
                        print('writing')
                        es.index(index=dataset + '-tweetneeds', doc_type='doc', body={"type": "Feature", "geometry": {"type": "Point", "coordinates": [lon, lat]}, "properties": {"locationMention":{"text": ln[0], "offsets":[ln_offsets[0],ln_offsets[1]]}, "tweetID": tweet[1], "text": tweet[0].decode("utf-8"), "createdAt": tweet[2], "needClass": cl, "flooded": fld, "image":tweet[3]}})
                        all_geo_points.append({"type": "Feature", "geometry": {"type": "Point", "coordinates": [lon, lat]}, "properties": {"locationMention":{"text": ln[0], "offsets":[ln_offsets[0],ln_offsets[1]]}, "tweetID": tweet[1], "text": tweet[0], "createdAt": tweet[2], "needClass": cl, "flooded": fld, "image":tweet[3]}})
                        print (all_geo_points)
                    except Exception as e:
                        print(e)
                        continue
            #nn=nn+1
            #if nn==10:
        # break

        print(all_geo_points)
        return {"type": "FeatureCollection", "features": all_geo_points}


    def search_index(self,bb):
        '''Retrieves the location names from the elastic index using the given
        bounding box'''

        connections.create_connection(hosts=["localhost:9200"], timeout=60)

        phrase_search = [Q({"bool": {
            "filter": {
                "geo_bounding_box": {
                            "coordinate": {
                                "bottom_left": {
                                    "lat": bb[0],
                                    "lon": bb[1]
                                },
                                "top_right": {
                                    "lat": bb[2],
                                    "lon": bb[3]
                                }
                            }
                            }
            },
            "must": {
                "match_all": {}
            }
        }
        })]

        #to search with a scroll
        e_search = Search(index="photon").query(Q('bool', must=phrase_search))

        try:
            res = e_search.scan()
        except BaseException:
            raise

        return res



    def prepare_data_events(self,bb):
        #gaz_name=gaz_name.lower()
        #if gaz_name=="chennai":
            # chennai flood bounding box
        #    bb = [12.74, 80.066986084, 13.2823848224, 80.3464508057]
        #elif gaz_name=="houston":
            #houston bb
        #    bb = [29.4778611958,-95.975189209,30.1463147381,-94.8889160156]
        p_points=list()
        h=self.search_index(bb)
        #print (h)
        x = 0

        es = Elasticsearch([{'host': 'localhost', 'port': 9200}])
        cnt=0
        for match in h:
            if 'name' in match:
                #print(match["name"])
                if 'default' in match["name"]:
                    x = 1
                    c = match["name"]['default']
                elif 'en' in match["name"]:
                    x = 2
                    c = match["name"]['en']
                elif 'fr' in match["name"]:
                    x = 3
                    c = match["name"]['fr']
                elif 'alt' in match["name"]:
                    x = 4
                    c = match["name"]['alt']
                elif 'old' in match["name"]:
                    x = 5
                    c = match["name"]['old']
                else:
                    x = 6
                    c = match["name"]['loc']
            elif 'city' in match:
                x = 7
                c = match["city"]['default']
            else:
                x = 8
                c = match["country"]['default']
            lat = match["coordinate"]["lat"]
            lon = match["coordinate"]["lon"]
            k = match["osm_key"]
            v = match["osm_value"]
            print(type(k),type(v))
            if ((v == 'animal_shelter') or (v == 'bus_station') or (v == 'shelter') or (k == 'shop')):
                cls = "shelter_matching"
            elif ((k == 'man_made' and v == 'pipeline') or (k == 'power' and v == 'line') or (
                    k == 'power' and v == 'plant') or (k == 'man_made' and v == 'communications_tower') or (
                    k == 'building' and v == 'transformer_tower') or (k == 'building' and v == 'service') or (
                  k == 'power' and v == 'minor_line') or (k == 'power' and v == 'substation') or (
                  k == 'craft' and v == 'electrician') or (k == 'craft' and v == 'scaffolder')):
                cls = "infrastructure_need"
            elif ((v == 'fire_station') or (v == 'police') or (v == 'post_office') or (v == 'rescue_station') or (
                v == 'hospital') or (v == 'ambulance_station') or (v == 'medical_supply') or (v == 'clinic') or (
                v == 'doctors') or (v == 'social_facility') or (v == 'blood_donation') or (v == 'pharmacy') or (
                v == 'nursing_home')):
                cls = "rescue_match"
            else:
                print('continuing')
                continue
            #fl = flooded(lat, lon)
            fl=False
            if str(fl) == 'True':
                fl = True
            else:
                fl = False
                p_points.append({"type": "Feature", "geometry": {"type": "Point", "coordinates": [lon, lat]}, "properties": {"name": c, "key": k, "value": v, "needClass": cls, "Flood": fl}})
                es.index(index=dataset + '-osm', doc_type='doc', body={"type": "Feature", "geometry": {"type": "Point", "coordinates": [lon, lat]}, "properties": {"name": c, "key": k, "value": v, "needClass": cls, "Flood": fl}})
            cnt+=1
        print(p_points)



def getTweets(hashtag,consumerkey,consumersecret,accesskey,accesssecret,dataset):

    # Twitter streams a Max of 57 tweets per second [Fact]
    #---------------------------------------------------------------------------
    print("collecting tweets" )
    print ("====================================================================")
    reload(sys)
    #sys.setdefaultencoding('utf8')

    consumer_key=consumerkey
    consumer_secret=consumersecret
    access_key=accesskey
    access_secret=accesssecret

    auth = OAuthHandler(consumer_key, consumer_secret)
    auth.set_access_token(access_key, access_secret)
    api = API(auth)

    class CustomStreamListener(StreamListener):
        def on_data(self, data):

            item = json.loads(data)

            if 'text' in data:
                global i
                i=i+1
                print(json.dumps(item, sort_keys=True, indent=4))
                #print (item)
                print ("==============================================================")
                print(i)
                #prepare_data(item,Boundingbox,Floodflag,Objectsflag,dataset)
                text=item['text']
                time=item['timestamp_ms']
                imageurl=[]
                try:
                  if item['extended_entites']['media']['type']=="photo":
                      imageurl=item['extended_entites']['media']['media_url']
                #imageurl=['https://pbs.twimg.com/media/DtZFfkIWwAElzhw.jpg','https://pbs.twimg.com/media/DuJqhCgWkAA90gD.jpg','https://pbs.twimg.com/media/CVOoJ6PWcAAntfU.jpg']
                except:
                  imageurl=[]
                id=item['id']
                os.environ['NO_PROXY'] = '127.0.0.1'
                es = Elasticsearch([{'host': 'localhost', 'port': 9200}])
                es.index(index=dataset+'-file', doc_type='doc', body={"record": {"text":text, "time": time, "imageurl": imageurl, "id": id, "record-id": i}})
                #prepare_data(Boundingbox,Floodflag,Objectsflag,dataset,text,time,id,imageurl,dataset)
            else:
                pass # Do nothing

        def on_error(self, status_code):
            print >> sys.stderr, 'Encountered error with status code:', status_code
            # sleep for 16 minutes
            print ("sleeping for 16 minutes")
            tm.sleep(960)

            return True # Don't kill the stream

        def on_timeout(self):
            print >> sys.stderr, 'Timeout...'
            return True # Don't kill the stream

    try:
        sapi = streaming.Stream(auth, CustomStreamListener())

        # sapi.filter(languages=["en"], track=[hashtag])
        sapi.filter(track=hashtag, languages=['en'])
    except:
        print ("tweepy error") #Don't do anythin
        raise


class file():
    def read_from_file(self,file_url):
        with open(file_url) as f:
            data = json.load(f)
        i=0
        for e in data["_source"]:
            i+=1
            text=e['record']['text']
            time=e['record']['time']
            imageurl=e['record']['imageurl']
            id=e['record']['id']
            es = Elasticsearch([{'host': 'localhost', 'port': 9200}])
            es.index(index=dataset+'-file', doc_type='doc', body={"record": {"text":text, "time": time, "imageurl": imageurl, "id": id, "record-id": i}})



if __name__ == "__main__":
    global i
    i=0
    keywords = sys.argv[1].split(" ")
    consumerkey = sys.argv[2]
    consumersecret = sys.argv[3]
    accesskey = sys.argv[4]
    accesssecret = sys.argv[5]
    dataset = sys.argv[6]
    Flood_flag = sys.argv[7]
    Objects_flag = sys.argv[8]
    Boundingbox = sys.argv[10].split(" ")
    Satellite_image = sys.argv[9]
    bb = [float(Boundingbox[i]) for i in range(len(Boundingbox))]
    file_url = sys.argv[11]
    d=data_process()
    d.read(dataset,Flood_flag,Objects_flag,Satellite_image,bb)
    d.prepare_data_events(bb)
    if file_url=="":
        getTweets(keywords,consumerkey,consumersecret,accesskey,accesssecret,dataset)
    else:
        f=file()
        f.read_from_file(file_url)
