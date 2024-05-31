from rest_framework import serializers
from .models import Trainings

class TrainingSerializer(serializers.ModelSerializer):
	class Meta:
		model = Trainings
		fields = '__all__'