const VenueModel = require("../models/venues.js");
const getDefaultController = require('./helpers/controllerGenerator');
module.exports = getDefaultController(VenueModel);
