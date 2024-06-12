from .serializers import NewsSerializer, ActivitySerializer, OfficerSerializer
from .models import News, Activities, Officers
from rest_framework import viewsets, filters
from .utils import _list


class NewsViewSet(viewsets.ModelViewSet):
	queryset = News.objects.all()
	serializer_class = NewsSerializer

	def list(self, request, *args, **kwargs):
		return _list(self, request, *args, **kwargs)

class ActivityViewSet(viewsets.ModelViewSet):
	queryset = Activities.objects.all()
	serializer_class = ActivitySerializer

	def list(self, request, *args, **kwargs):
		return _list(self, request, *args, **kwargs)		

class OfficerViewSet(viewsets.ModelViewSet):
	queryset = Officers.objects.all()
	serializer_class = OfficerSerializer
	filter_backends = [filters.SearchFilter]
	search_fields = ['name', 'position']

	def list(self, request, *args, **kwargs):
		return _list(self, request, *args, **kwargs)