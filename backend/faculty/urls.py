from rest_framework.routers import DefaultRouter
from .views import MessageViewSet, OrgChartViewSet, FacultyViewSet, LecturerViewSet

faculty_router = DefaultRouter()

viewset_mapping = {
    'message': MessageViewSet,
    'orgchart': OrgChartViewSet,
    'faculties': FacultyViewSet,
    'lecturers': LecturerViewSet,
}

for model_name, viewset_class in viewset_mapping.items():
    faculty_router.register(model_name, viewset_class)