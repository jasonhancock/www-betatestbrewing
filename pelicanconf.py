#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals
import os

AUTHOR = u'Jason Hancock'
SITENAME = u'Beta Test Brewing Company'

FAVICON = 'favicon.ico?v=1'

SHOW_ARTICLE_AUTHOR = True

SITEURL = ''

THEME = 'themes/betatestbrewing'
BOOTSTRAP_THEME = 'slate'

TIMEZONE = 'America/Los_Angeles'
DEFAULT_DATE_FORMAT = '%Y-%m-%d %H:%M:%S'

DEFAULT_LANG = u'en'

DISPLAY_CATEGORIES_ON_MENU = False

OPEN_GRAPH_FB_APP_ID = 1744077079150259
DEFAULT_FB_PROFILE = 'https://www.facebook.com/jsnby'

# Feed generation is usually not desired when developing
FEED_MAX_ITEMS = 5
FEED_DOMAIN = SITEURL
FEED_ALL_ATOM = None
FEED_ALL_RSS = 'feeds/all.rss.xml'
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None

STATIC_PATHS = [
    'assets',
    'extra/robots.txt',
    'extra/favicon.ico'
]

EXTRA_PATH_METADATA = {
    'extra/robots.txt': {'path': 'robots.txt'},
    'extra/favicon.ico': {'path': 'favicon.ico'},
}

PLUGIN_PATH = 'plugins'
PLUGINS = ['thumbnailer']

IMAGE_PATH = 'assets/images'
THUMBNAIL_DIR = 'assets/images'
THUMBNAIL_SIZES = {
    'thumb': '250x?',
    'fb1'  : '200x?',
    'fb2'  : '?x200'
}

TOOLS =  (
    ('ABV Calculator', '/pages/abv.html'),
    ('Random BJCP Style', '/pages/random.html'),
    ('Continuous Hop Calculator', '/pages/continuous-hop.html'),
)


# Blogroll
LINKS =  (
    ('/r/Homebrewing', 'http://www.reddit.com/r/Homebrewing/'),
    ('Jason Hancock', 'http://jasonhancock.com'),
    ('Horse Thief Brewers Assoc.', 'http://horsethiefbrewers.com'),
    ('Amazon.com', 'http://amzn.to/1o9Gn2q'),
)

# Social widget
SOCIAL = (
    ('twitter', 'https://twitter.com/jsnby'),
    ('rss',     '/feeds/all.rss.xml'),
    ('untappd', 'https://untappd.com/BetaTestBrewing/'),
)




# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True

TWITTER_USERNAME = 'jsnby'
