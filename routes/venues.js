const JWTParser = require('../utils/JWTParser')

// event related API endpoints
const VenueController = require("../controllers/venues");
const { getDefaultRouter } = require("./helpers/routeHelpers");
const router = getDefaultRouter("venues", "venue", VenueController, {}, {
  createMiddleware: [JWTParser] // parses token but allows anyone to post
});

module.exports = router;
