#!/usr/bin/env node

const getConnection = require('../db/connection');
const UsersController = require('../controllers/users');

getConnection((err, mongoose) => {
	const testUserID = '99af7550-f3e6-11e7-8279-f30c6795f584';
	const testListID1 = 'feaea5b0-f3dd-11e7-9986-13e9e40ddffe';
	const testListID2 = '0a5eaf80-f3e4-11e7-9946-cbdccd345d9e';
	UsersController.create({
		id: testUserID,
		identifier: 'chris.wininger@gmail.com',
		info: {
			fist_name: "Chris",
			last_name: "Wininger",
			user_name: "cwininger",
			contact_email: "chris.wininger@gmail.com",
			home_event_area: "kentucky_lexington",
			facebook: "fb link",
			twitter: "twitter link",
			instagram: "none"
		},
		permissions_post_as_venues: [],
		permissions_edit_lists: [
			testListID1
		],
		lists: [
			testListID1,
			testListID2
		]
	}, (err, id) => {
		console.log('created new even list "%s"', id);
		mongoose.disconnect();
	});
});
