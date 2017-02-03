'use strict';

const Handlers = require('./handlers');

module.exports = [{
	method: 'GET',
	path: '/',
	config: {
		tags: ['client'],
		description: 'Renders the homepage of the application.'
	},
	handler: Handlers.home
}];