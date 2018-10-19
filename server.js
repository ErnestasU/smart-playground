var express = require('express');
var app = new express();
var bodyParser = require('body-parser');
var itemRoute = require('./app/routes/playgroundItemRoute');
var port = 3001;
var router = new express.Router();

itemRoute(router);

app.use("/api", router);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use(function(req, res) {
  console.log('Doesnt work!'); 
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port, function(req, res) {
  console.log("test");
});