from rest_framework import serializers
from .models import Officers, News, Activities


class NewsSerializer(serializers.ModelSerializer):
	class Meta:
		model = News
		fields = '__all__'

class ActivitySerializer(serializers.ModelSerializer):
	class Meta:
		model = Activities
		fields = '__all__'

class OfficerSerializer(serializers.ModelSerializer):
	class Meta:
		model = Officers
		fields = '__all__'