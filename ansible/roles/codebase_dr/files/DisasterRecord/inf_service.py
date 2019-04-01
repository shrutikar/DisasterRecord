from flask import Flask, request, send_from_directory, render_template_string, render_template, jsonify
import numpy as np
import tensorflow as tf
import requests
from PIL import Image
from io import BytesIO
import scipy
import sys,os
import traceback as tb

application = Flask(__name__, static_url_path='')

def graph_check(graph):
  ops = graph.get_operations()
  for op in ops:
    t=graph.get_tensor_by_name(op.name+':0')
    print(t.get_shape(), t.name)

sess=None
model=None

def load(mdl='flood'):
  global sess, model
  #url=str(url)
  model=str(mdl)
  #print("url,model")
  #print(url)
  #print(model)
  #print(os.getcwd())

  modelFile='./models/'+model+'/'+model+'.pb'

  graph = tf.Graph().as_default()
  sess = tf.Session()
  f = tf.gfile.FastGFile('./models/'+model+'/'+model+'.pb', 'rb')
  graph_def = tf.GraphDef()
  graph_def.ParseFromString(f.read())

  sess.graph.as_default()
  tf.import_graph_def(
    graph_def,
    input_map=None,
    return_elements=None,
    name="",
    op_dict=None,
    producer_op_list=None
  )

def inf(url):
  global sess, model
  classesFile='./models/'+model+'/classes.txt'
  with open(classesFile, "r") as fp:
    content=fp.readlines()
    content = [x.strip() for x in content]
    classes=[a.split(":")[1] for a in content]
  global sess
  url=str(url)
  y = sess.graph.get_tensor_by_name('InceptionV3/Predictions/Reshape_1:0')
  x = sess.graph.get_tensor_by_name('Placeholder:0')
  try:
    imgURL = url
    response = requests.get(imgURL)
    image = Image.open(BytesIO(response.content))
    dim = (640, 480)
    image_slim = image.resize(dim)

    pred_y = sess.run(y, feed_dict={x: image_slim})
    pred_y = pred_y[0, 0:]

    sorted_inds = [i[0] for i in sorted(enumerate(-pred_y), key=lambda x: x[1])]
    #classes=['flood','nonflood']

    p_prob=[]
    p_class=[]
    for i in range(2):
      index = sorted_inds[i]
      p_prob.append(pred_y[index])
      p_class.append(classes[index])
      print('Probability %0.2f%% => [%s]' % (pred_y[index] * 100, classes[index]))
  except:
    var = tb.format_exc()
    print(var)
    p_class=["nonflood"]
  return p_class[0]



@application.route('/classify')
def classify():
  urlText = request.args.get('url')
  return inf(urlText)

if __name__ == "__main__":
    load()
    application.run(port=30502)