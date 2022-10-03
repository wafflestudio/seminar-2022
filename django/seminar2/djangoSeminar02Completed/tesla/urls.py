from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from .views import ManufacturerListCreateView, ManufacturerPermissionListCreateView, \
    ManufacturerRetrieveUpdateDestroyView

urlpatterns = [
    path('v1/manufacturers/', ManufacturerListCreateView.as_view()),
    path('v2/manufacturers/', ManufacturerPermissionListCreateView.as_view()),
    path('v2/manufacturers/<int:pk>', ManufacturerRetrieveUpdateDestroyView.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
