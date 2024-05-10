from django.urls import path
from . import views

urlpatterns = [
	path('events/', views.EventView.as_view(), name='events'),
]