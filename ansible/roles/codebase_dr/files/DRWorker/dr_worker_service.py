from DRDB import DRDB
import os
import time
from subprocess import Popen
from subprocess import PIPE
from subprocess import STDOUT

def launchCore(campaign,campaign_datasource):
  if campaign_datasource[4] == 'dataset':
    _cmd = ['process_dataset.sh',campaign[1],campaign[4],campaign_datasource[3]]
    pid = Popen(_cmd, stdout=PIPE, stderr=STDOUT, stdin=PIPE)
    db=DRDB("/var/local/LNEx.db")
    db.add_drworker(campaign[1],campaign_datasource[2],pid)
  elif campaign_datasource[4] == 'twitterstream':
    pass
  elif campaign_datasource[4] == 'video':
    pass
  elif campaign_datasource[4] == 'image':
    pass
  elif campaign_datasource[4] == 'floodmap':
    pass
  else:
    pass

def checkStatus(campaign_datasource):
  db=DRDB("/var/local/LNEx.db")
  drworkerEntry=db.grab_drworker(campaign_datasource[1], campaign_datasource[2])
  db.destroy_connection()
  try:
    os.kill(drworkerEntry[3], 0)
  except OSError:
    db=DRDB("/var/local/LNEx.db")
    db.update_media_object_status(campaign_datasource[2], -1)
    db.destroy_connection()

while True:
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
      elif campaign_datasource[9] == 1:
        checkStatus(campaign_datasource)

  time.sleep(30)
