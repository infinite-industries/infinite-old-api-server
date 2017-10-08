// event related API endpoints
const EventController = require("../controllers/events");
const { getDefaultRouter } = require("./routeHelpers");
const router = getDefaultRouter("events", "event", EventController);
const uuidv1 = require('uuid/v1');

router.post('/', function(req, res) {
	const eventJSON= req.body.event;
	if (!eventJSON)
		return res.status(422).json({ status: 'event parameter is required' });

	eventJSON.id = uuidv1();

	EventController.create(eventJSON, function(err) {
		if (err)
			return res.status(500).json({  status: err });

		res.status(200).json({ status: 'ok', id: eventJSON.id });
	});
});

module.exports = router;
