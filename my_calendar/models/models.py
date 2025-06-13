from django.db import models

# Create your models here.


class DayEvent(models.Model):
    name = models.CharField(max_length=500)
    date = models.DateField()


class YearlyEvent(models.Model):
    name = models.CharField(max_length=500)
    month = models.SmallIntegerField()
    day = models.SmallIntegerField()
