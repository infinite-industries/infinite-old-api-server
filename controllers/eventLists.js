const DefaultController = require('./helpers/controllerGenerator');
const _ = require('lodash');

module.exports = _.extend(DefaultController('event_list'), {
	allAndMergeWithEvents: function(db, callback) {
	    db.event_list.findAll({ include: { model: db.event } })
          .then((data) => {
              callback(null, data)
          })
          .catch(err => callback(err))
		//DefaultController.findAndMerge(EventListModel, EventModel, ['events'], {}, callback);
	},/*
	findByIDAndMergeWithEvents: function(id, callback) {
		DefaultController.findAndMerge(EventListModel, EventModel, ['events'],{ id },
			(err, docs) => callback(err, docs ? docs[0] : null));
	},
	addEvent: function(listID, eventID, callback) {
		EventListModel.updateOne({ id: listID }, { $push: { events: eventID } }, callback);
	},
	removeEvent: function(listID, eventID, callback) {
		EventListModel.updateOne({ id: listID }, { $pull: { events: eventID } }, callback);
	}*/
});
