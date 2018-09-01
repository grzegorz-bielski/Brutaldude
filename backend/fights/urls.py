from fights import views
from rest_framework.routers import DefaultRouter

from django.urls import path

urlpatterns = [
    path('', views.fight)
]
