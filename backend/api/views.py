from django.shortcuts import render
from django.views.generic import DetailView
from django.contrib.auth.models import User
from rest_framework import generics, viewsets
from .serializers import UserSerializer, EventSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Events


class CreateUserView(generics.CreateAPIView):
	queryset = User.objects.all()
	serializer_class = UserSerializer


class EventViewSet(viewsets.ModelViewSet):
	queryset = Events.objects.all()
	serializer_class = EventSerializer


class EventDetailView(DetailView):
	model = Events
	context_object_name = 'event'