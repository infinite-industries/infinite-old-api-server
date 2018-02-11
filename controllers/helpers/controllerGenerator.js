const async = require('async');

module.exports = DefaultController;

function DefaultController(Model) {
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
		delete: (id, callback) => {
			debug(`delete event "${id}"`)
			Model.deleteOne({ id }, callback)
		},
		update: function(id, data, callback) {
			Model.updateOne({ id }, data, callback);
		},
	};
}

DefaultController.findAndMerge = function(Model1, Model2, keys, query, complete) {
	async.waterfall([
		function _getEventLists(_nextTask) {
			Model1.find(query, _nextTask);
		},
		function _gatherEvents(model1Coll, _nextTask) {
			if (!model1Coll || model1Coll.length === 0)
				return _nextTask(null, [], []);

			/*
				gets all ids stored under each of the keys we will merge,
					at this point we simplify things by assuming all
					fields being merged all point to the same type of
					nested model as is the case with lists_my and lists_follow
			 */
			let ids = [];
			keys.forEach(key => {
				ids = ids.concat(model1Coll.map(list => list[key]).reduce((acc, v) =>  acc.concat(v)));
			});

			Model2.find({ id: { $in: ids } }, function(err, model2Coll) {
				_nextTask(err, model1Coll, model2Coll);
			});
		},
		function _mergeEventsIntoLists(model1Coll, model2Coll, _nextTask) {
			if (!model1Coll || model1Coll.length === 0)
					return _nextTask(null, []);


			let mergedList = model1Coll.map(list => {
				keys.forEach(key => {
                    if (!list[key])
                        return; // empty key nothing to fill in

                    list[key] = list[key].map(mdlID => {
                        const entry = model2Coll.find(_e => _e.id === mdlID);
                        if (!entry)
                            console.warn('could not find %s id %s for %s: ', key, mdlID, Model1.modelName);

                        return entry;
                    });
				});

                return list;
            });

			_nextTask(null, mergedList);
		}
	], function(err, mergedList) {
		if (err)
			console.warn(err);

		complete(err, mergedList);
	});
};
