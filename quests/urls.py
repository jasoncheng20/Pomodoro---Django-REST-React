from django.urls import path
from . import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('api/quest/', views.quest_list),
    path('api/quest/<int:id>/', views.quest_detail)
]

urlpatterns = format_suffix_patterns(urlpatterns)