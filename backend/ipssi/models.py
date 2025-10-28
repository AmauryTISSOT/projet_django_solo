from django.db import models
from django.contrib.auth.models import User


class Category(models.TextChoices):
    MOTO = "Moto"
    VOITURE = "Voiture"
    CAMION = "Camion"


class Product(models.Model):
    name = models.CharField(max_length=100, default="", blank=False)
    description = models.TextField(default="", blank=False)
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    image = models.ImageField(upload_to="products/")
    category = models.CharField(max_length=30, choices=Category.choices)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
