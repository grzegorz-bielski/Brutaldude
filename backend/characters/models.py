from django.db import models
from users.models import User


class CharacterTypes(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.name}"


class Character(models.Model):
    health = models.PositiveIntegerField(default=100)

    power = models.PositiveIntegerField()

    defense = models.PositiveIntegerField()

    name = models.CharField(max_length=100)

    owner = models.ForeignKey(
        User, on_delete=models.CASCADE, null=True, blank=True)

    type = models.ForeignKey(
        CharacterTypes, on_delete=models.CASCADE, default=None, null=True)

    def __str__(self):
        return f"{self.owner} : {self.name}"
