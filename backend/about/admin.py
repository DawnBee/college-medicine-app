from django.contrib import admin
from .models import Benefactors, Values, Curriculum


class SingletonModelAdmin(admin.ModelAdmin):
    def has_add_permission(self, request):
        if self.model.objects.exists():
            return False
        return super().has_add_permission(request)

@admin.register(Curriculum)
class CurriculumAdmin(SingletonModelAdmin):
    pass

admin.site.register(Benefactors)
admin.site.register(Values)