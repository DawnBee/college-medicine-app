from django.urls import path
from . import views

urlpatterns = [
	path('events/', views.EventViewSet.as_view({'get': 'list', 'post': 'create'}), name='events'),
	path('events/<uuid:pk>', views.EventDetailView.as_view(), name='event-detail'),
]