from rest_framework import serializers
from api.models import Municipio

class MunicipioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Municipio
        fields = (
            'id',
            'codigo',
            'nombre',
        )
        
class MunicipioRegistroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Municipio
        fields = (
            'codigo',
            'nombre',
        )