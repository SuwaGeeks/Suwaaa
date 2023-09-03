FROM node:18

RUN /bin/bash

RUN apt-get -y update &&\
    apt-get -y upgrade

RUN git clone https://github.com/rbenv/rbenv.git ~/.rbenv &&\
    echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bash_profile &&\
    eval "$(/root/.rbenv/bin/rbenv init - bash)" >> ~/.bash_profile &&\
    mkdir -p "$(rbenv root)"/plugins &&\
    git clone https://github.com/rbenv/ruby-build.git "$(rbenv root)"/plugins/ruby-build &&\
    apt-get install -y autoconf bison build-essential libssl-dev libyaml-dev libreadline6-dev zlib1g-dev libncurses5-dev libffi-dev libgdbm6 libgdbm-dev &&\
    rbenv install 3.2.2 &&\
    rbenv global 3.2.2 &&\
    gem install rails

WORKDIR /work

CMD /bin/bash
