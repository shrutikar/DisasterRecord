from flask import Flask, request
from flask_restful import Resource, Api
from json import dumps
from flask_jsonpify import jsonify
from datetime import datetime, timedelta
from elasticsearch import Elasticsearch
import json, os
import geopy.distance
import time


app = Flask(__name__)
api = Api(app)
app.config['JSON_SORT_KEYS'] = False #prevent flask from sorting JSON data using keys

#class for handling the rescue request under wam directory
class DisasterRecordAPI(Resource):


    def totimestamp(self, dt, epoch=datetime(1970,1,1)):
        td = dt - epoch
        return (td.microseconds + (td.seconds + td.days * 86400) * 10**6) / 10**6 


    def isKeyValid(self, key, es):
        result = False

        q = {
            "size": 1000,
            "query": {
                "bool" : {
                    "must" : {
                        "match": {"record.key": key}
                    }
                }
            }
        }

        searchResult = es.search(index='api-keys', body=q)['hits']['total']

        if int(searchResult == 0):
            return False
        else:
            return True

        return result

    def getMatches(self, searchResult, user, needClassType):
        matches = []
        #traverse through each hit of the search result and obtain required info
        for hit in searchResult:
            #print("process hit:")
            match = {}
            if user == 'responder':
                #working with tweetneeds mapping
                match['destination'] = hit['_source']['geometry']
                match['flood'] = hit['_source']['properties']['flooded']
                match['class'] = hit['_source']['properties']['needClass']
                match['created_at'] =  hit['_source']['properties']['createdAt']
                match['text'] = hit['_source']['properties']['text']
                if needClassType == 'rescue_match':
                    match['match_icon'] = 'https://github.com/shrutikar/DisasterRecord/blob/CFC/static/ambulance%20orange.png'
                else:
                    match['match_icon'] = 'https://github.com/shrutikar/DisasterRecord/blob/CFC/static/shelter_need.png'
                match['images'] = hit['_source']['properties']['image']

            if user == 'individual':
                #working with osm mapping
                match['destination'] = hit['_source']['geometry']
                match['class'] = hit['_source']['properties']['needClass']
                match['name'] = hit['_source']['properties']['name']
                match['other_info'] = ''
                match['status'] = 'available'
                # get key - value
                OSM_features_icons_dict = {}
                with open("OSM_features_icons_dict.json") as f:
                    OSM_features_icons_dict = json.load(f)
                key = hit['_source']['properties']['key']
                value = hit['_source']['properties']['value']
                try:
                    icon = OSM_features_icons_dict[key][value]
                except:
                    icon = ""
                match['OSM_feature'] = {'key': key, 'value': value, 'icon': str(icon)}

            if not len(match) == 0:
                matches.append(match)
            

        return matches

    def get(self):
        #get URL arguments
        timeR = request.args.get('time') # time of the request in milliseconds
        print("lat is " + request.args.get('lat'))
        lat = float(request.args.get('lat'))
        lon = float(request.args.get('lon'))
        user = request.args.get('user') # user type
        req = request.args.get('request') # request type
        radius = request.args.get('radius')
        tDelta = request.args.get('time_delta') #time range
        key = request.args.get('key')
        campaign = request.args.get('campaign')

        es = Elasticsearch([{'host': 'localhost', 'port': 9200}])

        #check validity of the API key
        if key is None:
            return {"message": 'Authorization Error'}
        else:
            valid = self.isKeyValid(key, es)
            if not valid:
                return {"message": 'Authorization Error'}
            else:
                if (' ' in key) == True:
                    return {"message": 'Authorization Error'}

                if key == '8c32d1183251df9828f929b935ae0419':
                    return {
                            "Matches": [
                                {
                                    "status": "available",
                                    "OSM_feature": {
                                        "value": "hospital",
                                        "key": "amenity",
                                        "icon": "https://wiki.openstreetmap.org/w/images/hospital.svg"
                                    },
                                    "name": "Right Hospitals",
                                    "destination": {
                                        "type": "Point",
                                        "coordinates": [
                                            70.2406731,
                                            23.0767952
                                        ]
                                    },
                                    "class": "rescue_match",
                                    "other_info": ""
                                }
                            ],
                            "request": {
                                "time_of_the_request": "1471677320000",
                                "type": "rescue_match",
                                "user": "individual",
                                "coordinates": [
                                    13.0529181,
                                    80.2039631
                                ]
                            }
                        }


        if tDelta is None:
            tDelta = 120 # default time delta if not provided
        if radius is None:
            radius = "5000m" # default radius if not provided

        #associate agrs vars with the ES naming
        campaign += '-'
        dbType = ''
        needClassType = ""
        if req == 'rescue':
            needClassType = 'rescue_match'
        elif req == 'shelter':
            needClassType = 'shelter_matching'
        else:
            return {"message": "Incorrect Request Type"}

        #get start and end dates
        ts = int(timeR) / 1000  
        inputDate = datetime.fromtimestamp(ts)
        targetDate = inputDate - timedelta(hours=0, minutes=int(tDelta))
        #print('start date ' + targetDate.strftime('%Y-%m-%d %H:%M:%S'))
        #print('end date ' + inputDate.strftime('%Y-%m-%d %H:%M:%S'))
        #convert start and end dates to timestamp
        start_date = int(time.mktime(targetDate.timetuple()) * 1000)
        end_date = int(timeR)
        #print('start timestamp' + str(start_date))
        #print('end timestamp ' + str(end_date) )
        
        #print("")
        #print(es.info())
        #print("")
        # construct a query
        q = {}
        #determine type of request
        if user == 'individual':
            #query OSM
            dbType = 'osm'
            q = {
                "size": 1000,
                "query": {
                    "bool" : {
                        "must" : [{
                            "match": {"properties.needClass": needClassType}
                        }],
                        "filter" : {
                            "geo_distance" : {
                                "distance": str(radius),
                                "geometry.coordinates": {
                                    "lat": lat,
                                    "lon": lon
                                }
                            }
                        }
                    }
                }
            }
            print("individual request")
        elif user == 'responder':
            #query tweetneeds
            dbType = 'tweetneeds'
            q = {
                "size": 1000,
                "query": {
                    "bool" : {
                        "must" : [{
                            "match": {"properties.needClass": needClassType}
                        },{"range" : {
                        "properties.createdAt" : {
                            "gte": start_date,
                            "lte": end_date,
                            "format": "yyyy-MM-dd HH:mm:ss||yyyy-MM-dd||epoch_millis"
                        }
                    }}],
                        "filter" : {
                            "geo_distance" : {
                                "distance": str(radius),
                                "geometry.coordinates": {
                                    "lat": lat,
                                    "lon": lon
                                }
                            }
                        }
                    }
                }
            }
            print("responder request")
        else:
            return {"message": "Incorrect User Type"}


        print("serching through " + campaign + dbType)
        searchResult = es.search(index=campaign + dbType, body=q)['hits']['hits']

        matches = self.getMatches(searchResult, user, needClassType)

        #build json
        response =  {"request": 
                        {"type": needClassType,
                        "coordinates":[lat, lon],
                        "user": user,
                        "time_of_the_request": int(timeR),
                        }, "Matches": matches # append Matches
                    }  

        return jsonify(response)
        






api.add_resource(DisasterRecordAPI, '/disaster_record/api')

if __name__ == '__main__':
     app.run(host='0.0.0.0', port='8085')

