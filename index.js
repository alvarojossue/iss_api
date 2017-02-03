// Configuration
const config = require('config');

const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');

// Hapi server
const server = new Hapi.Server();

server.connection({ 
	port: config.api.port, 
	host: config.api.host
});

//Included plugins
const plugins = [
	Inert,
	Vision,
	require('./lib/api'),
	require('./lib/client'),
	{
		register: require('good'),
		options: {
			reporters: [{
				reporter: require('good-console'),
				events: { response: '*'}
			}]
		}
	}
];

server.register(plugins, (err) => {
	if (err) {
		throw err;
	}

	server.start((err) => {

	    if (err) {
	        throw err;
	    }
	    console.log(`Server running at: ${server.info.uri}`);
	});
});