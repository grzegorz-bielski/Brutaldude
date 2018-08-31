from characters.models import Character, CharacterTypes
from characters.serializers import CharacterSerializer, CharacterTypesSerializer
from rest_framework import viewsets


class CharactersViewSet(viewsets.ModelViewSet):
    queryset = Character.objects.all()
    serializer_class = CharacterSerializer


class CharacterTypesViewSet(viewsets.ModelViewSet):
    queryset = CharacterTypes.objects.all()
    serializer_class = CharacterTypesSerializer
