from rest_framework import serializers
from .models import Participant, Team, EmailIds
from django.contrib.auth.hashers import make_password, check_password

class ParticipantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Participant
        fields = '__all__'




class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = '__all__'


class EmailIdsSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmailIds
        fields = '__all__'
