#Django imports
from django.db import models

#
class Departamento(models.Model):
    codigo = models.CharField(max_length=10)
    nombre = models.CharField(max_length=25)
    region = models.CharField(max_length=40)
    activo = models.BooleanField(default=True)
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    fecha_modificación = models.DateTimeField(auto_now=True)

    #modificacion del metodo borrar
    def delete(self, *args):
        self.activo = False
        self.save()
        return True