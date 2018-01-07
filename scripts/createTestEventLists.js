#!/usr/bin/env node

const getConnection = require('../db/connection');
const EventListController = require('../controllers/eventLists');
const async = require('async');

getConnection((err, mongoose) => {
	const testID1 = 'feaea5b0-f3dd-11e7-9986-13e9e40ddffe';
	const testID2 = '0a5eaf80-f3e4-11e7-9946-cbdccd345d9e';
	const testID3 = '2b305e60-f3e5-11e7-81a0-7d63d12f2c04';

	async.each([
		{
			id: testID1,
			name: 'test-list',
			curators: [],
			is_public: true,
			events: ['4f835b40-d46a-11e7-bf1a-89bbe67b6521', '7592f1d0-d323-11e7-94fa-bd64cbc443de']
		},
		{
			id: testID2,
			name: 'test-list2',
			curators: [],
			is_public: true,
			events: ['7592f1d0-d323-11e7-94fa-bd64cbc443de']
		},
		{
			id: testID3,
			name: 'test-list3',
			curators: [],
			is_public: true,
			events: []
		}
	], function(data, _next) {
		EventListController.create(data, err => {
			if (err)
				return _next(err);

			console.log('created new even list "%s"', data.id);
			_next();
		});
	}, function(err) {
		if (err)
			console.error(err);

		mongoose.disconnect();
	});

});
