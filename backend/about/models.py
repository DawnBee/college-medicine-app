from django.db import models
from PIL import Image
import uuid


class Benefactors(models.Model):
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	image = models.ImageField(default="default.png", upload_to="benefactors", null=True, blank=True)
	name = models.CharField(max_length=40, unique=True)
	position = models.CharField(max_length=50)

	def __str__(self):
		return self.name.capitalize()

	# Resizes Image Uploads
	def save(self,*args,**kwargs):
		super().save(*args,**kwargs)
		if self.image:
			img = Image.open(self.image.path)
			max_size = 400

			if img.height > max_size or img.width > max_size:
				img.thumbnail((max_size, max_size), Image.LANCZOS)
				img.save(self.image.path)

	class Meta:
		ordering = ['name']
		verbose_name = "Benefactor"
		verbose_name_plural = "Benefactors"
		

class Values(models.Model):
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	title = models.CharField(max_length=30)
	content = models.TextField()
	date_added = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return self.title

	class Meta:
		verbose_name = "Core Value"
		verbose_name_plural = "Core Values"
		ordering = ['date_added']