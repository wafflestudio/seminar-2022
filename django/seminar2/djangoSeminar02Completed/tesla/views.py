from rest_framework import generics
from rest_framework.permissions import IsAdminUser

from tesla.models import Manufacturer
from tesla.serializers import ManufacturerSerializer, ManufacturerDetailSerializer, ManufacturerListSerializer
from .permissions import IsManufacturerCreator


class ManufacturerListCreateView(generics.ListCreateAPIView):
    queryset = Manufacturer.objects.all()
    serializer_class = ManufacturerSerializer

    def get(self, request, *args, **kwargs):
        print(request.user)
        return super().get(request, *args, **kwargs)


class ManufacturerPermissionListCreateView(generics.ListCreateAPIView):
    permission_classes = [IsAdminUser]
    queryset = Manufacturer.objects.all()
    serializer_class = ManufacturerSerializer

    def get(self, request, *args, **kwargs):
        print(request.user)
        return super().get(request, *args, **kwargs)


class ManufacturerRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsManufacturerCreator]
    queryset = Manufacturer.objects.all()

    def get_serializer_class(self):
        if self.request.method == 'GET':
            return ManufacturerDetailSerializer
        return ManufacturerListSerializer