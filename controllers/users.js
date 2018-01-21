const UserModel = require('../models/users');
const EventListModel = require('../models/eventList');
const DefaultController = require('./helpers/controllerGenerator');
const _ = require('lodash');

module.exports = _.extend(DefaultController(UserModel), {
	allAndMergeWithEventLists: function(callback) {
		DefaultController.findAndMerge(UserModel, EventListModel, ['lists_my', 'lists_follow'], {}, callback);
	},
	findByIDAndMergeWithEventLists: function(id, callback) {
		DefaultController.findAndMerge(UserModel, EventListModel, ['lists_my', "lists_follow"], { id },
			(err, docs) => callback(err, docs ? docs[0] : null));
	},
	addList: function(id, listID, callback) {
		console.log('Hi I am a conotrller -', listID);
		UserModel.updateOne({ id }, { $push: { lists_my: listID } }, callback);
	}
});
