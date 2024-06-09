from rest_framework import serializers
from .models import Benefactors, Values, Curriculum

class BenefactorSerializer(serializers.ModelSerializer):
	class Meta:
		model = Benefactors
		fields = '__all__'

class ValueSerializer(serializers.ModelSerializer):
	class Meta:
		model = Values
		fields = '__all__'

class CurriculumSerializer(serializers.ModelSerializer):
	class Meta:
		model = Curriculum
		fields = '__all__'