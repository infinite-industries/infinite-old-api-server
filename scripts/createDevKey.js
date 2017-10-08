const mongoose = require('mongoose');
const DevKeyController = require('../controllers/devKeys');
const nconf = require('nconf');

mongoose.connect('mongodb://localhost/infinite-api', { useMongoClient: true });
nconf.env().argv();

const name = nconf.get('name') || nconf.get('n');
const org = nconf.get('organization') || nconf.get('org');
const user = nconf.get('user') || nconf.get('u');

const devKey = {
	name: name,
	organization: org,
	user: user
};

console.log('create dev key: ' + JSON.stringify(devKey, null, 4));
DevKeyController.create(devKey, function(err) {
	if (err)
		console.warn(err);
	else
		console.log('success');

	mongoose.disconnect();
});
