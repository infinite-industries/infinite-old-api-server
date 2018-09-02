// event related API endpoints
const VenueController = require("../controllers/venues");
const { getDefaultRouter } = require("./helpers/routeHelpers");
const router = getDefaultRouter("venues", "venue", VenueController);

router.post('/ensure', JWTAuthChain, (req, res) => {
  const postJSON= req.body.venue;
  if (!postJSON) {
    return res.status(400).json({ status: 'missing venue attribute' })
  }

  VenueController.ensureExistsByName(req.app.get('db'), postJSON, (err, venue) => {
    if (err) {
      res.status(500).json({ status: err });
    } else {
      res.status(200).json({ status: 'ok', venue })
    }
  })
})

module.exports = router;
