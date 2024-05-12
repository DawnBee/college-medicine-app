from rest_framework import serializers
from .models import Announcements, Events, Publications, Testimonials


class AnnouncementSerializer(serializers.ModelSerializer):
	class Meta:
		model = Announcements
		fields = ['id','title','image','description']

class EventSerializer(serializers.ModelSerializer):
	class Meta:
		model = Events
		fields = ['id','title','image','description']

class PublicationSerializer(serializers.ModelSerializer):
	class Meta:
		model = Publications
		fields = '__all__'

class TestimonialSerializer(serializers.ModelSerializer):
	class Meta:
		model = Testimonials
		fields = '__all__'