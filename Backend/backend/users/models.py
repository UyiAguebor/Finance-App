from django.db import models

# Create your models here.
class User(models.Model):
    firstName = models.CharField(max_length=30)
    lastName = models.CharField(max_length=30)
    emailAddress = models.EmailField()
    password = models.CharField(max_length=30)