"""Brutaldude URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token, verify_jwt_token
from characters.urls import type_url, characters_url


token_urls = [
    path('obtain/', obtain_jwt_token),
    path('refresh/', refresh_jwt_token),
    path('verify/', verify_jwt_token),
]

api_urls = [
    path('', include('rest_framework.urls')),
    path('users/', include('users.urls')),
    path('token/', include(token_urls)),
    path('characters/', include(characters_url)),
    path('types/', include(type_url))
]

urlpatterns = [
    path('api/', include(api_urls)),
    path('admin/', admin.site.urls),
]
