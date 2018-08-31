from characters import views
from django.urls import path
from django.conf.urls import include
from rest_framework.routers import DefaultRouter

types_router = DefaultRouter()
types_router.register('', views.CharacterTypesViewSet,
                      base_name='characters_types')

characters_router = DefaultRouter()
characters_router.register('', views.CharactersViewSet, base_name='characters')

type_url = types_router.urls
characters_url = characters_router.urls
