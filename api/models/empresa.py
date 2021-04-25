#Django imports
from django.db import models

#
class Empresa(models.Model):
    codigo = models.CharField(max_length=10)
    nit = models.CharField(max_length=15)
    nombre = models.CharField(max_length=255)
    direccion = models.CharField(max_length=255)
    sucursal = models.CharField(max_length=10)
    telefono = models.CharField(max_length=10)
    email = models.EmailField(max_length=100)
    activo = models.BooleanField(default=True)
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    fecha_modificación = models.DateTimeField(auto_now=True)

    #modificacion del metodo borrar
    def delete(self, *args):
        self.activo = False
        self.save()
        return True