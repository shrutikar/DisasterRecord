from subprocess import Popen
from subprocess import PIPE
from subprocess import STDOUT
import traceback as tb
import time
import psutil
from DRDB import DRDB

lastTerms=[]
pid=None
failedCount=0

def startstream():
  global pid
  _cmd = ['python', 'tstream.py']
  pid=Popen(_cmd, stdout=PIPE, stderr=STDOUT, stdin=PIPE)

def killstream():
  global pid
  pid.kill()

def checkifrunning(name):
  for proc in psutil.process_iter():
    cmdline=" ".join(proc.cmdline())
    if name.lower() in cmdline.lower():
      return True
  return False

def termsChanged():
  db=DRDB("/var/local/LNEx.db")
  currentTerms=db.get_twitterstream_allterms()
  db.destroy_connection()
  for term in currentTerms:
    if term not in lastTerms:
      return True
  for term in lastTerms:
    if term not in currentTerms:
      return True
  return False

def updateLastTerms():
  global lastTerms
  db=DRDB("/var/local/LNEx.db")
  currentTerms=db.get_twitterstream_allterms()
  db.destroy_connection()
  lastTerms=currentTerms

def checkIfEmpty():
  db=DRDB("/var/local/LNEx.db")
  currentTerms=db.get_twitterstream_allterms()
  db.destroy_connection()
  if len(currentTerms) == 0:
    return True
  else:
    return False

while True:
  if checkIfEmpty():
    try:
      if checkifrunning("tstream.py"):
        killstream()
    except:
      pass
  elif not checkifrunning("tstream.py"):
    startstream()
    updateLastTerms()
  elif termsChanged():
    killstream()
    updateLastTerms()
    time.sleep(10)
    startstream()
  else:
    pass
  time.sleep(15)