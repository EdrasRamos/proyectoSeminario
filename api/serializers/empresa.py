from rest_framework import serializers
from api.models import Empresa

class EmpresaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empresa
        fields = (
            'id',
            'codigo',
            'nit',
            'nombre',
            'sucursal',
            'direccion',
            'telefono',
            'email'
        )
        
class EmpresaRegistroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empresa
        fields = (
            'codigo',
            'nit',
            'nombre',
            'sucursal',
            'direccion',
            'telefono',
            'email',
        )