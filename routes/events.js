// event related API endpoints
const EventController = require("../controllers/events");
const { getDefaultRouter } = require("./helpers/routeHelpers");
const passport = require('passport');
const router = getDefaultRouter("events", "event", EventController, { verified: false });

// get current verified events
router.get('/current/non-verified', function(req, res) {
    const dt = new Date(Date.now());
    const query = { $and: [{ time_end: { $gt: dt }}, { verified: { $ne: true }}] };
    EventController.all(function(err, events) {
        if (err) {
            console.warn('error getting current/verified events: ' + err);
            return res.status(501).json({ status: 'failed: ' + err });
        }

        res.status(200).json({ status: 'success', events });
    }, query);
});

// get current verified events
router.get('/current/verified', function(req, res) {
	const dt = new Date(Date.now());
	const query = { $and: [{ time_end: { $gt: dt }}, { verified: true }] };
	EventController.all(function(err, events) {
		if (err) {
			console.warn('error getting current/verified events: ' + err);
			return res.status(501).json({ status: 'failed: ' + err });
		}

		res.status(200).json({ status: 'success', events });
	}, query);
});

// allows admins to tag an event as verified
router.put(
	'/verify/:id',
	passport.authenticate('localapikey', { session: false }), (req, res) => {
		const id = req.params.id;

        console.log(`handling request to verify event "${id}"`)

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
