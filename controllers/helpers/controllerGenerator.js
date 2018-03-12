const async = require('async');

module.exports = DefaultController;

function DefaultController(modelName) {
    const debug = require('debug')('models:' + modelName);

    const flattenModel = mdl => {
        // flatten attributes
        const { attrs, ...flatProps } = mdl.toJSON()
        return { ...flatProps, ...attrs }
    }

    return {
        findById: function(db, id, callback) {
            debug('findById: ' + id);
            db[modelName].findById(id)
              .then(model => callback(null, flattenModel(model)))
              .catch(err => callback(err))
        },

        all: function(db, callback, query, filter_field) {
            debug('all');
            /*
                debug('all');
			query = query || {};

			if (filter_field) {
				query[opts.filter_field] = true;
			}
             */
            db[modelName].findAll()
              .then(models => {
                  callback(null, models.map(flattenModel))
              })
              .catch(err => {
                  callback(err)
              })
        },
        create: function(db, data, callback) {
            debug('create: ' + JSON.stringify(data, null, 4));
            db[modelName].create(data, callback);
        },
        delete: (db, id, callback) => {
            debug(`delete event "${id}"`)
            db[modelName].deleteOne({ id }, callback)
        },
        update: function(db, id, data, callback) {
            db[modelName].updateOne({ id }, data, callback);
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
