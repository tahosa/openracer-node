'use strict';

var SwaggerExpress = require('swagger-express-mw');
var SwaggerUi = require('swagger-tools/middleware/swagger-ui');
var express = require('express');
var app = express();
var path = require('path');

var routes = require('./routes/index');

module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // register swagger-ui
  app.use(SwaggerUi(swaggerExpress.runner.swagger));

  // view engine setup
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');

  // add non-api routes
  app.use('/', routes);

  // add static hosting
  app.use(express.static(path.join(__dirname, 'assets')));

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);
});
