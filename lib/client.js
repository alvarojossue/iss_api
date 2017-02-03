'use strict';

const Routes = require('./client/routes');

exports.register = function (server, options, next) {
  server.route(Routes);
  next();
};

exports.register.attributes = { name: 'client', version: '0.0.1' };