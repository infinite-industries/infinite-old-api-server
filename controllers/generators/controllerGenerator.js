module.exports = function getDefaultController(Model) {
	const debug = require('debug')('models:' + Model.modelName);

	return {
		findById: function(id, callback) {
			debug('findById: ' + id);
			Model.findOne({ id: id }, callback)
		},

		all: function(callback) {
			debug('all');
			Model.find({}, callback);
		},
		create: function(data, callback) {
			debug('create: ' + JSON.stringify(data, null, 4));
			Model.create(data, callback);
		}
	};
};
