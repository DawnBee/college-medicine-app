from django.contrib import admin
from .models import Message, OrgChart, Faculty, Lecturers
from django.core.exceptions import ValidationError


class SingletonModelAdmin(admin.ModelAdmin):
    def has_add_permission(self, request):
        # Check if any instance of the model exists
        if self.model.objects.exists():
            return False  # Prevent adding new instances
        return super().has_add_permission(request)

@admin.register(Message)
class MessageAdmin(SingletonModelAdmin):
    pass

@admin.register(OrgChart)
class OrgChartAdmin(SingletonModelAdmin):
    pass

admin.site.register(Faculty)
admin.site.register(Lecturers)