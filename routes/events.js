// event related API endpoints
const EventController = require("../controllers/events");
const { getDefaultRouter } = require("./routeHelpers");
const router = getDefaultRouter("events", "event", EventController);
const uuidv1 = require('uuid/v1');


module.exports = router;
