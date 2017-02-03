'use strict';

const Joi = require('joi');
const Handlers = require('./handlers');

module.exports = [{
	method: 'GET',
	path: '/api/location',
	config: {
		tags: ['api'],
		description: 'Returns the current location of the ISS.'
	},
	handler: Handlers.getLocation
},
{
	method: 'POST',
	path: '/api/distance',
	config: {
		tags: ['api'],
		description: 'Returns the current distance between the ISS and your location in Earth.',
		validate: {
			payload: {
				latitude: Joi.string().required(),
				longitude: Joi.string().required()
			}
		}
	},
	handler: Handlers.getDistance
}];