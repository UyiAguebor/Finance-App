from django.db import models

# Create your models here.
class Pot(models.Model):
    potName: models.CharField(max_length=30)
    savingGoal: models.PositiveIntegerField()
    currentSaved: models.PositiveIntegerField()
    