'use strict';

module.exports = {
	getLocation: function(request, reply) {
		reply('This method will return the location of the ISS');
	},

	getDistance: function(request, reply) {
		reply({message: 'This method will return the distance between the ISS and my location in Earth.'});
	}
}