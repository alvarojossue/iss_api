const config = require('config');

const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');

const server = new Hapi.Server();

server.connection({ 
	port: config.api.port, 
	host: config.api.host
});

const plugins = [
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
	},
	Inert,
	Vision
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