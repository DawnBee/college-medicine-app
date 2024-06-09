from rest_framework.routers import DefaultRouter
from .views import BenefactorViewSet, CurriculumViewSet

about_router = DefaultRouter()

viewset_mapping = {
    'benefactors': BenefactorViewSet,
    'curriculum': CurriculumViewSet,
}

for model_name, viewset_class in viewset_mapping.items():
    about_router.register(model_name, viewset_class)