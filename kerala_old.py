import flask
from elasticsearch import Elasticsearch
from flask import Flask, request, send_from_directory, render_template_string, render_template, jsonify, Response, redirect, url_for
import requests
import json, os
import Geohash, json, os
import collections,operator
from collections import defaultdict
import math, decimal
from geopy.distance import great_circle
import numpy as np
application = Flask(__name__)

"""
Location
Rescue
Flood mapping
Directions
Disaster mapping
Routing
Matching
Disaster Response
Social Media
"""


def make_map(params):

    with open("OSM_features_icons_dict.json") as f:
        OSM_features_icons_dict = json.dumps(json.load(f))
    params['OSM_features_icons_dict'] = OSM_features_icons_dict

    return render_template('index.html', **params)


dname = "chennai"
geohash_fname = "_Data/"+dname+"_geohashes_8prec.json"
geohash_dict = defaultdict(bool)
if os.path.isfile(geohash_fname):
    print "returning cached file..."
    with open(geohash_fname) as f:
        geohash_dict = json.load(f)
    print len(geohash_dict.keys()), "geohashes"
else:
    print "Geohash File is not in folder"


def get_coords(lat1, lon1, lat2, lon2, amount_coords):
      return zip(np.linspace(lat1, lat2, amount_coords),
                 np.linspace(lon1, lon2, amount_coords))

def interpolate_try(crds,start):
    s_lat=start[0]
    s_lon=start[1]
    new_cord=list()
    for i in range(len(crds)):
        if i==0:
            long1 = float(s_lon)
            lat1 = float(s_lat)
            long2 = float(crds[i][0])
            lat2 = float(crds[i][1])
        elif i==(len(crds)-1):

            break
        else:

            tp=i+1
            long1 = float(crds[i][0])
            lat1 = float(crds[i][1])
            long2 = float(crds[tp][0])
            lat2 = float(crds[tp][1])
        st=list()
        ed=list()
        st.append(lat1)
        st.append(long1)
        ed.append(lat2)
        ed.append(long2)
        di=great_circle(st, ed).kilometers
        arb=di / 0.02
        # print "di",di,arb

        ass = get_coords(lat1, long1, lat2, long2, arb)

        for a in ass:
            n=list()
            n.append(a[1])
            n.append(a[0])
            new_cord.append(n)
    return new_cord


def get_dist(st,fl):
    start_ln=float(st[0])
    start_lt=float(st[1])
    points={}
    cod=list()
    R = 6373.0
    s=[]
    s.append(st[1])
    s.append(st[0])
    for i,e in enumerate(fl):

        f=[]
        f.append(e[1])
        f.append(e[0])
        distance=great_circle(s, f).kilometers
        cod.append(e)
        points[i]=distance
    # od = collections.OrderedDict(sorted(points.items()))
    sorted_x = sorted(points.items(), key=operator.itemgetter(1))
    # print sorted_x
    # for k, v in od.iteritems(): print k, v
    return sorted_x,cod

@application.route('/find_match', methods=['GET','POST'])
def find_match():
    # interpolate_try()
    start_lat = request.args.get('start_1')
    start_lon = request.args.get('start_0')
    cl = request.args.get('cl')
    print start_lat
    print start_lon
    if (cl=='shelter_matching'):
        d=json.loads(ph_sh)
        o=json.loads(other_s)
    if (cl=='rescue_match'):
        d=json.loads(ph_rs)
        o=json.loads(other_r)
    if (cl=='infrastructure_need'):
        d=json.loads(ph_inf)
        o=json.loads(other_i)
    st=list()
    st.append(start_lon)
    st.append(start_lat)
    s=list()
    s.append(start_lat)
    s.append(start_lon)
    fl=list()

    for e in d["features"]:
        # final_lon=e["geometry"]["coordinates"][0]
        # final_lat=e["geometry"]["coordinates"][1]
        final=e["geometry"]["coordinates"]
        fl.append(final)
    if o:
        for e in o["features"]:
            # final_lon=e["geometry"]["coordinates"][0]
            # final_lat=e["geometry"]["coordinates"][1]
            final=e["geometry"]["coordinates"]
            fl.append(final)

    dist=get_dist(st,fl)
    # new_dist=route_dist(st,fl)
    sorted_dist=dist[0]
    new_cord=dist[1]
    final_route=None

    end=list()
    route_no = ""

    for i in range(len(sorted_dist)):
        index=sorted_dist[i][0]
        new_lon= new_cord[index][0]
        new_lat= new_cord[index][1]
        response=requests.get("https://api.mapbox.com/directions/v5/mapbox/driving-traffic/"+str(start_lon)+","+str(start_lat)+";"+str(new_lon)+","+str(new_lat)+"?geometries=geojson&access_token=pk.eyJ1IjoiaGFsb2xpbWF0IiwiYSI6ImNqZWRrcjM2bTFrcWEzMmxucDQ4N2kxaDMifQ.Buarvvdqz7yJ1O25up2SzA")
        all_data=json.loads(response.content)
        # print i,all_data
        try:
            for r in range(len(all_data['routes'])):
                route = all_data['routes'][r]['geometry']
                all_cords = route['coordinates']

                res = flood_check(all_cords,s)
                if res == "flooded route":
                    continue
                if res == "route safe":
                    end.append(new_lon)
                    end.append(new_lat)
                    final_route=route
                    route_no=r
            if final_route is None:
                continue
            else:
                break
        except:
            end.append(start_lon)
            end.append(start_lat)
            route_no="not available"
            break
    new_name=""
    if route_no!="not available":
        for e in d["features"]:
            if e["geometry"]["coordinates"]==end:
                new_name=e["properties"]["name"]
                # print new_name
                break
    if new_name=="":
        j= json.dumps({"end":end,"route_no":route_no,"phone":"not available"});
    else:
        try:
            new_lon=end[0]
            new_lat=end[1]
            response1=requests.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+str(new_lat)+","+str(new_lon)+"&radius=500&keyword="+new_name+"&key=AIzaSyANUmhGp9RnNMVg4yZCIF-P0lMovGbTNEg")
            all_data1=json.loads(response1.content)
            place_id=all_data1["results"][0]["place_id"]
            response=requests.get("https://maps.googleapis.com/maps/api/place/details/json?placeid="+place_id+"&key=AIzaSyANUmhGp9RnNMVg4yZCIF-P0lMovGbTNEg")
            all_data=json.loads(response.content)
            phone_numb= all_data["result"]["formatted_phone_number"]
            address=all_data["result"]["formatted_address"]
            all_data=new_name+","+"contact information : "+address+" "+str(phone_numb)
        except:
            all_data="not available"
        j= json.dumps({"end":end,"route_no":route_no,"phone":all_data});


    print j
    return j

def flood_check(cordin,strt):
    # print len(cordin)
    cordin = interpolate_try(cordin,strt)
    # print cordin
    # print len(cordin)
    f=None
    for e in cordin:
        # print e
        ln=e[0]
        lt = e[1]
        # print type(ln),lt
        f=None
        n_end=list()
        n_end.append(lt)
        n_end.append(ln)
        dis=great_circle(strt, n_end).kilometers
        geohash = Geohash.encode(ln,lt, precision=8)
        if geohash_dict.get(geohash) is not None:
            x=geohash_dict[geohash]
        else:
            x="No Satellite Data!"
        # print x
        if str(x)=="True" and dis>0.5:
            # print "entered true"
            f="flooded route"
            break
    # print f
    if f=="flooded route":
        return f
    else:
        return "route safe"

@application.route("/data", methods=['GET','POST'])
def get_data():
    dataset = request.form['dataset']
    read_data(dataset)
    map_ = index(dataset)
    return map_


def read_data(lat, lon, radius, start_date, end_date):   
    es = Elasticsearch([{'host': '173.193.79.31', 'port': 31169}])

    q = {
        "size": 1000,
        "query": {
            "bool" : {
                "must" : {
                    "match_all" : {}
                },
                "filter" : {
                    "geo_distance" : {
                        "distance": str(radius),
                        "pin.location" : {
                            "lat": lat,
                            "lon": lon
                        }
                    },
                    'range': {
                        "date": {
                            'gte': start_date,
                            'lt': end_date
                        }
                    }
                }
            }
        }
    }


    needs = es.search(index=dataset+'-tweetneeds', body=q)['hits']['hits']
    sh = {"type": "FeatureCollection", "features": []}
    rs = {"type": "FeatureCollection", "features": []}
    inf = {"type": "FeatureCollection", "features": []}
    for need in needs:
        s = need['_source']
        if s['properties']['class'] == "shelter_matching":
            sh['features'].append(s)
        elif s['properties']['class'] == "rescue_match":
            rs['features'].append(s)
        elif s['properties']['class'] == "infrastructure_need":
            inf['features'].append(s)

    return {
        "sh": sh,
        "rs": rs,
        "inf": inf
    }

@application.route("/loc", methods=['GET','POST'])
def query():
    #loc_name = request.form['query_loc']
    txt="http://127.0.0.1:2322/api?q=Kerala"
    r=requests.get(txt)
    t=json.loads(r.content)
    print json.dumps(t, indent=2)
    #for e in t['features']:
#	cord= e['geometry']['coordinates']
#	ext= e['properties']['extent']
#	break



@application.route("/")
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


@application.route("/needs")
def needs():
    data = "{}"
    try:
        d = read_data(
            request.args.get("start_date"),
            request.args.get("end_date"),
            request.args.get("lat"),
            request.args.get("lon"),
            request.args.get("radius"))
        data = json.dumps(d)
    except:
        pass

    return "data"

@application.route('/test', methods=['GET','POST'])
def check_selected():
    with open("_Data/chennai.geojson") as f:
        data = json.load(f)
    data["features"] = data["features"][0::3]
    return json.dumps(data)


if __name__ == "__main__":
    application.run(host='127.0.0.1', port=8989)
    # interpolate_try()
    # intp() 
