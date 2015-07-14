Summary:        betatestbrewing.com Static website
Name:           www-betatestbrewing
Version:        %{version}
Release:        1%{?dist}
License:        All Rights Reserved
Group:          Development/Languages
URL:            http://www.betatestbrewing.com
Source:         %{name}-%{version}.tar.gz
BuildArch:      noarch
BuildRoot:      %{_tmppath}/%{name}-%{version}-%{release}-root-%(%{__id_u} -n)

%description
betatestbrewing.com Static Website

%prep
%setup -q -n %{name}-%{version}

%build

%install
rm -rf $RPM_BUILD_ROOT
mkdir -p $RPM_BUILD_ROOT/var/www/com.betatestbrewing
rsync -av --exclude=".svn" $RPM_BUILD_DIR/%{name}-%{version}/  $RPM_BUILD_ROOT/var/www/com.betatestbrewing

%clean
rm -rf $RPM_BUILD_ROOT

%files
%defattr(-,root,root,-)
%dir /var/www/com.betatestbrewing
/var/www/com.betatestbrewing/*
