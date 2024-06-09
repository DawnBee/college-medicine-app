from rest_framework import viewsets
from .models import Benefactors, Curriculum
from .serializers import BenefactorSerializer, CurriculumSerializer

class BenefactorViewSet(viewsets.ModelViewSet):
	queryset = Benefactors.objects.all()
	serializer_class = BenefactorSerializer

class CurriculumViewSet(viewsets.ModelViewSet):
	queryset = 	Curriculum.objects.all()
	serializer_class = CurriculumSerializer