from django.urls import path
from apis.views import TweetView

urlpatterns = [
    path('tweets', TweetView.as_view(), name="tweet")
]