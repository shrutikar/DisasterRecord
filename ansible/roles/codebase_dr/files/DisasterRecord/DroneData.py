class DroneData:

  def __init__(self):

    self.datasets = {
      "florance": [
                {
                    "id": "003",
                    "path_feature": {
                      "type": "Feature",
                      "properties": {},
                      "geometry": {
                        "type": "LineString",
                        "coordinates": [
                          [-77.909429, 34.781765],
                          [-77.909838, 34.781679],
                          [-77.910186, 34.781380],
                          [-77.910488, 34.781072],
                          [-77.911066, 34.780527],
                          [-77.911337, 34.780270],
                          [-77.911603, 34.779988],
                          [-77.912021, 34.779515],
                          [-77.912298, 34.779197],
                          [-77.912594, 34.778949],
                          [-77.913201, 34.779174]
                        ]
                      }
                    },
                    "video_feature": {
                      "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [-77.911337, 34.780270]
                      },
                      "properties": {
                        "videoURL": "http://130.108.86.152/droneVideos/florance/003.mp4"
                      }
                    },
                    "object_det_features":[
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-77.910488, 34.781072]
                        },
                        "properties": {
                          "frameURL": "http://130.108.86.152/droneFrames/florance/003/frame360.jpg",
                          "objectType": "vehicle"
                        }
                      }
                    ]
                },
                {
                    "id": "013",
                    "path_feature": {
                      "type": "Feature",
                      "properties": {},
                      "geometry": {
                        "type": "LineString",
                        "coordinates": [
                          [-77.907635, 34.784618],
                          [-77.904276, 34.785258],
                          [-77.904150, 34.785421],
                          [-77.903778, 34.785742],
                          [-77.903326, 34.786072],
                          [-77.902979, 34.786204],
                          [-77.902862, 34.786899],
                          [-77.902320, 34.786815],
                          [-77.901409, 34.787211],
                          [-77.900925, 34.787432]
                        ]
                      }
                    },
                    "video_feature": {
                      "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [-77.902979, 34.786204]
                      },
                      "properties": {
                        "videoURL": "http://130.108.86.152/droneVideos/florance/013.mp4"
                      }
                    },
                    "object_det_features":[
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-77.904276, 34.785258]
                        },
                        "properties": {
                          "frameURL": "http://130.108.86.152/droneFrames/florance/013/frame0.jpg",
                          "objectType": "vehicle"
                        }
                      }
                    ]
                  } 
          ], #end of IRMA
      "irma": [
                {
                    "id": "001",
                    "path_feature": {
                      "type": "Feature",
                      "properties": {},
                      "geometry": {
                        "type": "LineString",
                        "coordinates": [
                          [-81.775011, 26.130313],
                          [-81.775011, 26.130313],
                          [-81.775011, 26.130313],
                          [-81.776011, 26.130313],
                          [-81.777011, 26.130113],
                          [-81.777011, 26.130113],
                          [-81.777011, 26.130113],
                          [-81.778078, 26.130130]
                        ]
                      }
                    },
                    "video_feature": {
                      "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [-81.776011, 26.130213]
                      },
                      "properties": {
                        "videoURL": "http://130.108.86.152/droneVideos/irma/001.mp4"
                      }
                    },
                    "object_det_features":[
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-81.777011, 26.130113]
                        },
                        "properties": {
                          "frameURL": "http://130.108.86.152/droneFrames/irma/001/frame900.jpg",
                          "objectType": "vehicle"
                        }
                      }
                    ]
                },
                {
                    "id": "002",
                    "path_feature": {
                      "type": "Feature",
                      "properties": {},
                      "geometry": {
                        "type": "LineString",
                        "coordinates": [
                          [-81.779546, 26.127645],
                          [-81.779546, 26.127645],
                          [-81.779646, 26.127645],
                          [-81.779646, 26.128645],
                          [-81.779746, 26.128645],
                          [-81.779746, 26.128645],
                          [-81.779846, 26.129645],
                          [-81.779846, 26.129645],
                          [-81.779946, 26.130645],
                          [-81.780070, 26.131469]
                        ]
                      }
                    },
                    "video_feature": {
                      "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [-81.779746, 26.128645]
                      },
                      "properties": {
                        "videoURL": "http://130.108.86.152/droneVideos/irma/002.mp4"
                      }
                    },
                    "object_det_features":[
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-81.780070, 26.131469]
                        },
                        "properties": {
                          "frameURL": "http://130.108.86.152/droneFrames/irma/002/frame1350.jpg",
                          "objectType": "vehicle"
                        }
                      }
                    ]
                  } 
          ], #end of IRMA
    }

  def getData(self,dataset):
    return self.datasets[dataset]