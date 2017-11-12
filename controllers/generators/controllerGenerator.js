module.exports = function getDefaultController(Model) {
	const debug = require('debug')('models:' + Model.modelName);

	return {
		findById: function(id, callback) {
			debug('findById: ' + id);
			Model.findOne({ id: id }, callback)
		},

		all: function(callback, query, filter_field) {
			debug('all');
			query = query || {};

			if (filter_field) {
				query[opts.filter_field] = true;
			}

			Model.find(query, callback);
		},
		create: function(data, callback) {
			debug('create: ' + JSON.stringify(data, null, 4));
			Model.create(data, callback);
		},
		update: function(id, data, callback) {
			Model.updateOne({ id }, data, callback);
		}
	};
};
