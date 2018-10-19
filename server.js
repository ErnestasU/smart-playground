require('dotenv').load();
var express = require('express');
var bodyParser = require('body-parser');
var itemRoute = require('./app/routes/playgroundItemRoute');

var app = new express();
var router = new express.Router();

const PORT = process.env.PORT || 3001;

itemRoute(router);

app.use("/api", router);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port, function(req, res) {
  console.log(`App running on port ${PORT}`);
});