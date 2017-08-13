const mongoose = require("mongoose");
const ArtworkModel = require("../models/artworks.js");

module.exports = {

  findById: function(artwork_id, callback){
    //TODO check on FindOne for this case
    ArtworkModel.findOne({ 'id' : artwork_id}, callback)
  },

  all: function(callback) {
    ArtworkModel.find({}, callback);
  }
}
