from rest_framework import viewsets
from .models import Benefactors, Values
from .serializers import BenefactorSerializer, ValueSerializer

class BenefactorViewSet(viewsets.ModelViewSet):
	queryset = Benefactors.objects.all()
	serializer_class = BenefactorSerializer

class ValueViewSet(viewsets.ModelViewSet):
	queryset = Values.objects.all()
	serializer_class = ValueSerializer