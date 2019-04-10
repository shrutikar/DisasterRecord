from DRDB import DRDB
import os
import time
import psutil
from subprocess import Popen
from subprocess import PIPE
from subprocess import STDOUT
import traceback as tb
import json

TERMSLIMIT=400

failedCount=[-1,-1,-1,-1,-1]
services=['tc_service.py','inf_service.py','server.py','tstream_man.py','obj_service.py']
serviceStarters=['/root/startTC','/root/startINF','/root/startDR-Frontend','/root/startTStreamMan','/root/startOBJ']

def checkifrunning(name):
  for proc in psutil.process_iter():
    cmdline=" ".join(proc.cmdline())
    if name.lower() in cmdline.lower():
      return True
  return False

def launchCore(campaign,campaign_datasource):
  if campaign_datasource[4] == 'dataset':
    _cmd = ['./process_dataset.sh',campaign[1],campaign[4],campaign_datasource[3],campaign_datasource[2]]
    pid = Popen(_cmd, stdout=PIPE, stderr=STDOUT, stdin=PIPE)
    db=DRDB("/var/local/LNEx.db")
    db.add_drworker(campaign[1],campaign_datasource[2],pid.pid)
    db.update_media_object_status(campaign_datasource[2],1)
    db.destroy_connection()

  elif campaign_datasource[4] == 'twitterstream':
    db=DRDB("/var/local/LNEx.db")
    pendingterms=json.loads(campaign_datasource[7])['terms']
    termscnt=len(db.get_twitterstream_allterms())
    if termscnt + len(pendingterms) <= TERMSLIMIT:
      if db.exists_twitterstream(campaign[1]):
        db.update_twitterstream_terms(campaign[1],",".join(pendingterms))
        db.activate_twitterstream(campaign[1])
        db.update_media_object_status(campaign_datasource[2],1)
      else:
        db.init_twitterstream_terms(campaign[1],",".join(pendingterms))
        db.update_media_object_status(campaign_datasource[2],1)
    else:
      print("Can not add terms, limit reached!")
      db.update_media_object_status(campaign_datasource[2],-1)
    db.destroy_connection()

  elif campaign_datasource[4] == 'video':
    pass
  elif campaign_datasource[4] == 'image':
    pass
  elif campaign_datasource[4] == 'floodmap':
    pass
  else:
    pass


def ensureServices():
  global failedCount
  for j in range(len(failedCount)):
    if not checkifrunning(services[j]):
      failedCount[j]+=1
      if failedCount[j] == 0:
        print(services[j],"has been started")
      else:
        print(services[j],"has failed",failedCount[j],"times.")
      _cmd = [serviceStarters[j]]
      Popen(_cmd, stdout=PIPE, stderr=STDOUT, stdin=PIPE)

def checkStatus(campaign_datasource):
  db=DRDB("/var/local/LNEx.db")
  print(campaign_datasource[1], campaign_datasource[2])
  drworkerEntry=db.grab_drworker(campaign_datasource[1], campaign_datasource[2])
  db.destroy_connection()
  if len(drworkerEntry) > 0:
    try:
      os.kill(int(drworkerEntry[0][3]), 0)
    except OSError:
      var = tb.format_exc()
      print(var)
      db=DRDB("/var/local/LNEx.db")
      db.update_media_object_status(campaign_datasource[2], -1)
      db.destroy_connection()

while True:
  print("checking services...")
  ensureServices()
  print("checking for new data sources...")
  db=DRDB("/var/local/LNEx.db")
  campaigns=db.get_active_campaigns()
  db.destroy_connection()
  for campaign in campaigns:
    db=DRDB("/var/local/LNEx.db")
    campaign_datasources = db.get_media(campaign[1])
    db.destroy_connection()
    for campaign_datasource in campaign_datasources:
      if campaign_datasource[9] == 0:
        launchCore(campaign,campaign_datasource)
      elif campaign_datasource[9] == 1 and campaign_datasource[4] == 'twitterstream':
        launchCore(campaign,campaign_datasource)
      elif campaign_datasource[9] == 1:
        if campaign_datasource[4] != 'twitterstream':
          checkStatus(campaign_datasource)
  print("sleeping...")
  time.sleep(30)
