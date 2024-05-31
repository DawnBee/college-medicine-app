# Main project urls

from django.conf import settings
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from home.urls import home_router
from admission.urls import admission_router
from simulation.urls import simulation_router
from faculty.urls import faculty_router
from about.urls import about_router


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/home/', include(home_router.urls)),
    path('api/admission/', include(admission_router.urls)),
    path('api/simulation/', include(simulation_router.urls)),
    path('api/faculty/', include(faculty_router.urls)),
    path('api/about/', include(about_router.urls)),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) 