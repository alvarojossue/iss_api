'use strict';

const Routes = require('./api/routes');

exports.register = function (server, options, next) {
  server.route(Routes);
  next();
};

exports.register.attributes = { name: 'api', version: '0.0.1' };