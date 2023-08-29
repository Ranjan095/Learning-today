from django.http import HttpResponse
from django.shortcuts import render

# Home page Route


def homePage(request):
    data = {
        "title": "zomato",
        "body": "Welcome to zomato App",
        "ab": ["ranjan", "ajit", "Suraj"],
        "list": [
            {"name": "Ranjan", "mobileNo": 7079062877},
            {"name": "ajit", "mobileNo": 7079062877},
            {"name": "Pradeep", "mobileNo": 7079062877}
        ]
    }

    return render(request, "index.html", data)

# AboutUs Route


def aboutUs(request):
    return HttpResponse("welcome to AboutUs page")

# Product Details Route


def productDetails(request, productId):
    return HttpResponse(productId)
