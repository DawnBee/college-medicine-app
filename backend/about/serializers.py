from rest_framework import serializers
from .models import Benefactors, Values

class BenefactorSerializer(serializers.ModelSerializer):
	class Meta:
		model = Benefactors
		fields = '__all__'

class ValueSerializer(serializers.ModelSerializer):
	class Meta:
		model = Values
		fields = '__all__'