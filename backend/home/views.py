from .utils import _list
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

	def list(self, request, *args, **kwargs):
		return _list(self, request, *args, **kwargs)

class EventViewSet(viewsets.ModelViewSet):
	queryset = Events.objects.all()
	serializer_class = EventSerializer

	def list(self, request, *args, **kwargs):
		return _list(self, request, *args, **kwargs)

class PublicationViewSet(viewsets.ModelViewSet):
	queryset = Publications.objects.all()
	serializer_class = PublicationSerializer

	def list(self, request, *args, **kwargs):
		return _list(self, request, *args, **kwargs)

class TestimonialViewSet(viewsets.ModelViewSet):
	queryset = Testimonials.objects.all()
	serializer_class = TestimonialSerializer

	def list(self, request, *args, **kwargs):
		return _list(self, request, *args, **kwargs)