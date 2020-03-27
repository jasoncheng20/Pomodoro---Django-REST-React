from django.shortcuts import render
from .models import Quest
from .serializers import QuestSerializer
from rest_framework import generics

# Create your views here.

class QuestListCreate(generics.ListCreateAPIView):
    queryset = Quest.objects.all()
    serializer_class = QuestSerializer