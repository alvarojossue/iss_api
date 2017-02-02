'use strict';

const geolib = require('geolib');
const Helper = require('./helpers');

module.exports = {
	getLocation: function(request, reply) {
		Helper.issLocation((err, res) => {
			reply(res);
		});
	},

	getDistance: function(request, reply) {
		Helper.issLocation((err, res) => {
		const issPosition = res
		const myPosition = {
			latitude: `${request.payload.latitude}`,
			longitude: `${request.payload.longitude}`
		}
		const distanceFromIssMeters = geolib.getDistance(myPosition, issPosition);
		const distanceFromIssMiles = geolib.convertUnit('mi', distanceFromIssMeters);

		reply(distanceFromIssMiles);
		});
	}
}