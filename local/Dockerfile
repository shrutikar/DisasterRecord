FROM phusion/baseimage 

# Enable SSH
RUN rm -f /etc/service/sshd/down

ADD DisasterRecord.pub /root/.ssh/authorized_keys
COPY DisasterRecord.pem /root/.ssh/id_rsa
COPY DisasterRecord.pub /root/.ssh/id_rsa.pub
RUN chmod 0600 /root/.ssh/authorized_keys
RUN chmod 0600 /root/.ssh/id_rsa
RUN chmod 0600 /root/.ssh/id_rsa.pub

# Install oracle java 8
RUN DEBIAN_FRONTEND=noninteractive add-apt-repository -y ppa:webupd8team/java
RUN echo oracle-java8-installer shared/accepted-oracle-license-v1-1 select true | /usr/bin/debconf-set-selections

RUN apt-get -q update && apt-get -q -y upgrade
RUN DEBIAN_FRONTEND=noninteractive apt-get -q -y install aptitude python python-apt runit git oracle-java8-installer oracle-java8-set-default sudo

CMD ["/sbin/my_init"]
