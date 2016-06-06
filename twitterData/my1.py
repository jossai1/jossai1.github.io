import json
import pymongo
import tweepy

consumer_key = 'ZTaBahxF2OOxNvVbl0bqWjHRp'
consumer_secret = 'BMwlGBP7UwiPaYCZsVxgZuYJlxU1YNDOyCHsNHhoMlSTvTOtnE'
access_token = '320635547-RlIMphfJXI1gCOJwDh973Jztv75VE41ZWlF3kPV4'
access_secret = 'kaCKZYboCDlVUuWaWLuwS07rEpihL9Vxn70iLoNjQhk4b'

auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_secret)
api = tweepy.API(auth)


class CustomStreamListener(tweepy.StreamListener):
    def __init__(self, api):
        self.api = api
        super(tweepy.StreamListener, self).__init__()

        self.db = pymongo.MongoClient().test

    def on_data(self, tweet):
        self.db.tweets.insert(json.loads(tweet))

    def on_error(self, status_code):
        return True # Don't kill the stream

    def on_timeout(self):
        return True # Don't kill the stream


sapi = tweepy.streaming.Stream(auth, CustomStreamListener(api))
sapi.filter(track=['lagos traffic'])