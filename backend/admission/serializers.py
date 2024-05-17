from rest_framework import serializers
from .models import Process, Requirements


class ProcessSerializer(serializers.ModelSerializer):
	class Meta:
		model = Process
		fields = '__all__'

class RequirementSerializer(serializers.ModelSerializer):
	class Meta:
		model = Requirements
		fields = '__all__'