# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "trusty64"
  config.vm.box_url = "http://cloud-images.ubuntu.com/vagrant/trusty/current/trusty-server-cloudimg-amd64-vagrant-disk1.box"
  config.vm.network :forwarded_port, guest: 80, host: 8000
  config.vm.provision :shell, :path => "vagrant/bootstrap.sh"

  if File.directory?('../pelican-bootstrap3')
    config.vm.synced_folder "../pelican-bootstrap3", "/mnt/pelican-bootstrap3"
  end
end
