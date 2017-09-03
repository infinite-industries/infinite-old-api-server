const mongoose = require("mongoose");
const ArtworkModel = require("../models/artworks.js");

module.exports = {

  findById: function(artwork_id, callback){
    //TODO check on FindOne for this case
    ArtworkModel.findOne({'id' : artwork_id}, function(err, data) {
      console.log(err);
      callback(err, data);
    })
  },
  all: function(callback) {
      ArtworkModel.find({}, callback);
  },

  allFieldRestricted: function(fieldRestrictions, callback) {
      ArtworkModel.find({}, fieldRestrictions, callback);
  }
}
