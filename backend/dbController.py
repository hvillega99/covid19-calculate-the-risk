from pymongo import MongoClient
from bson import json_util
import json

class Controller:
    def __init__(self):
        self.client = MongoClient("mongodb+srv://team_rc:252460bv@cluster0.iy7mx.mongodb.net/test?ssl=true&ssl_cert_reqs=CERT_NONE")
        self.db = self.client["coviddb"]
        self.covidCollection = self.db["covid"]

    def getDataByRegion(self, country, region):
        result = self.covidCollection.find({"Country_Region": country, "AdminRegion1": region, "Updated":"02/09/2021"})
        return json.loads(json_util.dumps(result))
        

    def getDataByCountry(self, country):
        result = self.covidCollection.find({"Country_Region": country, "Updated":"02/09/2021"})
        return json.loads(json_util.dumps(result))