from rest_framework import permissions

from tesla.models import Manufacturer


class IsManufacturerCreator(permissions.BasePermission):
    def has_object_permission(self, request, view, obj: Manufacturer):
        if request.method in permissions.SAFE_METHODS:
            return True

        return obj.created_by == request.user
