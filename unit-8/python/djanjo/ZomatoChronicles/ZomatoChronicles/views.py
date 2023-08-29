from django.http import HttpResponse

def aboutUs(req):
    return HttpResponse("Welcome to AboutUs page")

def home(req):
    return HttpResponse("Welcome to Home page page")