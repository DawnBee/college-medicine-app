from rest_framework.routers import DefaultRouter
from home.views import (
    AnnouncementViewSet, 
    EventViewSet,
    PublicationViewSet,
    TestimonialViewSet
)

home_router = DefaultRouter()

viewset_mapping = {
    'announcements': AnnouncementViewSet,
    'events': EventViewSet,
    'publications': PublicationViewSet,
    'testimonials': TestimonialViewSet,
}

for model_name, viewset_class in viewset_mapping.items():
    home_router.register(model_name, viewset_class)