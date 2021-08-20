from django.db import models

# Create your models here.

class Tweets(models.Model):
    tweetdate = models.DateTimeField(auto_now_add=True)
    tweet = models.CharField(max_length=50)
    user = models.CharField(max_length=50, null=True, blank=True, default="Anonymous")

    def __str__(self):
        return '{} - {}'.format(self.user, self.tweet)