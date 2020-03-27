from rest_framework import serializers
from .models import Quest

class QuestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quest
        fields = ('content', 'in_progress', 'completed', 'difficulty')