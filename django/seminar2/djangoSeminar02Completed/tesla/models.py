from django.contrib.auth.models import User
from django.db import models


class Manufacturer(models.Model):
    title = models.CharField(max_length=100)
    created_by = models.ForeignKey(User, on_delete=models.PROTECT)


class Car(models.Model):
    manufacturer = models.ForeignKey(Manufacturer, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    tags = models.ManyToManyField('Tag', through="TagToCar")


class CarInfo(models.Model):
    car = models.OneToOneField(Car, on_delete=models.PROTECT)
    mass = models.IntegerField()


class Tag(models.Model):
    content = models.CharField(max_length=100)


class TagToCar(models.Model):
    tag = models.ForeignKey(Tag, on_delete=models.CASCADE)
    car = models.ForeignKey(Car, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


