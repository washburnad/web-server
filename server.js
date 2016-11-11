var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
  requireAuthentication: function (req, res, next) {
    console.log('private route hit');
    next();
  },
  logger: function (req, res, next) {
    var date = new Date().toString();
    console.log('Request: '+req.method);
    console.log('Request: '+req.originalUrl);
    console.log('Request date: '+date);
    next();
  }
}

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