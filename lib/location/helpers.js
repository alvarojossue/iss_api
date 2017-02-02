'use strict';

const got = require('got'); 

module.exports = {
	issLocation: function(callback) {
		const iss_url = 'http://api.open-notify.org/iss-now.json';

		got(iss_url, {json: true })
		.then(response => {
				return callback(null, response.body.iss_position );// Returns only the ISS current position
				}, error => {
					return callback(error.response.body);
				});
	}
}