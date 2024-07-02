from django_resized import ResizedImageField
from django.db import models
from PIL import Image
import uuid

class Trainings(models.Model):
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	name = models.CharField(max_length=150)
	place = models.CharField(max_length=50)
	image = ResizedImageField(size=[300,300], quality=85, default="default.png", upload_to="trainings", null=True, blank=True)
	description = models.TextField()
	date_added = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return f"{self.name} - {self.place}"	

	class Meta:
		verbose_name = "Training"
		verbose_name_plural = "Trainings"
		ordering = ['-date_added']