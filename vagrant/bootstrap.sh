#!/bin/bash

apt-get -y update

export DEBIAN_FRONTEND=noninteractive

cat /vagrant/vagrant/packages | xargs apt-get install -y


ln -s /vagrant/vagrant/apache.conf /etc/apache2/sites-available/betatestbrewing.conf

a2ensite betatestbrewing
a2dissite 000-default

service apache2 restart

# Install npm global stuff
npm install -g grunt-cli
npm install -g bower

# Run local node stuff
su -l -c 'pushd /vagrant && npm install' vagrant
su -l -c 'pushd /vagrant && bower --config.interactive=false install' vagrant
#su -l -c 'pushd /vagrant && grunt clean all' vagrant

