from rest_framework.routers import DefaultRouter
from .views import NewsViewSet, ActivityViewSet, OfficerViewSet

other_router = DefaultRouter()

viewset_mapping = {
    'news': NewsViewSet,
    'activities': ActivityViewSet,
    'officers': OfficerViewSet,
}

for model_name, viewset_class in viewset_mapping.items():
    other_router.register(model_name, viewset_class)