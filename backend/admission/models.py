from django.core.exceptions import ValidationError
from django.db import models
import uuid


class Process(models.Model):
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	title = models.CharField(max_length=30)
	description = models.TextField()
	date_added = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return self.title

	def clean(self):
		super().clean()
		if len(self.description) > 250:
			raise ValidationError({'description': 'maximum length is 250 characters.'})

	def save(self, *args, **kwargs):
		self.full_clean()
		super().save(*args, **kwargs)

	class Meta:
		verbose_name = "Process"
		verbose_name_plural = "Processes"
		ordering = ['date_added']


class Requirements(models.Model):
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	name = models.CharField(max_length=80)
	date_added = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return self.name

	class Meta:
		verbose_name = "Requirement"
		verbose_name_plural = "Requirements"
		ordering = ['date_added']