// artwork related API endpoints
const { getDefaultRouter } = require("./routeHelpers");
const ArtistController = require("../controllers/artists");
const router = getDefaultRouter("artists", "artist", ArtistController);

module.exports = router;
