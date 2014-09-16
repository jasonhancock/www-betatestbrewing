#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals
import os

AUTHOR = u'Jason Hancock'
SITENAME = u'Beta Test Brewing Company'

SITEURL = ''

THEME = '/mnt/pelican-bootstrap3'
BOOTSTRAP_THEME = 'slate'

TIMEZONE = 'America/Los_Angeles'
DEFAULT_DATE_FORMAT = '%Y-%m-%d %H:%M:%S'

DEFAULT_LANG = u'en'

DISPLAY_CATEGORIES_ON_MENU = False

# Feed generation is usually not desired when developing
FEED_MAX_ITEMS = 5
FEED_DOMAIN = SITEURL
FEED_ALL_ATOM = None
FEED_ALL_RSS = 'feeds/all.rss.xml'
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None

STATIC_PATHS = ['assets']


# Blogroll
LINKS =  (
    ('/r/Homebrewing', 'http://www.reddit.com/r/Homebrewing/'),
    ('Jason Hancock', 'http://jasonhancock.com'),
)

# Social widget
SOCIAL = (
    ('twitter', 'https://twitter.com/jsnby'),
    ('untappd', 'https://untappd.com/BetaTestBrewing/'),
    ('rss',     '/feeds/all.rss.xml'),
)

DEFAULT_PAGINATION = False

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True

TWITTER_USERNAME = 'jsnby'
