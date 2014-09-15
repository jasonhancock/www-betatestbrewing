#!/bin/bash

apt-get -y update

export DEBIAN_FRONTEND=noninteractive

cat /vagrant/vagrant/packages | xargs apt-get install -y
