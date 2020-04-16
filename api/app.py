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
        f"/api/v1.0/germs2019<br/>"
        f"/api/v1.0/germs2020<br/>"
        f"/api/v1.0/rec2019<br/>"
        f"/api/v1.0/rec2020<br/>"
        f"/api/v1.0/topic2019<br/>"
        f"/api/v1.0/topic2020<br/>"
        f"/api/v1.0/cdc_tweet<br/>"
        f"/api/v1.0/netflixTweet<br/>"
        f"/api/v1.0/nraTweet<br/>"
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

@app.route("/api/v1.0/germs2019")
def germs2019():
    result = engine.execute("select * from germs2019")
    germs2019 = {}
    dates = []
    hs = []
    bleach = []
    tp = []
    for row in result:
        dates.append(row[1])
        hs.append(row[2])
        bleach.append(row[3])
        tp.append(row[4])
    result.close
    germs2019['dates'] = dates
    germs2019['hand sanitizer'] = hs
    germs2019['bleach'] = bleach
    germs2019['toilet paper'] = tp
    return jsonify(germs2019)

@app.route("/api/v1.0/germs2020")
def germs2020():
    result = engine.execute("select * from germs2020")
    germs2020 = {}
    dates = []
    hs = []
    bleach = []
    tp = []
    for row in result:
        dates.append(row[1])
        hs.append(row[2])
        bleach.append(row[3])
        tp.append(row[4])
    result.close
    germs2020['dates'] = dates
    germs2020['hand sanitizer'] = hs
    germs2020['bleach'] = bleach
    germs2020['toilet paper'] = tp
    return jsonify(germs2020)

@app.route("/api/v1.0/rec2019")
def rec2019():
    result = engine.execute("select * from rec2019")
    rec2019 = {}
    date = []
    netflix = []
    weed = []
    beer = []
    for row in result:
        date.append(row[1])
        netflix.append(row[2])
        weed.append(row[3])
        beer.append(row[4])
    result.close()
    rec2019["date"] = date 
    rec2019["netflix"] = netflix 
    rec2019["weed"] = weed 
    rec2019["beer"] = beer
    return jsonify(rec2019)

@app.route("/api/v1.0/rec2020")
def rec2020():
    result = engine.execute("select * from rec2020")
    rec2020 = {}
    date = []
    netflix = []
    weed = []
    beer = []
    for row in result:
        date.append(row[1])
        netflix.append(row[2])
        weed.append(row[3])
        beer.append(row[4])
    result.close()
    rec2020["date"] = date 
    rec2020["netflix"] = netflix 
    rec2020["weed"] = weed 
    rec2020["beer"] = beer
    return jsonify(rec2020)

@app.route("/api/v1.0/topic2019")
def topic2019():
    result = engine.execute("select * from topic2019")
    topic2019 = {}
    date = []
    guns = []
    germs = []
    recreation = []
    for row in result:
        date.append(row[1])
        guns.append(row[2])
        germs.append(row[3])
        recreation.append(row[4])
    topic2019["date"] = date
    topic2019["guns"] = guns    
    topic2019["germs"] = germs    
    topic2019["recreation"] = recreation
    return jsonify(topic2019)

@app.route("/api/v1.0/topic2020")
def topic2020():
    result = engine.execute("select * from topic2020")
    topic2020 = {}
    date = []
    guns = []
    germs = []
    recreation = []
    for row in result:
        date.append(row[1])
        guns.append(row[2])
        germs.append(row[3])
        recreation.append(row[4])
    topic2020["date"] = date
    topic2020["guns"] = guns    
    topic2020["germs"] = germs    
    topic2020["recreation"] = recreation
    return jsonify(topic2020)

@app.route("/api/v1.0/cdc_tweet")
def cdc_tweet():
    result = engine.execute("select * from cdcTweet")
    cdcTweet= {}
    tweet = []
    for row in result:
        tweet.append(row[2])
    cdcTweet['tweet'] = tweet
    return jsonify(cdcTweet)

@app.route("/api/v1.0/netflixTweet")
def netflixTweet():
    result = engine.execute("select * from netflix_tweet")
    netflixTweet= {}
    tweet = []
    for row in result:
        tweet.append(row[2])
    netflixTweet['tweet'] = tweet
    return jsonify(netflixTweet)

@app.route("/api/v1.0/nraTweet")
def nraTweet():
    result = engine.execute("select * from nraTweet")
    nraTweet= {}
    tweet = []
    for row in result:
        tweet.append(row[2])
    nraTweet['tweet'] = tweet
    return jsonify(nraTweet)