const VenueModel = require("../models/venues.js");
const getDefaultController = require('./generators/controllerGenerator');
module.exports = getDefaultController(VenueModel);
