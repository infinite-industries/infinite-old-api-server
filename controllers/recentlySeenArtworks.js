const RecentlySeenArtworkModel = require("../models/recentlySeenArtwork");

module.exports = {

    findById: function(artworkID, callback) {
        //TODO check on FindOne for this case
        RecentlySeenArtworkModel.findOne({ 'id' : artworkID }, callback);
    },

    // updates or inserts a new recentlySeenArtwork
    updateOne: function(artworkID, callback) {
        RecentlySeenArtworkModel.update({ id: artworkID }, { id: artworkID, updated: Date.now() }, { upsert: true },
            callback);
    }
};
