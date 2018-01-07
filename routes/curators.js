// event related API endpoints
const CuratorController = require("../controllers/curators");
const { getDefaultRouter } = require("./helpers/routeHelpers");
const router = getDefaultRouter("curators", "curator", CuratorController);

module.exports = router;
