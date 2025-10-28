from django_filters import rest_framework as filter
from .models import Product


class ProductsFilter(filter.filterset):
    class Meta:
        model = Product
        fields = "category"
