import pymongo
from bson.binary import Binary

# Connect to MongoDB
client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client["onestop"]
collection = db["data"]

# Read the PDF file as binary
with open("Advanced Engneering Maths.pdf", "rb") as file:
    pdf_binary = Binary(file.read())

# Insert binary data into MongoDB
collection.insert_one({"pdf_data": pdf_binary})
