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
		const distanceFromIss = geolib.getDistance(myPosition, issPosition);
		console.log(issPosition)
		reply(distanceFromIss);
		});
	}
}