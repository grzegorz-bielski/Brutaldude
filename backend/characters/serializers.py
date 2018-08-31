from rest_framework import serializers
from characters.models import Character, CharacterTypes


class CharacterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Character
        fields = ('id', 'health', 'power', 'defense', 'name', 'owner', 'type')
        read_only_fields = ('owner',)

    def create(self, validated_data):
        validated_data['owner'] = self.context['request'].user
        return super().create(validated_data)


class CharacterTypesSerializer(serializers.ModelSerializer):
    class Meta:
        model = CharacterTypes
        fields = ('name',)
