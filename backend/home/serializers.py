from rest_framework import serializers
from .models import Announcements, Events, Publications, Testimonials


class AnnouncementSerializer(serializers.ModelSerializer):
	class Meta:
		model = Announcements
		fields = '__all__'

class EventSerializer(serializers.ModelSerializer):
	class Meta:
		model = Events
		fields = '__all__'

class PublicationSerializer(serializers.ModelSerializer):
	class Meta:
		model = Publications
		fields = '__all__'

class TestimonialSerializer(serializers.ModelSerializer):
	class Meta:
		model = Testimonials
		fields = '__all__'