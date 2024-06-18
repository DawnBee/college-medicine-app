from django.db import models
from PIL import Image
import uuid

class Trainings(models.Model):
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	name = models.CharField(max_length=150)
	place = models.CharField(max_length=50)
	image = models.ImageField(default="default.png", upload_to="trainings", null=True, blank=True)
	description = models.TextField()
	date_added = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return f"{self.name} - {self.place}"

	# Resizes Image Uploads
	def save(self,*args,**kwargs):
		super().save(*args,**kwargs)
		if self.image:
			img = Image.open(self.image.path)
			max_size = 600

			if img.height > max_size or img.width > max_size:
				img.thumbnail((max_size, max_size), Image.LANCZOS)
				img.save(self.image.path)		

	class Meta:
		verbose_name = "Training"
		verbose_name_plural = "Trainings"
		ordering = ['-date_added']