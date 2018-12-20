#!/bin/bash

curl -X PUT "localhost:9200/"$1"-file" -H 'Content-Type: application/json' -d'
{
  "mappings":{
      "doc":{
          "dynamic_templates": [
          {
          "strings": {
          "match_mapping_type": "string",
          "mapping": {
              "type": "keyword"
          }
          }
          }
          ],"properties":{
"record":{
              "properties":{
                  "text": {"type": "text"},
                  "time": {"type": "date",
              "format": "yyyy-MM-dd HH:mm:ss||yyyy-MM-dd||epoch_millis"},
                  "imageurl": {"type": "text"},
                  "id": {"type": "text"},
                  "record-id": {"type": "long"}
              }
           }}
          }
      }
  }
'
