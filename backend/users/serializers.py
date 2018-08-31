from rest_framework import serializers
from users.models import User
from django.contrib.auth.hashers import make_password


class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password')

    def to_internal_value(self, data):
        validated_data = super().to_internal_value(data)

        validated_data['password'] = make_password(validated_data['password'])

        return validated_data
