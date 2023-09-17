FROM node:18
RUN /bin/bash &&\
    apt-get -y update &&\
    apt-get -y upgrade &&\
    npm install -g npm

WORKDIR /app
COPY . /app

RUN yarn

EXPOSE 3000
CMD /bin/bash
