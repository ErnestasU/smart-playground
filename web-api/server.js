var express = require('express');
var app = new express();
var port = 3001;
 
app.get('/trainers', function (req, res) {
  console.log('called trainers!');  
});

app.use(function(req, res) {
  console.log('Doesnt work!'); 
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port, function(req, res) {
  console.log("test");
});