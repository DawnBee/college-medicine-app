from rest_framework.routers import DefaultRouter
from .views import BenefactorViewSet, ValueViewSet, CurriculumViewSet

about_router = DefaultRouter()

viewset_mapping = {
    'benefactors': BenefactorViewSet,
    'values': ValueViewSet,
    'curriculum': CurriculumViewSet,
}

for model_name, viewset_class in viewset_mapping.items():
    about_router.register(model_name, viewset_class)