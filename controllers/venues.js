const VenueModel = require("../models/venues.js");

module.exports = {

    findById: function(venue_id, callback) {
        VenueModel.findOne({ id : venue_id}, callback)
    },

    all: function(callback) {
        VenueModel.find({}, callback);
    }
}
