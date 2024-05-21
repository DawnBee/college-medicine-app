from rest_framework import viewsets
from .models import Announcements, Events, Publications, Testimonials
from .serializers import (
	AnnouncementSerializer,
	EventSerializer,
	PublicationSerializer,
	TestimonialSerializer
)

class AnnouncementViewSet(viewsets.ModelViewSet):
	queryset = Announcements.objects.all()
	serializer_class = AnnouncementSerializer

class EventViewSet(viewsets.ModelViewSet):
	queryset = Events.objects.all()
	serializer_class = EventSerializer

class PublicationViewSet(viewsets.ModelViewSet):
	queryset = Publications.objects.all()
	serializer_class = PublicationSerializer

class TestimonialViewSet(viewsets.ModelViewSet):
	queryset = Testimonials.objects.all()
	serializer_class = TestimonialSerializer