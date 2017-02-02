'use strict';

const Handlers = require('./handlers');

module.exports = [{
	method: 'GET',
	path: '/api/location',
	handler: Handlers.getLocation
}, {
	method: 'POST',
	path: '/api/distance',
	handler: Handlers.getDistance
}];