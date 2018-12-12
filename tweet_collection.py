import sys
import time
import json
from tweepy.auth import OAuthHandler, API
from tweepy import StreamListener, streaming
from importlib import reload
from prepare import prepare_data_events,prepare_data

def getTweets(hashtag,consumerkey,consumersecret,accesskey,accesssecret,Floodflag,Objectsflag,Boundingbox,dataset):

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
                print(json.dumps(item, sort_keys=True, indent=4))
                #print (item)
                print ("==============================================================")
                #db_operations.insert_tweet(item)
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
                prepare_data(Boundingbox,Floodflag,Objectsflag,dataset,text,time,id,imageurl)
            else:
                pass # Do nothing

        def on_error(self, status_code):
            print >> sys.stderr, 'Encountered error with status code:', status_code
            # sleep for 16 minutes
            print ("sleeping for 16 minutes")
            time.sleep(960)

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

if __name__ == "__main__":

    print(sys.argv)
    keywords = sys.argv[1].split(" ")
    consumerkey = sys.argv[2]
    consumersecret = sys.argv[3]
    accesskey = sys.argv[4]
    accesssecret = sys.argv[5]
    Flood_flag = sys.argv[6]
    Objects_flag = sys.argv[7]
    Boundingbox = sys.argv[8].split(" ")
    dataset = sys.argv[9]
    bb = [float(Boundingbox[i]) for i in range(len(Boundingbox))]
    #prepare_data_events(Boundingbox)
    getTweets(keywords,consumerkey,consumersecret,accesskey,accesssecret,Flood_flag,Objects_flag,bb,dataset)
