from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from .models import Quest
from .serializers import QuestSerializer

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
        data = JSONParser().parse(request)
        serializer = QuestSerializer(quest, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)
    elif request.method == 'DELETE':
        quest.delete()
        return HttpResponse(status=204)