const ArtistModel = require("../models/artists.js");

module.exports = {

	findById: function(artist_id, callback){
		//TODO check on FindOne for this case
		ArtistModel.findOne({ 'id' : artist_id}, callback)
	},

	all: function(callback) {
		ArtistModel.find({}, callback);
	}
}
