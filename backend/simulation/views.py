from .models import Trainings
from rest_framework import viewsets
from .serializers import TrainingSerializer

class TrainingViewSet(viewsets.ModelViewSet):
	queryset = Trainings.objects.all()
	serializer_class = TrainingSerializer