from rest_framework import serializers
from .models import Benefactors, Curriculum

class BenefactorSerializer(serializers.ModelSerializer):
	class Meta:
		model = Benefactors
		fields = '__all__'

class CurriculumSerializer(serializers.ModelSerializer):
	class Meta:
		model = Curriculum
		fields = '__all__'