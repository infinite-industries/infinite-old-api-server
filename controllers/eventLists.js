const EventListModel = require('../models/eventList.js');
const EventModel = require('../models/events.js');
const DefaultController = require('./helpers/controllerGenerator');
const _ = require('lodash');

module.exports = _.extend(DefaultController(EventListModel), {
	allAndMergeWithEvents: function(callback) {
		DefaultController.findAndMerge(EventListModel, EventModel, 'events', {}, callback);
	},
	findByIDAndMergeWithEvents: function(id, callback) {
		DefaultController.findAndMerge(EventListModel, EventModel, 'events',{ id },
			(err, docs) => callback(err, docs ? docs[0] : null));
	},
	addEvent: function(listID, eventID, callback) {
		EventListModel.updateOne({ id: listID }, { $push: { events: eventID } }, callback);
	}
});
