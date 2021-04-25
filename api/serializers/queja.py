from rest_framework import serializers
from api.models import Queja

class QuejaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Queja
        fields = (
            'id',
            'codigo',
            'fecha_emision',
            'idDepartamento',
            'idMunicipio',
            'idEmpresa',
            'queja',
        )
        depth = 1
        
class QuejaRegistroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Queja
        fields = (
            'codigo',
            'fecha_emision',
            'idDepartamento',
            'idMunicipio',
            'idEmpresa',
            'queja',
        )