#Django imports
from django.db import models

#clases
from .empresa import Empresa
from .municipio import Municipio
from .departamento import Departamento

class Queja(models.Model):
    codigo = models.CharField(max_length=10)
    fecha_emision = models.DateField()
    idDepartamento = models.ForeignKey(Departamento, on_delete=models.CASCADE, related_name="queja_departamento")
    idMunicipio = models.ForeignKey(Municipio, on_delete=models.CASCADE, related_name="queja_municipio")
    idEmpresa = models.ForeignKey(Empresa, on_delete=models.CASCADE, related_name= "queja_empresa")
    queja = models.TextField()
    activo = models.BooleanField(default=True)
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    fecha_modificación = models.DateTimeField(auto_now=True)

    #modificacion del metodo borrar
    def delete(self, *args):
        self.activo = False
        self.save()
        return True