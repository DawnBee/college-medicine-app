from django.contrib import admin
from .models import Officers, Activities, News

admin.site.register(News)
admin.site.register(Officers)
admin.site.register(Activities)