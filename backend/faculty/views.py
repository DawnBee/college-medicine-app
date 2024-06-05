from rest_framework import viewsets
from .models import Message, OrgChart, Faculty, Lecturers
from .serializers import (
	MessageSerializer, 
	OrgChartSerializer, 
	FacultySerializer, 
	LecturerSerializer
)

class MessageViewSet(viewsets.ModelViewSet):
	queryset = Message.objects.all()
	serializer_class = MessageSerializer

class OrgChartViewSet(viewsets.ModelViewSet):
	queryset = OrgChart.objects.all()
	serializer_class = OrgChartSerializer

class FacultyViewSet(viewsets.ModelViewSet):
	queryset = Faculty.objects.all()
	serializer_class = FacultySerializer

class LecturerViewSet(viewsets.ModelViewSet):
	queryset = Lecturers.objects.all()
	serializer_class = LecturerSerializer	