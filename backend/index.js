const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const MongoClient = require("mongodb").MongoClient;

const PORT = process.env.PORT || 4000;

const app = express();
const jsonParser = express.json();

const mongoClient = new MongoClient("mongodb+srv://shkiper195:shkiper195@cluster0-av1ng.mongodb.net/users");

let dbmovies;
let dbusers;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());


app.get('/movies', function(req, res) {
	const collection = dbmovies;
    collection.find({}).toArray(function(err, data){
        if(err) return console.log(err);
        res.send(data)
    });
});

app.post('/login', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const collection = dbusers;
    collection.find({}).project({_id: 0}).toArray(function(err, users){
        if(err) return console.log(err);
        users.forEach(function(user) {
            if(JSON.stringify(user) === JSON.stringify(req.body)) {
                return res.sendStatus(200);
            } 
        });
    });
});

app.post('/sign', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const collection = dbusers;
    collection.insertOne(req.body, function(err, users){     
        if(err) {
            return  res.sendStatus(500);
        } else return  res.sendStatus(200);
    });
});

mongoClient.connect(function(err, database) {
    if(err) return console.log(err);
    dbusers = database.db("users").collection("users");
    dbmovies = database.db("movies").collection("movies");
    app.listen(PORT);
    console.log("Сервер запустился...");
});

