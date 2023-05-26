FROM node:18

RUN /bin/bash &&\
    apt-get -y update &&\
    apt-get -y upgrade &&\
    npm install -g npm

WORKDIR /work

CMD /bin/bash