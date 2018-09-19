import geo_calculations
from elasticsearch_dsl import Search, Q
from elasticsearch_dsl.connections import connections
import LNEx as lnex






def init_using_elasticindex():

    lnex.elasticindex(conn_string='localhost:9200', index_name="photon")

    # chennai flood bounding box
    bb = [12.74, 80.066986084, 13.2823848224, 80.3464508057]

    return lnex.initialize(bb, augment=True)


def set_elasticindex_conn(cs, inn):
    '''Sets the connection string and index name for the elastic index
    connection_string: (e.g, localhost:9200)
    index_name: (e.g., photon) '''


    global connection_string
    global index_name

    connection_string = cs
    index_name = inn



def search_index(bb):
    '''Retrieves the location names from the elastic index using the given
    bounding box'''


    if connection_string == '' or index_name == '':

        print "\n###########################################################"
        print "Global ERROR: Elastic host and port or index name not defined"
        print "#############################################################\n"
        exit()

    if not geo_calculations.is_bb_acceptable(bb) or bb[0] > bb[2] or bb[1] > bb[3]:

        print "\n##########################################################"
        print "Global ERROR: Bounding Box is too big, choose a smaller one!"
        print "############################################################\n"
        exit()

    connections.create_connection(hosts=[connection_string], timeout=60)
    
    phrase_search = [Q({"filtered": {
        "filter": {
            "geo_bounding_box": {
                        "coordinate": {
                            "bottom_left": {
                                "lat": bb[0],
                                "lon": bb[1]
                            },
                            "top_right": {
                                "lat": bb[2],
                                "lon": bb[3]
                            }
                        }
                        }
        },
        "query": {
            "match_all": {}
        }
    }
    })]

    #to search with a scroll
    e_search = Search(index=index_name).query(Q('bool', must=phrase_search))

    try:
        res = e_search.scan()
    except BaseException:
        raise

    return res

geo_info=init_using_elasticindex()
#connection_string="localhost:9200"
#index_name="photon"
#set_elasticindex_conn(connection_string, index_name)

#bb = [12.74, 80.066986084, 13.2823848224, 80.3464508057]
#r=search_index(bb)
print geo_info


