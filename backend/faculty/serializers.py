from rest_framework import serializers
from .models import Message, OrgChart, Faculty


class MessageSerializer(serializers.ModelSerializer):
	class Meta:
		model = Message
		fields = '__all__'

class OrgChartSerializer(serializers.ModelSerializer):
	class Meta:
		model = OrgChart
		fields = '__all__'

class FacultySerializer(serializers.ModelSerializer):
	class Meta:
		model = Faculty
		fields = '__all__'				