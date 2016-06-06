import tweepy
from tweepy import OAuthHandler
 
consumer_key = 'ZTaBahxF2OOxNvVbl0bqWjHRp'
consumer_secret = 'BMwlGBP7UwiPaYCZsVxgZuYJlxU1YNDOyCHsNHhoMlSTvTOtnE'
access_token = '320635547-RlIMphfJXI1gCOJwDh973Jztv75VE41ZWlF3kPV4'
access_secret = 'kaCKZYboCDlVUuWaWLuwS07rEpihL9Vxn70iLoNjQhk4b'
 
auth = OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_secret)
 
api = tweepy.API(auth)
results = api.search(q="lagos traffic")

for result in results:
    print (result.text)