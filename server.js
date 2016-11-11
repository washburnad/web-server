var express = require('express');
var app = express();
var PORT = 3000;

var middleware = require('./middleware.js');

// app.use(middleware.requireAuthentication);

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res) {
  res.send('It\s me! <a href="/">Home</a>');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
  console.log('Express server started');
  console.log('Port is '+PORT);
});