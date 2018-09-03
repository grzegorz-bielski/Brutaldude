from characters.models import Character, CharacterTypes
from characters.serializers import CharacterSerializer, CharacterTypesSerializer
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.decorators import api_view

class CharactersViewSet(viewsets.ModelViewSet):
    queryset = Character.objects.all()
    serializer_class = CharacterSerializer

class CharacterTypesViewSet(viewsets.ModelViewSet):
    queryset = CharacterTypes.objects.all()
    serializer_class = CharacterTypesSerializer
