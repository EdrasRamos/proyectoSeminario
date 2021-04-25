import json

from django.core.files import File
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import status, filters, viewsets
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.settings import api_settings
from django.db import transaction

from api.models import Queja, Departamento, Municipio, Empresa
from api.serializers import QuejaSerializer, QuejaRegistroSerializer

class QuejaViewset(viewsets.ModelViewSet):
    queryset = Queja.objects.filter(activo=True)

    filter_backends = (DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter)
    filter_fields = ("codigo", "fecha_emision", "idDepartamento", "idMunicipio", "idEmpresa",)
    search_fields = ("codigo", "fecha_emision", "idDepartamento", "idMunicipio", "idEmpresa",)
    ordering_fields = ("codigo", "fecha_emision", "idDepartamento", "idMunicipio", "idEmpresa",)

    def get_serializer_class(self):
        """Define serializer for API"""
        if self.action == 'list' or self.action == 'retrieve':
            return QuejaSerializer
        else:
            return QuejaRegistroSerializer
    
    def get_permissions(self):
        """ Define permisos para este recurso"""
        permission_classes = [IsAuthenticated]
        return [permission() for permission in permission_classes]
    
    def create(self, request):
        try:
            data = request.data
            with transaction.atomic():
                serializer = QuejaRegistroSerializer(data=data)
                if serializer.is_valid():
                    #departamento
                    id_departamento = data.get("departamento")
                    departamento = Departamento.objects.get(pk=id_departamento)
                
                    #municipio
                    id_municipio = data.get("municipio")
                    municipio = Municipio.objects.get(pk=id_municipio)
                    #empresa
                    id_empresa = data.get("empresa")
                    empresa = Empresa.objects.get(pk=id_empresa)

                    Queja.objects.create(
                        codigo=data.get("codigo"),
                        fecha_emision=data.get("fecha_emision"),
                        idDepartamento=departamento,
                        idMunicipio=municipio,
                        idEmpresa=empresa,
                        queja=data.get("queja")
                    )
                    return Response(data, status=status.HTTP_20_OK)
                else:
                    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)
    
    def update(self, request, pk):
        try:
            print("pk: ", pk)
            data = request.data
            with transaction.atomic():
                serializer = QuejaRegistroSerializer(data=data)
                if serializer.is_valid():
                    queja = Queja.objects.get(pk=pk)
                    id_departamento = data.get("departamento")
                    departamento = Departamento.objects.get(pk1=id_departamento)
                    id_municipio = data.get("municipio")
                    #municipio = Municipio.objects.get(pk2=id_municipio)
                    id_empresa = data.get("empresa")
                    empresa = Empresa.objects.get(pk3=empresa)

                    queja.codigo = data.get("codigo")
                    queja.fecha_emision = data.get("fecha_emision")
                    queja.departamento = departamento
                    queja.municipio = municipio
                    queja.empresa = empresa
                    queja.queja = data.get("queja")
                    grado.save()

                    return Response(data, status=status.HTTP_200_OK)
                else:
                    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)