const RecentlySeenArtworkModel = require("../models/recentlySeenArtwork");
const getDefaultController = require('./generators/controllerGenerator');
const _ = require('lodash');
module.exports = _.extend(getDefaultController(RecentlySeenArtworkModel), {
    updateOne: function(id, callback) {
        RecentlySeenArtworkModel.update({ id }, { id: id, updated: Date.now() }, { upsert: true },
            callback);
    }
});
