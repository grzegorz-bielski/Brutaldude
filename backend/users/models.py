from django.contrib.auth.models import AbstractBaseUser
from django.db import models
from django.utils.translation import ugettext_lazy as _
# Create your models here.


class User(AbstractBaseUser):
    username = models.CharField(_('username'), max_length=128)
