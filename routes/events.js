// event related API endpoints
const EventController = require("../controllers/events");
const { getDefaultRouter } = require("./helpers/routeHelpers");
const { Op } = require('sequelize')
const passport = require('passport');
const router = getDefaultRouter("events", "event", EventController, { verified: false });

// get current verified events
router.get('/current/non-verified', function(req, res) {
    const dt = new Date(Date.now());
		const query = {
			where: {
				verified: false,
				time_end: {}
			}
		}

		query.where.time_end[Op.gte] = dt
    //const query = { $and: [{ time_end: { $gt: dt }}, { verified: { $ne: true }}] };
    EventController.all(req.app.get('db'), function(err, events) {
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
	const query = {
		where: {
      verified: true,
      time_end: {}
		}
	}

	query.where.time_end[Op.gte] = dt

	EventController.all(req.app.get('db'), function(err, events) {
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

		EventController.update(req.app.get('db'), id, { verified: true }, function(err) {
			if (err)
				return res.status(500).json({ status: 'failed: ' + err });

			res.status(200).json({ status: 'success' });
		});
	}
);

module.exports = router;
