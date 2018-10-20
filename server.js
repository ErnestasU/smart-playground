require('dotenv').load();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const itemRoute = require('./app/routes/playgroundItemRoute');
const mongo =  require('./app/database/mongo.js');

var app = new express();
var router = new express.Router();

const port = process.env.PORT || 3001;

const mongoConnectionString = process.env.MONGODB_CONNECTION;
const mongoDatabase = process.env.MONGODB_DATABASE;

mongo.connect(mongoConnectionString, mongoDatabase)

itemRoute(router);

var corsOptions = {
  origin: process.env.CORS_WHITELIST,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use("/api", cors(corsOptions), router);


app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port, function(req, res) {
  console.log(`App running on port ${port}`);
});