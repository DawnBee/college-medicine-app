from rest_framework import viewsets
from .models import Process, Requirements
from .serializers import ProcessSerializer, RequirementSerializer

class ProcessViewSet(viewsets.ModelViewSet):
	queryset = Process.objects.all()
	serializer_class = ProcessSerializer

class RequirementViewSet(viewsets.ModelViewSet):
	queryset = Requirements.objects.all()
	serializer_class = RequirementSerializer
