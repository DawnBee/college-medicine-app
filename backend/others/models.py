from django_resized import ResizedImageField
from django.utils import timezone
from django.db import models
from PIL import Image
import uuid


class News(models.Model):
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	title = models.CharField(max_length=30)
	image = models.ImageField(default="default.png", upload_to="news", null=True, blank=True)
	description = models.TextField()
	date_added = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		formatted_date = self.date_added.strftime('%B %d, %Y')
		return f"{self.title} - {formatted_date}"

	class Meta:
		ordering = ['-date_added']
		verbose_name = "News"
		verbose_name_plural = "News"


class Activities(models.Model):
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	name = models.CharField(max_length=30)
	date_held = models.DateTimeField(default=timezone.now)

	def __str__(self):
		formatted_date = self.date_held.strftime('%B %d, %Y')
		return f"{self.name} on {formatted_date}"

	class Meta:
		ordering = ['-date_held']
		verbose_name = "Activity"
		verbose_name_plural = "Activities"


class Officers(models.Model):
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	image = ResizedImageField(size=[800,800], quality=85, default="default.png", upload_to="officers", null=True, blank=True)
	name = models.CharField(max_length=40, unique=True)
	position = models.CharField(max_length=50)	

	def __str__(self):
		return f"{self.name} - {self.position}"

	class Meta:
		ordering = ['name']
		verbose_name = "Officer"
		verbose_name_plural = "Officers"