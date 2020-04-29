from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from .models import Quest
from .serializers import QuestSerializer

# from rest_framework import status
# from rest_framework.decorators import api_view
# from rest_framework.response import Response

# Create your views here.

# @api_view(['GET', 'POST'])
# def quest_list(request, format=None):
#     if request.method == 'GET':
#         quests = Quest.objects.all()
#         serializer = QuestSerializer(quests, many=True)
#         return Response(serializer.data)

#     elif request.method == 'POST':
#         serializer = QuestSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @api_view(['GET', 'PUT', 'DELETE'])
# def quest_detail(request, id, format=None):
#     try:
#         quest = Quest.objects.get(id=id)
#     except Quest.DoesNotExist:
#         return Response(status=status.HTTP_404_NOT_FOUND)

#     if request.method == 'GET':
#         serializer = QuestSerializer(quest)
#         return Response(serializer.data)
#     elif request.method == 'PUT':
#         serializer = QuestSerializer(quest, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#     elif request.method == 'DELETE':
#         quest.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)

@csrf_exempt
def quest_list(request):
    if request.method == 'GET':
        quests = Quest.objects.all()
        serializer = QuestSerializer(quests, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = QuestSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

@csrf_exempt
def quest_detail(request, id):
    try:
        quest = Quest.objects.get(id=id)
    except Quest.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = QuestSerializer(quest)
        return JsonResponse(serializer.data)
    elif request.method == 'PUT':
        serializer = QuestSerializer(quest, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)
    elif request.method == 'DELETE':
        quest.delete()
        return HttpResponse(status=204)