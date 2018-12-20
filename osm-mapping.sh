#!/bin/bash


curl -X PUT "localhost:9200/"$1"-osm" -H 'Content-Type: application/json' -d'
{
  "mappings": {
    "doc": {
      "dynamic_templates": [
        {
          "strings": {
            "match_mapping_type": "string",
            "mapping": {
              "type": "keyword"
            }
          }
        }
      ],
      "properties": {
        "geometry": {
          "properties": {
            "type": {
              "type": "text"
            },
            "coordinates": {
              "type": "geo_point"
            }
          }
        },
        "type": {
          "type": "text"
        },
        "properties": {
          "properties": {
            "text": {
              "type": "text"
            },
            "key": {
              "type": "text"
            },
            "value": {
              "type": "text"
            },
            "needClass": {
              "type": "keyword"
            },
            "Flood": {
              "type": "boolean"
            }
          }
        }
      }
    }
  }
}
'
