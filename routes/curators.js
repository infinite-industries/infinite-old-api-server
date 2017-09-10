// event related API endpoints
const CuratorController = require("../controllers/venues");
const { getDefaultRouter } = require("./routeHelpers");
const router = getDefaultRouter("curators", "curator", CuratorController);

module.exports = router;
