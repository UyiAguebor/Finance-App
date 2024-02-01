import json
from django.shortcuts import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.hashers import make_password, check_password
from db_connection import db

# Create your views here.
@csrf_exempt
def createPot(request):
    if request.method == "POST":
        user_id = request.session.get('user_id', None)

        json_data = json.loads(request.body.decode('utf-8'))
        pot_name = json_data.get("potName")
        saving_goal = json_data.get("savingGoal")

        pots = db.pots

        pot_name_check = pots.count_documents({"potName": pot_name})

        if(pot_name_check > 0):
            return HttpResponse("Pot already exists with the given name")

        newPot = {
            "potName": pot_name,
            "savingGoal": saving_goal,
            "currentSaved": 0,
            "transactions": {},
            "creator": user_id
        }

        pot_id = pots.insert_one(newPot).inserted_id

        return HttpResponse("Pot created with Id: " + str(pot_id))

    else:
        return HttpResponse("Invalid request method")

def getUserPots(request):
    if request.method == "GET":
        user_id = request.session.get('user_id', None)

        pots = db.pots

        user_pots = pots.find({"creator": user_id})

        return user_pots
        
    else:
        return HttpResponse("Invalid request method")