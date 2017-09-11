/*
*
* Easier way to submit to different calendars
*
*   email notifications
*
*
* */

const EventsModel = require("../models/events.js");

module.exports = {

	findById: function(events_id, callback) {
		EventsModel.findOne({ id: events_id }, callback)
	},

	all: function(callback) {
		EventsModel.find({}, callback);
	}
}
