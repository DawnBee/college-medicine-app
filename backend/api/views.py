from django.shortcuts import render
from django.views.generic import DetailView
from django.contrib.auth.models import User

# Files inside app
from .serializers import EventSerializer
from .models import Events

# Imports from REST
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny


# class CreateUserView(generics.CreateAPIView):
# 	queryset = User.objects.all()
# 	serializer_class = UserSerializer


class EventView(APIView):
	serializer_class = EventSerializer

	def get(self, request):
		output = [
			{
				'title': output.title,
				'description': output.description,
			} 
			for output in Events.objects.all()
		]
		return Response(output)


	def post(self, request):
		serializer = EventSerializer(data=request.data)
		if serializer.is_valid(raise_exception=True):
			serializer.save()
			return Response(serializer.data)		