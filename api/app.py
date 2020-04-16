# Dependencies
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify

#DB engine setup
engine = create_engine("sqlite:///../Database_stuff/trends.sqlite")
conn = engine.connect()

app = Flask(__name__)

@app.route("/")
def welcome():
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/guns2019<br/>"
        f"/api/v1.0/guns2020<br/>"
    )

@app.route("/api/v1.0/guns2019")
def guns2019():
    result = engine.execute("select * from guns2019")
    guns2019 = {}
    guns2019date = []
    guns2019ammunition = []
    guns2019stores = []
    guns2019ar15 = []
    for row in result:
        guns2019date.append(row[1])
        guns2019ammunition.append(row[2])
        guns2019stores.append(row[3])
        guns2019ar15.append(row[4])
    result.close()
    guns2019['dates'] = guns2019date
    guns2019['ammunition'] = guns2019ammunition
    guns2019['stores'] = guns2019stores
    guns2019['ar15'] = guns2019ar15

    return jsonify(guns2019)

@app.route("/api/v1.0/guns2020")
def guns2020():
    result = engine.execute("select * from guns2020")
    guns2020 = {}
    guns2020date = []
    guns2020ammunition = []
    guns2020stores = []
    guns2020ar15 = []
    for row in result:
        guns2020date.append(row[1])
        guns2020ammunition.append(row[2])
        guns2020stores.append(row[3])
        guns2020ar15.append(row[4])
    result.close()
    guns2020['dates'] = guns2020date
    guns2020['ammunition'] = guns2020ammunition
    guns2020['stores'] = guns2020stores
    guns2020['ar15'] = guns2020ar15

    return jsonify(guns2020)
