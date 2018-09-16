// event related API endpoints
const VenueController = require("../controllers/venues");
const { getDefaultRouter } = require("./helpers/routeHelpers");
const router = getDefaultRouter("venues", "venue", VenueController, {}, {});

module.exports = router;
