const ArtistModel = require("../models/artists.js");
const getDefaultController = require('./generators/controllerGenerator');
module.exports = getDefaultController(ArtistModel);
