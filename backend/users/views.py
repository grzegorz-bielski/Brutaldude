from users.models import User
from users.serializers import UsersSerializer
from rest_framework import viewsets


class UsersViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UsersSerializer
