from rest_framework import viewsets
from .models import Message, OrgChart, Faculty
from .serializers import MessageSerializer, OrgChartSerializer, FacultySerializer

class MessageViewSet(viewsets.ModelViewSet):
	queryset = Message.objects.all()
	serializer_class = MessageSerializer

class OrgChartViewSet(viewsets.ModelViewSet):
	queryset = OrgChart.objects.all()
	serializer_class = OrgChartSerializer

class FacultyViewSet(viewsets.ModelViewSet):
	queryset = Faculty.objects.all()
	serializer_class = FacultySerializer