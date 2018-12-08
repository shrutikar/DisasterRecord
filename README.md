<img src="https://github.com/shrutikar/DisasterRecord/blob/master/static/drecord-logo.png" align="left" alt="LNEx Logo" width="120"/>

# DisasterRecord: 

#### A pipeline for disaster relief, coordination and response.

---
## Installation of packages and libraries


Clone DisasterRecord:
```
git clone https://github.com/shrutikar/DisasterRecord.git
```

Install the requirements in requirements.txt:
```
pip install -r requirements.txt
```

Clone the Location Name Extractor (LNEx) to extract and geolocate location names (in data_prepare.py function of DisasterRecord):
```
git clone https://github.com/halolimat/LNEx.git
```
Follow the README of LNEx to have photon setup and working.

DisasterRecord use our in-house research developed to detect flooded images. The tool call the RESTful API end (in data_prepare.py):
```
http://twitris.knoesis.org/floodEstimate/submitImage
```

We then detect objects (Vehicles, Animals, and People) in the images of flooded areas (in data_prepare.py). You should also clone the image objet detenction module with the following command:
```
git clone https://github.com/halolimat/Tensorflow-ImageObjects-Summarizer
```
### Deploy the code

The IP and Port currently used in data_prepare.py and server.py are: 
```
{'host': '173.193.79.31', 'port': 31169}
```
These need to be changed manually in data_prepare.py and server.py with the exposed IP and port.

Then run the data_prepare.py file :
```
python data_prepare.py
```
Then run the server.py file :
```
python server.py
```
Now the tool should be working on 
```
127.0.0.1:8080
```

##### Note for Stream processing

DisasterRecord is capable of stream processing and is designed for that purpose. However, since we are demonstrting the tool for the purpose of this competition, we use pre-disaster data. In order to process streams you should make minor modifcations to read from the streaming API instead of reading from the JSON file we have in the Object Storage.

---

## Working of the tool

![screenshot](https://github.com/shrutikar/DisasterRecord/blob/master/8.PNG)

        .
        └── DisasterRecord
            ├── Aggregate Level  
            │   ├── Need classification
            │   │   └── need    : rescue
            │   │   └── need    : shelter
            │   ├── Object detection from flooded images
            │   │   └── object    : animals
            │   │   └── object    : people
            │   │   └── object    : vehicles
            │   ├── Available help location from OpenStreetMap
            │   │   └── osm    : rescue
            │   │   └── osm    : shelter
            │   └── Word cloud concepts
            │       
            │
            └── Individual Level 
                ├── Need markers
                │   └── need    : rescue
                │   └── need    : shelter
                ├── Available Location markers
                │   └── Available    : rescue
                │   └── Available    : shelter
                └── Flood Mapping


The data in Object Storage is private data and have been used solely for the demonstration of this tool. We do not intend to distribute the data publicly. Kindly request us permission if you intend to use the data beyond this event.
