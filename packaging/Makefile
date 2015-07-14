pkg = www-betatestbrewing
version_base = 1.0

ifndef BUILD_NUMBER
version = 0.99.0
else
version = $(version_base).$(BUILD_NUMBER)
endif

all: clean
	@(mkdir rpmbuild && cd rpmbuild && mkdir SRPMS BUILD RPMS SOURCES SPECS tmp)
	@(rsync -av ../output/ rpmbuild/SOURCES/$(pkg)-$(version))
	@(cd rpmbuild/SOURCES && tar -cvzf $(pkg)-$(version).tar.gz $(pkg)-$(version)/)
	cp redhat/$(pkg).spec rpmbuild/SPECS/
	rpmbuild -bb --define "_topdir rpmbuild" --define "version $(version)" rpmbuild/SPECS/$(pkg).spec
	cp rpmbuild/RPMS/noarch/$(pkg)-$(version)-1.noarch.rpm .
clean:
	@rm -rf rpmbuild
	@rm -f ../*.rpm
