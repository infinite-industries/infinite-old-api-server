const VenueModel = require("../models.bk/venues.js");
const getDefaultController = require('./helpers/controllerGenerator');
module.exports = getDefaultController(VenueModel);
