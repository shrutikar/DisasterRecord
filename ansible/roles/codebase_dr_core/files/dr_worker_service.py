from DRDB import DRDB
import os
import time
import psutil
from subprocess import Popen
from subprocess import PIPE
from subprocess import STDOUT
import traceback as tb
import json
import datetime

def log_it(content,level="INFO"):
  with open("/var/log/DR.log", "a") as fp:
    fp.write("[{}] [{}] - DRECORD WORKER MANAGER SERVICE\n".format(str(datetime.datetime.now()),str(level)))
    fp.write(str(content))
    fp.write("\n")

TERMSLIMIT=400
cutoffLimit=25
masterRetry=300

failedCount=[-1,-1,-1,-1,-1,-1,-1]

services=[
  'tc_service.py',
  'inf_service.py',
  'server.py',
  'tstream_man.py',
  'obj_service.py',
  'manage.py',
  'safetyChecker.py']

serviceStarters=[
  '/root/startTC',
  '/root/startINF',
  '/root/startDR-Frontend',
  '/root/startTStreamMan',
  '/root/startOBJ',
  '/root/startAPI',
  '/root/startSafetyCheck']

def checkifrunning(name):
  for proc in psutil.process_iter():
    cmdline=" ".join(proc.cmdline())
    if name.lower() in cmdline.lower():
      return True
  return False

def launchCore(campaign,campaign_datasource):
  if campaign_datasource[4] == 'dataset':
    db=DRDB("/var/local/LNEx.db")
    c_status=db.grab_media_object(campaign_datasource[2])
    _cmd = ['./process_dataset.sh',campaign[1],campaign[4],campaign_datasource[3],campaign_datasource[2]]
    pid = Popen(_cmd, stdout=PIPE, stderr=STDOUT, stdin=PIPE)
    db.add_drworker(campaign[1],campaign_datasource[2],pid.pid)
    db.update_media_object_status(campaign_datasource[2],1)
    db.destroy_connection()

  elif campaign_datasource[4] == 'twitterstream':
    db=DRDB("/var/local/LNEx.db")
    c_status=db.grab_media_object(campaign_datasource[2])
    # processed 0: update terms (this will be picked up by tstream_service) 
    if len(c_status) > 0 and c_status[0][9] == 0:
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
        log_it("Can not add terms, limit reached!","ERROR")
        db.update_media_object_status(campaign_datasource[2],-1)
    # processed 1: launch the core to process the data
    elif len(c_status) > 0 and c_status[0][9] == 1:
      _cmd = ['./process_twitterstream.sh',campaign[1],campaign[4]]
      pid = Popen(_cmd, stdout=PIPE, stderr=STDOUT, stdin=PIPE)
      db.add_drworker(campaign[1],campaign_datasource[2],pid.pid)
      db.update_media_object_status(campaign_datasource[2],2)
    else:
      #TODO: check if still running and react
      pass
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
  global failedCount, cutoffLimit, masterRetry
  for j in range(len(failedCount)):
    if not checkifrunning(services[j]):
      failedCount[j]+=1
      if failedCount[j] == 0:
        log_it("{} has been started".format(services[j]))
      else:
        log_it("{} has failed {} times".format(services[j],failedCount[j]),"WARN")
      if failedCount[j] <= cutoffLimit:
        try:
          _cmd = [serviceStarters[j]]
          Popen(_cmd, stdout=PIPE, stderr=STDOUT, stdin=PIPE)
        except:
          log_it("failed to start {}".format(_cmd))
          failedCount[j]+=1
      else:
        failedCount[j]+=1
      if failedCount[j] >= masterRetry:
        failedCount[j] = 0

def checkStatus(campaign_datasource):
  db=DRDB("/var/local/LNEx.db")
  #print(campaign_datasource[1], campaign_datasource[2])
  drworkerEntry=db.grab_drworker(campaign_datasource[1], campaign_datasource[2])
  db.destroy_connection()
  if len(drworkerEntry) > 0:
    try:
      os.kill(int(drworkerEntry[0][3]), 0)
    except OSError:
      var = tb.format_exc()
      log_it(str(var),"ERROR")
      db=DRDB("/var/local/LNEx.db")
      db.update_media_object_status(campaign_datasource[2], -1)
      db.remove_drworker(campaign_datasource[1],campaign_datasource[2])
      db.destroy_connection()

while True:
  #print("checking services...")
  ensureServices()
  #print("checking for new data sources...")
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
      elif campaign_datasource[9] == 2:
        if campaign_datasource[4] == 'twitterstream':
          checkStatus(campaign_datasource)
      elif campaign_datasource[9] == -1:
        if campaign_datasource[4] == 'twitterstream':
          db=DRDB("/var/local/LNEx.db")
          db.update_media_object_status(campaign_datasource[2], 1)
          db.destroy_connection()
          #launchCore(campaign,campaign_datasource)
  #print("sleeping...")
  time.sleep(30)
