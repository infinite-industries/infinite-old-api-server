const ArtistModel = require("../models/artists.js");
const getDefaultController = require('./helpers/controllerGenerator');
module.exports = getDefaultController(ArtistModel);
