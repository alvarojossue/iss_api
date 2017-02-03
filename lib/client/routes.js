'use strict';

const Handlers = require('./handlers');
const Assets = require('./assets');

module.exports = [{
	method: 'GET',
	path: '/{param*}',
	config: {
		tags: ['client'],
		description: 'Renders the homepage of the application.'
	},
	handler: Assets.servePublicDirectory
}];