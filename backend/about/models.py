from django.db import models
import uuid


class Benefactors(models.Model):
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	image = models.ImageField(default="default.png", upload_to="benefactors", null=True, blank=True)
	name = models.CharField(max_length=40, unique=True)
	position = models.CharField(max_length=50)
	content = models.TextField()
	date_added = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return self.name.capitalize()

	class Meta:
		verbose_name = "Benefactor"
		verbose_name_plural = "Benefactors"
		ordering = ['date_added']


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