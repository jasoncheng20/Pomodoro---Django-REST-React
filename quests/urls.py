from django.urls import path
from . import views

urlpatterns =[
    path('api/quest/', views.QuestListCreate.as_view())
]