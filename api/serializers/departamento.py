from rest_framework import serializers
from api.models import Departamento

class DepartamentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Departamento
        fields = (
            'id',
            'codigo',
            'nombre',
            'region'
        )
        
class DepartamentoRegistroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Departamento
        fields = (
            'codigo',
            'nombre',
            'region',
        )