const mongoose = require('mongoose');

module.exports = function getConnection(complete) {
	const mongoURL = 'mongodb://localhost/infinite-api';
	mongoose.set('debug', true);
	mongoose.connect('mongodb://localhost/infinite-api');
	console.log('connecting to: ' + mongoURL);
	complete(null, mongoose);
};
