# your_app_name/middleware.py
from django.shortcuts import HttpResponse
from django.urls import reverse


class AuthMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        # Check if the request path is excluded from the cookie check
        excluded_paths = ['/users/login', '/users/register']
        if request.path_info in excluded_paths:
            return self.get_response(request)

        # Check if the cookie 'your_cookie_name' exists
        if 'USER_SESSION' not in request.COOKIES:
            # Redirect to the login page or any other page as needed
            return HttpResponse("Invalid cookie, please login")

        return self.get_response(request)
