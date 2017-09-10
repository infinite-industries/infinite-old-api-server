const CuratorModel = require("../models/curators.js");

module.exports = {

    findById: function(curator_id, callback) {
        CuratorModel.findOne({ id : curator_id}, callback)
    },

    all: function(callback) {
        CuratorModel.find({}, callback);
    }
}
