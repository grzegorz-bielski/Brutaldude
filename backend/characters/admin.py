from django.contrib import admin

from django.contrib import admin
from .models import Character


@admin.register(Character)
class AuthorAdmin(admin.ModelAdmin):
    pass
