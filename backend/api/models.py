import uuid
from django.db import models
from django.contrib.auth.models import User


class Events(models.Model):
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	title = models.CharField(max_length=30)
	image = models.ImageField(default="default.png", upload_to="events", null=True, blank=True)
	description = models.TextField()
	date_added = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return self.title

	class Meta:
		verbose_name = "Event"
		verbose_name_plural = "Events"
		ordering = ['-date_added']