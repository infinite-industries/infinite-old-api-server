const mongoose = require("mongoose");
const ArtworkModel = require("../models/artworks.js");
const getDefaultController = require('./helpers/controllerGenerator');
const _ = require('lodash');
module.exports = _.extend(getDefaultController(ArtworkModel), {
  allFieldRestricted: function(fieldRestrictions, callback) {
      ArtworkModel.find({}, fieldRestrictions, callback);
  }
});
