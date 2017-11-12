// event related API endpoints
const EventController = require("../controllers/events");
const { getDefaultRouter } = require("./routeHelpers");
const passport = require('passport');
const router = getDefaultRouter("events", "event", EventController, { verified: false });

router.post(
	'/verify/:id',
	passport.authenticate('localapikey', { session: false }),
	function(req, res) {
		const id = req.params.id;
		if (!id)
			return res.status(404).json({ status: 'id is a required field' });

		EventController.update(id, { verified: true }, function(err) {
			if (err)
				return res.status(500).json({ status: 'failed: ' + err });

			res.status(200).json({ status: 'success' });
		});
	}
);

module.exports = router;
