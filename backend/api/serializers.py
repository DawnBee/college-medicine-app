from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Events

class EventSerializer(serializers.ModelSerializer):
	class Meta:
		model = Events
		fields = '__all__'