from flask import Flask, request, send_from_directory, render_template_string, render_template, jsonify
import numpy as np
import tensorflow as tf
import requests
from PIL import Image
from io import BytesIO
import scipy
import sys,os
import traceback as tb

import six.moves.urllib as urllib
import tarfile
import zipfile
from collections import defaultdict
from io import StringIO
import json

from object_detection.utils import ops as utils_ops
from object_detection.utils import label_map_util
from object_detection.utils import visualization_utils as vis_util

application = Flask(__name__, static_url_path='')

url_cache={}

from ObjectDetector import ObjectDetector
od=ObjectDetector()

@application.route('/classify')
def classify():
  urlText = request.args.get('url')
  return od.extract(urlText)

if __name__ == "__main__":
    application.run(port=30503)