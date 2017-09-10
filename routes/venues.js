// event related API endpoints
const VenueController = require("../controllers/venues");
const { getDefaultRouter } = require("./routeHelpers");
const router = getDefaultRouter("events", "event", VenueController);

module.exports = router;
