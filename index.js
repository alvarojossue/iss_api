const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({ port: 4000, host: 'localhost'});

const routes = require('./lib/location/routes.js')

server.route(routes)

server.start((err) => {
	if (err) {
	  throw err;
	}
		console.log(`Server running at: ${server.info.uri}`);
});