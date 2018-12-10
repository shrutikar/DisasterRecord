import json, os
import random
import string
import hashlib
#from elasticsearch import Elasticsearch

def generate_key(length):
    char_set = string.ascii_letters              
    urand = random.SystemRandom()                                           
    return ''.join([urand.choice(char_set) for _ in range(length)])

def main():

    es = Elasticsearch([{'host': 'localhost', 'port': 9200}])

    print("Welocme to DisasterRecord API key generator")
    #get email
    email = raw_input('Enter email address of a requester: ')
    while not email:
        email = input('Enter non empty email address: ')
    #get name
    name = raw_input('Enter name of the requester: ')
    while not name:
        email = input('Enter non empty name: ')
    # get organization
    organization = raw_input('Enter organization name of the requester: ')
    while not email:
        email = input('Enter non empty organization name: ')
    # get limits
    limits = raw_input('Enter any limits of the requester: ')
    # get other-info
    other_info = raw_input('Enter any other info about the requester: ')
    # get seed
    seed = raw_input('Enter seed: ')
    while not seed:
        seed = input('Enter non empty seed: ')
    seed = hashlib.md5(seed).hexdigest()

    genKey = generate_key(20)
    genKey = genKey.encode('base64')
    genKey = genKey[:-3]
    genKey = seed + '-' + genKey
    print('Generated API key: ' + genKey)
    #add the key and info to ES
    body = {
        "record": {
            "email": email,
            "key": genKey,
            "limits": limits,
            "name": name,
            "organization": organization,
            "other_info": other_info
        }
    }
    es.index(index='api-keys', doc_type='doc', body=body)
    print("All information has been added to ES database")


    

if __name__ == '__main__':
     main()