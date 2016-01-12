# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "bento/ubuntu-14.04"
  config.vm.network :forwarded_port, guest: 80, host: 8000
  config.vm.provision :shell, :path => "vagrant/bootstrap.sh"
  config.vm.provision :shell, :inline => "service apache2 restart", run: "always"

  if File.directory?('../pelican-bootstrap3')
    config.vm.synced_folder "../pelican-bootstrap3", "/mnt/pelican-bootstrap3"
  end
end
