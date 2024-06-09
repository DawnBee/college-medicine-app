from rest_framework import viewsets
from .models import Benefactors, Values, Curriculum
from .serializers import BenefactorSerializer, ValueSerializer, CurriculumSerializer

class BenefactorViewSet(viewsets.ModelViewSet):
	queryset = Benefactors.objects.all()
	serializer_class = BenefactorSerializer

class ValueViewSet(viewsets.ModelViewSet):
	queryset = Values.objects.all()
	serializer_class = ValueSerializer

class CurriculumViewSet(viewsets.ModelViewSet):
	queryset = 	Curriculum.objects.all()
	serializer_class = CurriculumSerializer