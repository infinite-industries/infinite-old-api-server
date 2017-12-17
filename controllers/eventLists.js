const EventListModel = require('../models/eventList.js');
const EventModel = require('../models/events.js');
const getDefaultController = require('./generators/controllerGenerator');
const _ = require('lodash');
const async = require('async');

module.exports = _.extend(getDefaultController(EventListModel), {
	allAndMergeWithEvents: function(callback) {
		_findAndMerge({}, callback);
	},
	findByIDAndMergeWithEvents: function(id, callback) {
		_findAndMerge({ id }, (err, docs) => callback(err, docs ? docs[0] : null));
	},
	addEvent: function(listID, eventID, callback) {
		EventListModel.updateOne({ id: listID }, { $push: { events: eventID } }, callback);
	}
});

function _findAndMerge(query, complete) {
	async.waterfall([
		function _getEventLists(_nextTask) {
			EventListModel.find(query, _nextTask);
		},
		function _gatherEvents(eventLists, _nextTask) {
			if (!eventLists || eventLists.length === 0)
				return _nextTask(null, [], []);

			const ids = eventLists.map(list => list.events).reduce((acc, v) =>  acc.concat(v));
			console.log('!!! ids: ' + JSON.stringify(ids, null, 4));

			EventModel.find({ id: { $in: ids } }, function(err, events) {
				_nextTask(err, eventLists, events);
			});
		},
		function _mergeEventsIntoLists(eventLists, events, _nextTask) {
			if (eventLists.length === 0)
				return _nextTask(null, []);

			const mergedList = eventLists.map(list => {
				list.events = list.events.map(eventID => {
					const event = events.find(_e => _e.id === eventID);
					if (!event)
						console.warn('could not find event id: ' + eventID + ' for eventList: ' + list.id);

					return event;
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
}