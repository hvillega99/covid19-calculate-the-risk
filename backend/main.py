from flask import Flask, jsonify
import dbController


app = Flask(__name__)

db = dbController.Controller()

@app.route("/")
def index():
    return "Bienvenido"

@app.route("/population/<string:country>")
def getPopulation(country):
    file= open("poblacion.txt", "r", encoding="utf8")
    for linea in file:
        l = linea.replace("\n","")
        if country in l:
            elements = l.split(": ")
            file.close()
            return jsonify({"poblacion": elements[1].replace(" ","")})
    file.close()
    return "Error"

@app.route("/covid-data/<string:country>")
def senDataByCountry(country):
    result = list(db.getDataByCountry(country))
    return jsonify(result)

@app.route("/covid-data/<string:country>/<string:region>")
def sendDataByRegion(country, region):
    result = list(db.getDataByRegion(country, region))
    return jsonify(result)

if __name__ == "__main__":
    app.run(port=3000, debug=True)