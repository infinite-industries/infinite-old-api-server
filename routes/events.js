// event related API endpoints
const EventController = require("../controllers/events");
const { getDefaultRouter } = require("./routeHelpers");
const router = getDefaultRouter("events", "event", EventController);
const uuidv1 = require('uuid/v1');

router.use('/', function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	res.header('Access-Control-Allow-Headers',
		'Content-Type, Authorization, Content-Length, X-Requested-With');
	next();
});

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
