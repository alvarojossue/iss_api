'use strict';

module.exports = {
	home: function(request, reply) {
		reply.file('./public/index.html');
		// reply('hey!')
	}
}