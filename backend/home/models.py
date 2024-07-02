from django.core.exceptions import ValidationError
from django_resized import ResizedImageField
from django.db import models
from PIL import Image
import uuid

class Announcements(models.Model):
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	title = models.CharField(max_length=100)
	image = models.ImageField(default="default.png", upload_to="announcements", null=True, blank=True)
	description = models.TextField()
	date_added = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return self.title

	class Meta:
		ordering = ['-date_added']
		verbose_name = "Announcement"
		verbose_name_plural = "Announcements"


class Events(models.Model):
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	title = models.CharField(max_length=100)
	image = ResizedImageField(size=[500,500], quality=85, default="default.png", upload_to="events", null=True, blank=True)
	description = models.TextField()
	date_added = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return self.title

	class Meta:
		verbose_name = "Event"
		verbose_name_plural = "Events"
		ordering = ['-date_added']
		

class Publications(models.Model):
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	title = models.CharField(max_length=150, unique=True)
	image = models.ImageField(default="default.png", upload_to="publications", null=True, blank=True)
	description = models.TextField()
	pdf = models.FileField(upload_to='publications/pdfs/', null=True, blank=True)
	date_added = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return self.title

	class Meta:
		ordering = ['date_added']
		verbose_name = "Publication"
		verbose_name_plural = "Publications"


class Testimonials(models.Model):
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	image = ResizedImageField(size=[300,300], quality=85, default="default.png", upload_to="testimonials", null=True, blank=True)
	name = models.CharField(max_length=60, unique=True)
	content = models.TextField()
	date_added = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return self.name

	def clean(self):
		super().clean()
		if len(self.content) > 400:
			raise ValidationError({'content': 'maximum length is 400 characters.'})

	def save(self, *args, **kwargs):
		self.full_clean()
		super().save(*args, **kwargs)

	class Meta:
		ordering = ['date_added']
		verbose_name = "Testimonial"
		verbose_name_plural = "Testimonials"