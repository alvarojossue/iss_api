const config = require('config');
const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({ 
	port: config.api.port, 
	host: config.api.host
});

// const routes = require('./lib/api/routes.js');

const plugins = [
	require('./lib/api'),
	{
		register: require('good'),
		options: {
			reporters: [{
				reporter: require('good-console'),
				events: { response: '*'}
			}]
		}
	},
	{
		register: require('vision')
	}
];

server.register(plugins, (err) => {
	if (err) {
		throw err;
	}

	// server.route(routes);

	server.start((err) => {

	    if (err) {
	        throw err;
	    }
	    console.log(`Server running at: ${server.info.uri}`);
	});
});