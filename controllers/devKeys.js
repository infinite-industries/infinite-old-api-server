const DevKeyskModel = require("../models/devKeys.js");
const _ = require('lodash');

module.exports = {
	findById: function(artworkID, callback) {
		//TODO check on FindOne for this case
		DevKeyskModel.findOne({ 'id' : artworkID }, callback);
	},

	// updates or inserts a new recentlySeenArtwork
	updateOne: function(id, callback) {
		DevKeyskModel.update({ id: id }, { id: id, updated: Date.now() }, { upsert: true }, callback);
	},

	// updates or inserts a new recentlySeenArtwork
	create: function(data, callback) {
		DevKeyskModel.create(_.extend(data, { updated: Date.now() }), callback);
	}
};
