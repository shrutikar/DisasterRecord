###########################################################################################
#                       TESTING SCRIPT
#                       Shelter/Rescue/Infrastrucutre(others)
#                       Author: Shruti Kar
###########################################################################################
from flask import Flask, request, send_from_directory, render_template_string, render_template, jsonify

import gensim, logging
from gensim import models, corpora, similarities
logging.basicConfig(format='%(asctime)s : %(levelname)s : %(message)s', level=logging.INFO)
import xlrd
import re
import string
printable = set(string.printable)
import nltk
import unicodedata
import pickle
from collections import Counter
import numpy as np
import random
from sklearn.metrics import accuracy_score
from sklearn.metrics import precision_recall_fscore_support
from sklearn import svm
from sklearn.feature_extraction.text import CountVectorizer, TfidfVectorizer
from nltk.stem.porter import PorterStemmer
from sklearn.svm import LinearSVC
from sklearn.ensemble import RandomForestClassifier
from sklearn import decomposition
from sklearn.decomposition import LatentDirichletAllocation
from nltk.corpus import stopwords
from nltk.stem.wordnet import WordNetLemmatizer
import string
from nltk import word_tokenize, pos_tag
from sklearn.decomposition import TruncatedSVD
from sklearn.metrics import confusion_matrix
from sklearn.model_selection import cross_val_predict
from sklearn import metrics
from sklearn.model_selection import train_test_split
from sklearn.model_selection import ShuffleSplit
from sklearn.model_selection import GridSearchCV
from sklearn.utils import check_random_state
from sklearn.ensemble import GradientBoostingClassifier
from imblearn.over_sampling import SMOTE
import numpy
from sklearn.externals import joblib

nltk.download('words')
nltk.download('wordnet')
nltk.download('punkt')

# fix random seed for reproducibility
numpy.random.seed(7)
# from sklearn_crfsuite import scorers
# from sklearn_crfsuite import metrics
words = set(nltk.corpus.words.words())
stop = set(stopwords.words('english'))
stop.update(('earthquake', 'flood', 'nepal', 'bangladesh', 'india', 'phillippine', 'pakistan', 'colorado', 'chile',
             'california', 'flooded', 'floods', 'flooding', 'quake',
             'earthquakes', 'typhoon', 'cyclone', 'typhoons', 'cyclones', 'disaster', 'disasters', 'quakes', 'fire',
             'fires', 'wildfire', 'wildfires', 'costa', 'rica',
             'costa rica', 'guatemala', 'italy', 'pablo', 'venezuela', 'refinery', 'refineries', 'alberta', 'australia',
             'bushfire', 'bushfires', 'bohol', 'boston', 'bombing',
             'bombings', 'explosion', 'explosions', 'brazil', 'glasgow', 'crash', 'helicopter', 'crashes',
             'helicopters', 'la', 'airport', 'shooting', 'airports', 'shootings',
             'lac', 'magnetic', 'train', 'trains', 'manila', 'ny', 'queensland', 'russia', 'meteor', 'sardinia',
             'savar', 'singapore', 'haze', 'building', 'buildings', 'yolanda',
             'west', 'texas', 'kashmir'))
exclude = set(string.punctuation)
lemma = WordNetLemmatizer()

token_dict = {}
stemmer = PorterStemmer()

application = Flask(__name__, static_url_path='')

def preprocess_tweet(tweet):
    '''Preprocesses the tweet text and break the hashtags'''

    tweet = strip_non_ascii(tweet)

    tweet = str(tweet.lower())

    # remove retweet handler
    if tweet[:2] == "rt":
        try:
            colon_idx = tweet.index(": ")
            tweet = tweet[colon_idx + 2:]
        except BaseException:
            pass

    # remove url from tweet
    tweet = re.sub(r'\w+:\/{2}[\d\w-]+(\.[\d\w-]+)*(?:(?:\/[^\s/]*))*','',tweet)

    # remove non-ascii characters
    tweet = "".join([x for x in tweet if x in printable])

    # additional preprocessing
    tweet = tweet.replace("\n", " ").replace(" https", "").replace("http", "")

    # remove all mentions
    tweet = re.sub(r"@\w+", "", tweet)

    # remove all mentions
    tweet = re.sub(r"#\w+", "", tweet)

    # padding punctuations
    tweet = re.sub('([,!?():])', r' \1 ', tweet)

    tweet = tweet.replace(". ", " . ").replace("-", " ")

    # shrink blank spaces in preprocessed tweet text to only one space
    tweet = re.sub('\s{2,}', ' ', tweet)

    tweet = " ".join(w for w in nltk.wordpunct_tokenize(tweet) if w.lower() in words or not w.isalpha())

    tweet = re.sub("^\d+\s|\s\d+\s|\s\d+$", " ", tweet)

    tweet = clean(tweet)

    # remove trailing spaces
    tweet = tweet.strip()

    return tweet

def clean(doc):
    stop_free = " ".join([i for i in doc.lower().split() if i not in stop])
    punc_free = ''.join(ch for ch in stop_free if ch not in exclude)
    normalized = " ".join(lemma.lemmatize(word) for word in punc_free.split())
    normalized = " ".join(stemmer.stem(word) for word in normalized.split())
    return normalized


def strip_non_ascii(s):
    if isinstance(s, unicode):
    #if isinstance(s, str):
        nfkd = unicodedata.normalize('NFKD', s)
        return str(nfkd.encode('ASCII', 'ignore').decode('ASCII'))
    else:
        return s


def tokenize(text):
    tokens = nltk.word_tokenize(text)
    stems = stem_tokens(tokens, stemmer)
    return stems


def stem_tokens(tokens, stemmer):
    stemmed = []
    for item in tokens:
        stemmed.append(stemmer.stem(item))
    return stemmed


def _tfidf(x):
    tfidf = TfidfVectorizer(tokenizer=tokenize, stop_words='english')
    tf_model=tfidf.fit(x)
    tfs_trans=tf_model.transform(x)
    tfs_trans = tfidf.fit_transform(x)
    # joblib.dump(tfs,"tf_idf_model.sav")
    tfs = tfs_trans.toarray()
    return tfs,tf_model


def bagn(x, n):
    bv = CountVectorizer(ngram_range=(n, n))
    bvm = bv.fit_transform(x)
    bvm = bvm.toarray()
    return bvm


def bgw(x):
    cv = CountVectorizer(min_df=0., max_df=1.)
    cvm = cv.fit_transform(x)
    cvm = cvm.toarray()
    return cvm

res_ind,she_ind,inf_ind,rescue,shelter,infra,ts,gbc,w2v_model = (None,None,None,None,None,None,None,None,None)
def initClassifier():
    global res_ind,she_ind,inf_ind,rescue,shelter,infra,ts,gbc,w2v_model
    filename = 'finalized_model.sav'
    res_ind,she_ind,inf_ind,rescue,shelter,infra,ts,gbc,w2v_model = pickle.load(open(filename, 'rb'))

@application.route('/classify')
def classify():
    global res_ind,she_ind,inf_ind,rescue,shelter,infra,ts,gbc,w2v_model
    new_text = request.args.get('text')
    #filename = 'finalized_model.sav'
    #res_ind,she_ind,inf_ind,rescue,shelter,infra,ts,gbc,w2v_model = pickle.load(open(filename, 'rb'))
    #new_text = "images of the ruins"
    # print new_text
    # new_text = strip_non_ascii(new_text)
    print(new_text)
    new_text = preprocess_tweet(new_text)
    print(new_text)
    new_text_split = list(new_text.split())
    print(new_text_split)
    n_list = list()
    n_list.append(new_text)
    print(np.shape(n_list))
    #filename = 'ts_model.sav'
    #ts = pickle.load(open(filename, 'rb'))
    new_tf = ts.transform(n_list).toarray()
    print(np.shape(new_tf), type(new_tf), np.shape(new_tf[0]))
    one = 0
    two = 0
    three = 0
    for e in new_text_split:
        if e in rescue:
            _i = rescue.index(e)
            one = one + res_ind[_i]
        if e in shelter:
            _i = shelter.index(e)
            two = two + she_ind[_i]
        if e in infra:
            _i = infra.index(e)
            three = three + inf_ind[_i]
    tmp = list()
    tmp.append(one)
    tmp.append(two)
    tmp.append(three)
    rm = list()
    for i in range(10):
        if len(new_text_split) > i:
            try:
                rm.append(w2v_model[new_text_split[i]])
            except:
                rm.append(np.zeros(200))
        else:
            rm.append(np.zeros(200))
    new_total = list(np.zeros(200))
    for e in rm:
        new_total = new_total + e
    new_total = new_total / len(new_text_split)
    v = map(float, tmp)
    # print type(tfsnt)

    tws = map(float, new_tf[0])
    tws.extend(v)
    tws.extend(new_total.tolist())
    f=list()
    f.append(tws)
    p = gbc.predict(f)
    print ("predicted!")
    print (type(p[0]),p[0])
    if p[0]==0:
        cls="rescue_match"
    elif p[0]==1:
        cls="shelter_matching"
    else:
        cls="infrastructure_need"
    return cls

if __name__ == "__main__":
    initClassifier()
    application.run(port=30501)