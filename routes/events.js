// event related API endpoints
const EventController = require("../controllers/events");
const { getDefaultRouter } = require("./routeHelpers");
const router = getDefaultRouter("events", "event", EventController);

module.exports = router;
