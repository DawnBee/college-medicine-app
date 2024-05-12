from django.contrib import admin
from .models import Announcements, Events, Publications, Testimonials

admin.site.register(Announcements)
admin.site.register(Events)
admin.site.register(Publications)
admin.site.register(Testimonials)