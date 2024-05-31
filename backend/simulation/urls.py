from rest_framework.routers import DefaultRouter
from .views import TrainingViewSet

simulation_router = DefaultRouter()

viewset_mapping = {
    'trainings': TrainingViewSet,
}

for model_name, viewset_class in viewset_mapping.items():
    simulation_router.register(model_name, viewset_class)