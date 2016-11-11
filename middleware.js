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

module.exports = middleware
