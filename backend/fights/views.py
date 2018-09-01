from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.decorators import api_view
from fights.serializers import FightSerializer
from fights.fight_service import fight_service
from Brutaldude.logger import logger


@api_view(['GET', 'POST'])
def fight(request):
    serializer = FightSerializer(
        data=request.data, context={'request': request})

    serializer.is_valid()
    serializer.is_valid(raise_exception=True)

    result = fight_service(**serializer.validated_data)

    return Response(data=result)
