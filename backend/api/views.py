from rest_framework import viewsets
from .models import Events
from .serializers import EventSerializer

class EventViewSet(viewsets.ModelViewSet):
	queryset = Events.objects.all()
	serializer_class = EventSerializer