

<img src="drecord-logo.png" align="left" alt="LNEx Logo" width="120"/>

# DisasterRecord-Pipeline for disaster relief, coordination and response.
---
## Installation of packages and libraries


You can clone this repository by:
```
git clone https://github.com/shrutikar/DisasterRecord/tree/CFC
```

Make sure to install the packages mentioned in requirements.txt by the following command:
```
pip install -r requirements.txt
```

Clone LNEx - Location Name Extractor with the following command:
```
git clone https://github.com/halolimat/LNEx.git
```
In our work, LNEx is used to extract location names mentioned from tweet text data. We extract location names and their corresponding geo-coordinates by supplying LNEx with the text in data_prepare.py.

Clone Image objet detenction module with the following command:
```
git clone https://github.com/halolimat/Tensorflow-ImageObjects-Summarizer
```
We extract objects from flooded images to process images posted as tweet updates in data_prepare.py.


---


## IBM Kubernetes Cluster Creation

### Create an Image

#### One - Create Docker Image
# HUSSEIN PLZ ADD HOW TO GET PHOTON WORKING FOR CHENNAI HERE. 
First we'll need to create an image of a docker container. Here we simply pull an Elasticsearch container from the repo and commit it, naming it "es_test".

```
docker pull docker.elastic.co/elasticsearch/elasticsearch:6.3.2
```

```
docker commit 869f6813494b es_test

```

#### Two - Push to IBM Registry

Tag then push the "es_test" image to the IBM registry.

```
docker tag es_test registry.ng.bluemix.net/drecord/hazardsees:drecord
```

```
docker push registry.ng.bluemix.net/drecord/hazardsees:drecord
```

### Create the Cluster

#### Three - Create a cluster

From your IBM Cloud dashboard click Catalog and search for "kubernetes". Under the "Containers" category you should see "Kubernetes Service". Select this one and follow the steps to create a new cluster.

#### Four - Run the image in your cluster

Once the cluster is created you can return to your dashboard and find the cluster there. Select the newly formed cluster and click on the "Access" tab for commands on how to export KUBECONFIG. Below is the content of my KUBECONFIG. This file will need to be exported in order to execute the run and subsequent commands.

```
apiVersion: v1
clusters:
- name: mycluster-mike
  cluster:
    certificate-authority: ca-hou02-mycluster-mike.pem
    server: https://184.173.44.62:30095
contexts:
- name: mycluster-mike
  context:
    cluster: mycluster-mike
    user: mikep@knoesis.org
    namespace: default
current-context: mycluster-mike
kind: Config
users:
- name: mikep@knoesis.org
  user:
    auth-provider:
      name: oidc
      config:
        client-id: bx
        client-secret: bx
        id-token: eyJraWQiOiIyMDE3MTAzMC0wMDowMDowMCIsImFsZyI6IlJTMjU2In0.eyJpYW1faWQiOiJJQk1pZC01NTAwMDBHMUFFIiwiaXNzIjoiaHR0cHM6Ly9pYW0ubmcuYmx1ZW1peC5uZXQva3ViZXJuZXRlcyIsInN1YiI6Im1pa2VwQGtub2VzaXMub3JnIiwiYXVkIjoiYngiLCJnaXZlbl9uYW1lIjoiTWljaGFlbCIsImZhbWlseV9uYW1lIjoiUGFydGluIiwibmFtZSI6Ik1pY2hhZWwgUGFydGluIiwiZW1haWwiOiJtaWtlcEBrbm9lc2lzLm9yZyIsImV4cCI6MTUzNjYyODUxNCwic2NvcGUiOiJpYm0gb3BlbmlkIiwiaWF0IjoxNTM2NjI0OTE0fQ.I3ArsN5LohhPBU0Y305sfR1ysqfBBWbjNFOx9-6rOuDWIijQAHPH2DqMjdLs6PKV1TGolWrWdew6SH0i5QXyXVbTIq6od0lAPtOWbHogl7arjZS83xnW91Qm1wGhwXJMJXTUeDGBwf_oS_Mr4Zii5dYy1Tc1xMPuSR-H77ChBc5tnxieHN80f0SFIk-1ec0AhDdkvCO7EuxVmzwAc_C_TCNDlYbfRqN0atcrRK23V7-Lci51R3oQqb5FEhlXKyKp7kfH18z7x8nXd-2W7hjSfQ33FrkFeIpUlODOetotT5MgWORczZQGMAE-Z16n_4P79LiiWk_c-ChShSNY5MjSBg
        idp-issuer-url: https://iam.ng.bluemix.net/kubernetes
        refresh-token: J1Dj0Nc_5jxIuMr90jgXDyhadZYs5SHvyJyQee_pCcKA4PqrUUwIzv1dSzY5eAVrTW956z8a0VWPWPPXd7YFC0uSAhbCm3GEMnx1R5W3jWKVZXqNwZZHYk_koRGFstGh393vZCnufGklIV1TG6IdEgzMyXGFw4A-LdTV9CQ6piCufzmMFIX520HmO8u2h0vghjDYFlUfFVL9jSiHZE5OwN3nfc36Atanj8HmCfbcAuyl0UzFMk4t7TAeqcLYVws_aGnEO5QhVprxzrm77Clew2o4AysoEUeKdeNNwtmq5fHdx9rEZoigKLg0Smey8k7VXSS7vT0ahdDuSoPLXTq9Q2W5G2sP9HHMKOKgquKHLzFiGTaWzowoX7M46kO75khAqBSapnBdABbtKMPJ1at99vB_sc-mc0RFd7T0H3BQd8HC-fGm7jrBZn7DKfB-Sx07ERHE_c5WX0RCotNufmHohnGdd2y5KNiQ-D6mdbDSXJRLXJzT-Q38TDr6C_8eBujHmOIGhJeCgaNMpa0bv4Y9tL6Gl1EzcahwlQJJDTs6wxN27v2lsqfgQ2XKbcyBJgRefHEVLOEB1i6j6mtqussH9hjmlzOhkvTmbggM4eTz-pSUXQZEeiVlJHiAiSpDNNbx7gF5toLj3M1RePLMivwKdtjkLXsCbAeO01V62qd3AePAzo_7MJq738JUoN16f6rQB00moijh61jZdgN5GRdUVL9iv1BaLw1BRqglDuXqTxJoo4ok57HGGLrxNtcP5YmVoCb0ymGh2LqrzHJgXNFa7O2RFAaOk4prutofb6vKrMJTC2eMI-ORa6wAgfglxC8BVQeBanBnwdjAn5cX4ab457Op
```

To run/start the image:

```
kubectl run es-test-deployment --image=registry.ng.bluemix.net/drecord/hazardsees:drecord
```

To expose the ports for external access:

```
kubectl expose deployment/es-test-deployment --type=NodePort --port=9200 --name=es-test-service --target-port=9200
```

To find the port that was exposed:

```
kubectl describe service es-test-service
```

Find the "NodePort: " property to find the exposed port.

To find the public IP:

```
ibmcloud ks workers <cluster name>
```

Attempt access to this IP and port with curl:

```
curl -X GET "<IP>:<port>"
```

---
## Basic explanation of code

We have two main python files.
one - data_prepare.py
two - server.py

### data_prepare.py
This file is responsible for the backend processing of data. It reads the data present on Object Storage and performs vigourous processing. Which includes:
classification of text data_prepare.py;333
classification of images data_prepare.py;232
object detection from images data_prepare.py;256
Classification of OSM data data_prepare.py;328

All of these data are then written to indices of ElasticCluster. 

### server.py
These data are read by flask application server.py, and provides the front-end with all the data required.

Therefore, make sure to run the file: data_prepare.py when you have the kubernetes cluster and ElasticSearch with photon dump working:
```
python data_prepare.py
```

This application can be used for streaming-in data with small modifications like, data_prepare.py can read every new data (monitoring the timestamp) from the streaming data provided an endpoint, and keeps broadcasting to a socket. Where simultaneously server.py keeps listening to the socket to get all the data that is available and updates as soon as anything new is updated.

---

We deploy using cloud foundry command line. From within the folder DisasterRecord-CFC, run the following command:
```
cf push get-started-python-flask-shruti -b python_buildpack
```

You will be able to view the working of the application from the application's dashboard by visiting the URL that is provided.

## Working of the tool

![screenshot](static/screenshot1.png)

        .
        └── src
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
                │   │   └── need    : rescue
                │   │   └── need    : shelter
                ├── Available Location markers
                │   │   └── need    : rescue
                │   │   └── need    : shelter
                └── Flood Mapping

# PORT MODIFICATION----------> HUSSEIN KINDLY CHANGE THE FILES data_prepare.py AND server.py TO ACCEPT PORT and IP AS CMD LINE ARG AND USE THIS PORT WHEREVER 31169 IS USED AND IP WHEREVER 173.193.79.31 IS USED.

The relevant data from Object Storage and their credentials have been provided in the code. Natural Language classifier has been custon trained and is been used in data_prepare.py. The credential to those have also been provided in the code. No modification is required for these.

The data in Object Storage is private data and have been used solely for the demonstration of this tool. We do not intend to distribute the data publicaly. Kindly request us permission if you intend to use the data beyond this event.
