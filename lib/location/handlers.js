'use strict';

const got = require('got'); 
const iss_url = 'http://api.open-notify.org/iss-now.json';

module.exports = {
	getLocation: function(request, reply) {

		const delay = 3000 // Milliseconds 

		got(iss_url, {json: true })
			.then(response => {
				reply(response.body.iss_position) // Returns only the ISS current position
			})
			.catch(error => {
				relpy(error.response.body)
			})
	},

	getDistance: function(request, reply) {
		reply({message: 'This method will return the distance between the ISS and my location in Earth.'});
	}
}