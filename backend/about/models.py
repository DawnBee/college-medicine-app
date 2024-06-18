from django.db import models
from PIL import Image
import uuid


class SingletonModel(models.Model):
	class Meta:
		abstract = True

	def save(self, *args, **kwargs):
		if not self.pk and self.__class__.objects.exists():
			raise ValidationError(f"Only one instance of {self.__class__.__name__} is allowed.")
		return super().save(*args, **kwargs)


class Benefactors(models.Model):
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	image = models.ImageField(default="default.png", upload_to="benefactors", null=True, blank=True)
	name = models.CharField(max_length=60, unique=True)
	position = models.CharField(max_length=100)

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


class Curriculum(SingletonModel):
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	pdf = models.FileField(upload_to='curriculum', null=True, blank=True)
	date_added = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		formatted_date = self.date_added.strftime('%B %d, %Y')
		return f"Curriculum - Added On: {formatted_date}"

	class Meta:
		verbose_name = "Curriculum"
		verbose_name_plural = "Curriculum"