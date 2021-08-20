# Third Party Imports
from rest_framework import generics

# Local Imports
from apis.serializers import TweetsSerializer
from apis.models import Tweets

# Create your views here.

class TweetView(generics.ListCreateAPIView):
    queryset = Tweets.objects.all()
    serializer_class = TweetsSerializer