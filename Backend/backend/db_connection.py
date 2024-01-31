import pymongo
from dotenv import load_dotenv
import os

load_dotenv()

DATABASE_USER = os.getenv("MONGO_USER")
DATABASE_PASSWORD = os.getenv("MONGO_PASSWORD")

url = f'mongodb+srv://{DATABASE_USER}:{
    DATABASE_PASSWORD}@app-cluster.kty585r.mongodb.net/?retryWrites=true&w=majority'

client = pymongo.MongoClient(url)

db = client['database']
