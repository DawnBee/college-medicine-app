from django.core.exceptions import ValidationError
from django.db import models
from PIL import Image
import uuid

class Announcements(models.Model):
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	title = models.CharField(max_length=50)
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
	title = models.CharField(max_length=50)
	image = models.ImageField(default="default.png", upload_to="events", null=True, blank=True)
	description = models.TextField()
	date_added = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return self.title

	# Resizes Image Uploads
	def save(self,*args,**kwargs):
		super().save(*args,**kwargs)
		if self.image:
			img = Image.open(self.image.path)
			max_size = 800

			if img.height > max_size or img.width > max_size:
				img.thumbnail((max_size, max_size), Image.LANCZOS)
				img.save(self.image.path)

	class Meta:
		verbose_name = "Event"
		verbose_name_plural = "Events"
		ordering = ['-date_added']
		

class Publications(models.Model):
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	title = models.CharField(max_length=50, unique=True)
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
	image = models.ImageField(default="default.png", upload_to="testimonials", null=True, blank=True)
	name = models.CharField(max_length=40, unique=True)
	content = models.TextField()
	date_added = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return self.name

	def clean(self):
		super().clean()
		if len(self.content) > 250:
			raise ValidationError({'content': 'maximum length is 250 characters.'})

	def save(self, *args, **kwargs):
		self.full_clean()
		super().save(*args, **kwargs)

		# Resizes Image Uploads
		if self.image:
			img = Image.open(self.image.path)
			max_size = 350

			if img.height > max_size or img.width > max_size:
				img.thumbnail((max_size, max_size), Image.LANCZOS)
				img.save(self.image.path)

		super().save(*args, **kwargs)

	class Meta:
		ordering = ['date_added']
		verbose_name = "Testimonial"
		verbose_name_plural = "Testimonials"