from django.shortcuts import render
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Product
from .serializers import ProductSerializer
from .filters import ProductsFilter


@api_view(["GET"])
def get_products(request):
    filterset = ProductsFilter(request.GET, queryset=Product.objects.all().order_by(id))
    serializer = ProductSerializer(filterset.qs, many=True)
    return Response({"products": serializer.data})


@api_view(["GET"])
def get_products(request, pk):
    product = get_object_or_404(Product, id=pk)
    seriliazer = ProductSerializer(product, many=False)
    return Response({"product": seriliazer.data})
