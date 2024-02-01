import json
from django.shortcuts import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.hashers import make_password, check_password
from db_connection import db

# Create your views here.


def containsNumber(s):
    return any(char.isdigit() for char in s)


def containsSpecialChar(s):
    return any(not char.isalnum() for char in s)


@csrf_exempt
def register(request):
    if request.method == "POST":
        json_data = json.loads(request.body.decode('utf-8'))
        firstName = json_data.get("firstName")
        lastName = json_data.get("lastName")
        emailAddress = json_data.get("emailAddress")
        password = json_data.get("password")

        users = db.users
        emailCheck = users.count_documents({"emailAddress": emailAddress})

        if (emailCheck > 0):
            return HttpResponse("User with given email already exists")

        if (len(password) < 8):
            return HttpResponse("Password should be at least 8 characters")
        elif not containsNumber(password):
            return HttpResponse("Password should contain at least 1 number")
        elif not containsSpecialChar(password):
            return HttpResponse("Password should contain at least 1 special character")

        hashedPassword = make_password(password)

        newUser = {
            "firstName": firstName,
            "lastName": lastName,
            "emailAddress": emailAddress,
            "password": hashedPassword
        }

        user_id = users.insert_one(newUser).inserted_id

        return HttpResponse("User created with ID: " + str(user_id))
    else:
        return HttpResponse("Illegal request method")


@csrf_exempt
def login(request):
    if request.method == "POST":
        json_data = json.loads(request.body.decode('utf-8'))
        emailAddress = json_data.get("emailAddress")
        password = json_data.get("password")

        users = db.users
        authUser = users.find_one({"emailAddress": emailAddress})

        if authUser:
            isPasswordMatch = check_password(
                password, authUser.get("password"))

            if isPasswordMatch:
                request.session['user_id'] = str(authUser.get("_id"))
                print(authUser.get("_id"))
                print(str(authUser.get("_id")))
                return HttpResponse("Logged in successfully")
            else:
                return HttpResponse("Incorrect password")
        else:
            return HttpResponse("No user exists with given email address")

    else:
        return HttpResponse("Illegal request method")


@csrf_exempt
def testCookie(request):
    user_id = request.session.get('user_id', None)
    if user_id is not None:
        return HttpResponse("Cookie is successful: " + user_id)
    else:
        return HttpResponse("Cookie not found")
