from rest_framework.routers import DefaultRouter
from .views import ProcessViewSet, RequirementViewSet

admission_router = DefaultRouter()

viewset_mapping = {
    'process': ProcessViewSet,
    'requirements': RequirementViewSet,
}

for model_name, viewset_class in viewset_mapping.items():
    admission_router.register(model_name, viewset_class)