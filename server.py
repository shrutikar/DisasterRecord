from flask import Flask, render_template, request, jsonify
import atexit
import os
import json
# from ibm_botocore.client import Config
# import ibm_boto3
from elasticsearch_dsl import Search, Q
from elasticsearch_dsl.connections import connections
import unicodedata
import requests, Geohash
from elasticsearch import Elasticsearch
import collections,operator
from collections import defaultdict
# from ibm_botocore.client import ClientError
import string


app = Flask(__name__, static_url_path='')
ES_SIZE = 1000

def make_map(params):

    with open("OSM_features_icons_dict.json") as f:
        OSM_features_icons_dict = json.dumps(json.load(f))
    params['OSM_features_icons_dict'] = OSM_features_icons_dict

    return render_template('index.html', **params)

def download_file_cos(cos_credentials,key):
    auth_endpoint = 'https://iam.bluemix.net/oidc/token'
    _cos = ibm_boto3.client('s3',
                            ibm_api_key_id=cos_credentials['apikey'],
                            ibm_service_instance_id=cos_credentials['resource_instance_id'],
                            ibm_auth_endpoint=auth_endpoint,
                            config=Config(signature_version='oauth'),
                            endpoint_url=cos_credentials['service_endpoint'])
    f = get_item(bucket_name=cos_credentials['BUCKET'], item_name=key, cos=_cos)
    print ("=====================*********************")

    tweets = f['Body'].read()
    tweetsList = tweets.split("\n")
    return tweets


def get_item(bucket_name, item_name, cos):
    print("Retrieving item from bucket: {0}, key: {1}".format(bucket_name, item_name))
    try:
        tweets = cos.get_object(Bucket=bucket_name, Key=item_name)
        return tweets
        # print("File Contents: {0}".format(file["Body"].read()))
    except ClientError as be:
        print("CLIENT ERROR: {0}\n".format(be))
    except Exception as e:
        print("Unable to retrieve file contents: {0}".format(e))


# cos_cred={
#         "apikey": "C-BGVS6j-VncIFkpj6hIVVQCD96__x9cxSJHxFaAymwB",
#         "endpoints": "https://cos-service.bluemix.net/endpoints",
#         "iam_apikey_description": "Auto generated apikey during resource-key operation for Instance - crn:v1:bluemix:public:cloud-object-storage:global:a/022374f4b8504a0eaa1ce419e7b5e793:4ed80b30-6560-4cc4-89ac-0d6c8b276420::",
#         "iam_apikey_name": "auto-generated-apikey-7e34a98b-6014-4c1e-bbf3-3e99b48020aa",
#         "iam_role_crn": "crn:v1:bluemix:public:iam::::serviceRole:Writer",
#         "iam_serviceid_crn": "crn:v1:bluemix:public:iam-identity::a/022374f4b8504a0eaa1ce419e7b5e793::serviceid:ServiceId-d14c9908-da0d-43d5-ab25-30a814045c46",
#         "resource_instance_id": "crn:v1:bluemix:public:cloud-object-storage:global:a/022374f4b8504a0eaa1ce419e7b5e793:4ed80b30-6560-4cc4-89ac-0d6c8b276420::",
#         "BUCKET":"8prec",
#         "FILE":"chennai.geojson",
#         "service_endpoint": "https://s3-api.us-geo.objectstorage.softlayer.net"
#     }
#
# f2 = download_file_cos(cos_cred, 'chennai_geohashes_8prec.json')
# geohash_dict = defaultdict(bool)
# tweetsList = f2.split("\n")
# for t in tweetsList:
#     geohash_dict = json.loads(t)
# # geohash_dict = json.load(f2)
#
#
# def flooded(lat, lon):
#     geohash = Geohash.encode(lon,lat, precision=8)
#     if geohash_dict.get(geohash) is not None:
#         return geohash_dict[geohash]
#     else:
#         return "No Satellite Data!"
#


@app.route('/chennai/count', methods=['GET','POST'])
def bb_query_count():
    dataset='chennai'
    min_lat = request.args.get('min_lat')
    min_lng = request.args.get('min_lng')
    max_lat = request.args.get('max_lat')
    max_lng = request.args.get('max_lng')
    start_t = request.args.get('start_date')
    end_t = request.args.get('end_date')
    # start_t = start_t
    # end_t = end_t
    es = Elasticsearch([{'host': '173.193.79.31', 'port': 31169}])

    raw_shelter_count = es.search(index=dataset + '-tweetneeds',body={"size": ES_SIZE, "query": {
        "bool" : {
            "must" : [{
                "match": {"properties.needClass": "shelter_matching"}
            },{"range" : {
            "properties.createdAt" : {
                "gte": start_t,
                "lte": end_t,
                "format": "yyyy-MM-dd HH:mm:ss||yyyy-MM-dd||epoch_millis"
            }
        }}],
            "filter" : {
                "geo_bounding_box" : {
                    "geometry.coordinates" : {
                        "top_left" : {
                            "lat" : min_lat,
                            "lon" : min_lng
                        },
                        "bottom_right" : {
                            "lat" : max_lat,
                            "lon" : max_lng
                        }
                    }
                }
            }
        }
    }})['hits']['total']
    raw_rescue_count = es.search(index=dataset + '-tweetneeds',body={"size": ES_SIZE, "query": {
        "bool" : {
            "must" : [{
                "match": {"properties.needClass": "rescue_match"}
            },{"range" : {
            "properties.createdAt" : {
                "gte": start_t,
                "lte": end_t,
                "format": "yyyy-MM-dd HH:mm:ss||yyyy-MM-dd||epoch_millis"
            }
        }}],
            "filter" : {
                "geo_bounding_box" : {
                    "geometry.coordinates" : {
                        "top_left" : {
                            "lat" : min_lat,
                            "lon" : min_lng
                        },
                        "bottom_right" : {
                            "lat" : max_lat,
                            "lon" : max_lng
                        }
                    }
                }
            }
        }
    }})['hits']['total']

    people_count = es.search(index=dataset + '-tweetneeds', body={"size": ES_SIZE, "query": {
        "bool" : {
            "must" : [{
                    "exists": {
                      "field": "properties.image.objects.person"
                    }
                  },{"range" : {
            "properties.createdAt" : {
                "gte": start_t,
                "lte": end_t,
                "format": "yyyy-MM-dd HH:mm:ss||yyyy-MM-dd||epoch_millis"
            }
        }}],
            "filter" : {
                "geo_bounding_box" : {
                    "geometry.coordinates" : {
                        "top_left" : {
                            "lat" : min_lat,
                            "lon" : min_lng
                        },
                        "bottom_right" : {
                            "lat" : max_lat,
                            "lon" : max_lng
                        }
                    }
                }
            }
        }
    }})['hits']['total']

    vehicle_count = es.search(index=dataset + '-tweetneeds', body={"size": ES_SIZE, "query": {
        "bool" : {
            "must" : [{
                    "exists": {
                      "field": "properties.image.objects.vehicles"
                    }
                  },{"range" : {
            "properties.createdAt" : {
                "gte": start_t,
                "lte": end_t,
                "format": "yyyy-MM-dd HH:mm:ss||yyyy-MM-dd||epoch_millis"
            }
        }}],
            "filter" : {
                "geo_bounding_box" : {
                    "geometry.coordinates" : {
                        "top_left" : {
                            "lat" : min_lat,
                            "lon" : min_lng
                        },
                        "bottom_right" : {
                            "lat" : max_lat,
                            "lon" : max_lng
                        }
                    }
                }
            }
        }
    }})['hits']['total']

    animal_count = es.search(index=dataset + '-tweetneeds', body={"size": ES_SIZE, "query": {
        "bool" : {
            "must" : [{
                    "exists": {
                      "field": "properties.image.objects.animal"
                    }
                  },{"range" : {
            "properties.createdAt" : {
                "gte": start_t,
                "lte": end_t,
                "format": "yyyy-MM-dd HH:mm:ss||yyyy-MM-dd||epoch_millis"
            }
        }}],
            "filter" : {
                "geo_bounding_box" : {
                    "geometry.coordinates" : {
                        "top_left" : {
                            "lat" : min_lat,
                            "lon" : min_lng
                        },
                        "bottom_right" : {
                            "lat" : max_lat,
                            "lon" : max_lng
                        }
                    }
                }
            }
        }
    }})['hits']['total']



    ph_shelter_count = es.search(index=dataset + '-osm', body={"size": ES_SIZE, "query": {
    "bool": {
      "must": [
        {
          "match": {
            "properties.needClass": "shelter_matching"
          }
        },{"match":{"properties.Flood": "false"}}
      ],
      "filter": {
        "geo_bounding_box": {
          "geometry.coordinates": {
            "top_left": {
              "lat": min_lat,
              "lon": min_lng
            },
            "bottom_right": {
              "lat": max_lat,
              "lon": max_lng
            }
          }
        }
      }

    }
  }})['hits']['total']
    ph_rescue_count = es.search(index=dataset + '-osm', body={"size": ES_SIZE, "query": {
    "bool": {
      "must": [
        {
          "match": {
            "properties.needClass": "rescue_match"
          }
        },{"match":{"properties.Flood": "false"}}
      ],
      "filter": {
        "geo_bounding_box": {
          "geometry.coordinates": {
            "top_left": {
              "lat": min_lat,
              "lon": min_lng
            },
            "bottom_right": {
              "lat": max_lat,
              "lon": max_lng
            }
          }
        }
      }

    }
  }})['hits']['total']



    return jsonify({"shelter_need":raw_shelter_count,"rescue_need":raw_rescue_count,"people":people_count,"vehicles":vehicle_count,"animals":animal_count,"osm_shelter":ph_shelter_count,"osm_rescue":ph_rescue_count})





@app.route('/chennai/data', methods=['GET','POST'])
def bb_query():
    dataset='chennai'
    min_lat = request.args.get('min_lat')
    min_lng = request.args.get('min_lng')
    max_lat = request.args.get('max_lat')
    max_lng = request.args.get('max_lng')
    start_t = request.args.get('start_date')
    end_t = request.args.get('end_date')
    # start_t = start_t * 1000
    # end_t = end_t * 1000
    es = Elasticsearch([{'host': '173.193.79.31', 'port': 31169}])

    raw_shelter = es.search(index=dataset + '-tweetneeds',body={"size": ES_SIZE, "query": {
        "bool" : {
            "must" : [{
                "match": {"properties.needClass": "shelter_matching"}
            },{"range" : {
            "properties.createdAt" : {
                "gte": start_t,
                "lte": end_t,
                "format": "yyyy-MM-dd HH:mm:ss||yyyy-MM-dd||epoch_millis"
            }
        }}],
            "filter" : {
                "geo_bounding_box" : {
                    "geometry.coordinates" : {
                        "top_left" : {
                            "lat" : min_lat,
                            "lon" : min_lng
                        },
                        "bottom_right" : {
                            "lat" : max_lat,
                            "lon" : max_lng
                        }
                    }
                }
            }
        }
    }})['hits']['hits']
    raw_rescue = es.search(index=dataset + '-tweetneeds',body={"size": ES_SIZE, "query": {
        "bool" : {
            "must" : [{
                "match": {"properties.needClass": "rescue_match"}
            },{"range" : {
            "properties.createdAt" : {
                "gte": start_t,
                "lte": end_t,
                "format": "yyyy-MM-dd HH:mm:ss||yyyy-MM-dd||epoch_millis"
            }
        }}],
            "filter" : {
                "geo_bounding_box" : {
                    "geometry.coordinates" : {
                        "top_left" : {
                            "lat" : min_lat,
                            "lon" : min_lng
                        },
                        "bottom_right" : {
                            "lat" : max_lat,
                            "lon" : max_lng
                        }
                    }
                }
            }
        }
    }})['hits']['hits']
    shelter = [s['_source'] for s in raw_shelter]
    rescue = [r['_source'] for r in raw_rescue]
    sh = str(json.dumps({"type": "FeatureCollection", "features": shelter}))
    rs = str(json.dumps({"type": "FeatureCollection", "features": rescue}))


    raw_ph_shelter = es.search(index=dataset + '-osm', body={"size": ES_SIZE, "query": {
    "bool": {
      "must": [
        {
          "match": {
            "properties.needClass": "shelter_matching"
          }
        },{"match":{"properties.Flood": "false"}}
      ],
      "filter": {
        "geo_bounding_box": {
          "geometry.coordinates": {
            "top_left": {
              "lat": min_lat,
              "lon": min_lng
            },
            "bottom_right": {
              "lat": max_lat,
              "lon": max_lng
            }
          }
        }
      }

    }
  }})['hits']['hits']
    raw_ph_rescue = es.search(index=dataset + '-osm', body={"size": ES_SIZE, "query": {
    "bool": {
      "must": [
        {
          "match": {
            "properties.needClass": "rescue_match"
          }
        },{"match":{"properties.Flood": "false"}}
      ],
      "filter": {
        "geo_bounding_box": {
          "geometry.coordinates": {
            "top_left": {
              "lat": min_lat,
              "lon": min_lng
            },
            "bottom_right": {
              "lat": max_lat,
              "lon": max_lng
            }
          }
        }
      }

    }
  }})['hits']['hits']

    ph_shelter = [s['_source'] for s in raw_ph_shelter]
    ph_rescue = [r['_source'] for r in raw_ph_rescue]


    ph_sh = str(json.dumps({"type": "FeatureCollection", "features": ph_shelter}))
    ph_rs = str(json.dumps({"type": "FeatureCollection", "features": ph_rescue}))

    people = es.search(index=dataset + '-tweetneeds', body={"size": ES_SIZE, "query": {
        "bool": {
            "must": [{
                "exists": {
                    "field": "properties.image.objets.person"
                }
            }, {"range": {
                "properties.createdAt": {
                    "gte": start_t,
                    "lte": end_t,
                    "format": "yyyy-MM-dd HH:mm:ss||yyyy-MM-dd||epoch_millis"
                }
            }}],
            "filter": {
                "geo_bounding_box": {
                    "geometry.coordinates": {
                        "top_left": {
                            "lat": min_lat,
                            "lon": min_lng
                        },
                        "bottom_right": {
                            "lat": max_lat,
                            "lon": max_lng
                        }
                    }
                }
            }
        }
    }})['hits']['hits']

    vehicle = es.search(index=dataset + '-tweetneeds', body={"size": ES_SIZE, "query": {
        "bool": {
            "must": [{
                "exists": {
                    "field": "properties.image.objets.vehicles"
                }
            }, {"range": {
                "properties.createdAt": {
                    "gte": start_t,
                    "lte": end_t,
                    "format": "yyyy-MM-dd HH:mm:ss||yyyy-MM-dd||epoch_millis"
                }
            }}],
            "filter": {
                "geo_bounding_box": {
                    "geometry.coordinates": {
                        "top_left": {
                            "lat": min_lat,
                            "lon": min_lng
                        },
                        "bottom_right": {
                            "lat": max_lat,
                            "lon": max_lng
                        }
                    }
                }
            }
        }
    }})['hits']['hits']

    animal = es.search(index=dataset + '-tweetneeds', body={"size": ES_SIZE, "query": {
        "bool": {
            "must": [{
                "exists": {
                    "field": "properties.image.objets.people"
                }
            }, {"range": {
                "properties.createdAt": {
                    "gte": start_t,
                    "lte": end_t,
                    "format": "yyyy-MM-dd HH:mm:ss||yyyy-MM-dd||epoch_millis"
                }
            }}],
            "filter": {
                "geo_bounding_box": {
                    "geometry.coordinates": {
                        "top_left": {
                            "lat": min_lat,
                            "lon": min_lng
                        },
                        "bottom_right": {
                            "lat": max_lat,
                            "lon": max_lng
                        }
                    }
                }
            }
        }
    }})['hits']['hits']

    p_people = [s['_source'] for s in people]
    v_vehicle = [r['_source'] for r in vehicle]
    a_animal = [r['_source'] for r in animal]

    people_data = str(json.dumps({"type": "FeatureCollection", "features": p_people}))
    vehicle_data = str(json.dumps({"type": "FeatureCollection", "features": v_vehicle}))
    animal_data = str(json.dumps({"type": "FeatureCollection", "features": a_animal}))

    data_read = jsonify({"shelter_need":sh,"rescue_need":rs,"osm_shelter":ph_sh,"osm_rescue":ph_rs,"people":people_data,"vehicle":vehicle_data,"animal":animal_data})
    print (sh)
    return data_read


port = int(os.getenv('PORT', 8000))

@app.route('/')
def index():

    try:
        start_date = request.args.get()
        read_data(gaz_name)


    except:
        params = {
            "centroid": [],
            "shelter_data": [],
            "rescue_data": [],
            "photon_shelter": [],
            "photon_rescue": [],
            "other_sh": [],
            "other_res": []
        }

    return make_map(params)


# @atexit.register
# def shutdown():
#     if client:
#         client.disconnect()


if __name__ == '__main__':

    app.run(host='0.0.0.0', port=port)
