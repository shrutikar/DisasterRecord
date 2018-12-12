#!/bin/bash
#make.sh

DATA_JSON_URL="" #File path with Data containing JSON structured tweets with metadata

#Tweepy credentials:
Consumer_Key="AGdM9YV89pVK6KJlbRss1CdOB"
Consumer_Secret="GGdsC5NOCt4W6jmp6tTcXwjMmxzPACVxGopuIL1u1Krt95U9Nz"
Access_Key="2941079587-vXRnSGS9GVJldDkqhH5XLFg0agrfRKjuuFFh2Vy"
Access_Secret="CLXzOmy9PfWtWCSRQ8gf0fgoRANSkEPDCEdx1YSDsI6iT"

#PORT of API
WAM_API=""

#Image classification of Flood/Non-Flood images
Flood_Check="OFF"

#Object Detection from images - people,vehicles,animals
Object_Check="ON"

#Dataset name: disaster/ region name of the crawl
Dataset="chennai"

#Geographical area of targetted area
#[12.74, 80.066986084, 13.2823848224, 80.3464508057] - Chennai boundingbox
Boundingbox=("12.74" "80.066986084" "13.2823848224" "80.3464508057")

#List of keywords to search from:
Keywords=("Hurricane" "HurricaneFlorence" "Florence2018")

if [ -z "$DATA_JSON_URL" ];
then
    echo "tweet collection"
    python tweet_collection.py "${Keywords[*]}" $Consumer_Key $Consumer_Secret $Access_Key $Access_Secret $Flood_Check $Object_Check "${Boundingbox[*]}" $Dataset
else
    python prepare.py $DATA_JSON_URL $Flood_Check $Object_Check "${Boundingbox[*]}" $Dataset
fi

