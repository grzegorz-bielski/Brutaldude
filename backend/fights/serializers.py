from rest_framework import serializers
from characters.models import Character
import random


class FightCommandsSerializer(serializers.Serializer):
    type = serializers.CharField()


class FightSerializer(serializers.Serializer):
    character = serializers.PrimaryKeyRelatedField(
        queryset=Character.objects.all())
    commands = FightCommandsSerializer(many=True)
