#!/usr/bin/env node

const { MongoClient } = require('mongodb');
const async = require('async');
const mongoURL = 'mongodb://localhost/infinite-api';
const nconf = require('nconf');
const fs = require('fs');

nconf.env().argv();

const fileLocation = nconf.get('file') || nconf.get('f');
if (!fileLocation)
	return console.warn('--file is a required parameter');

async.waterfall([
	function _getFile(_nextTask) {
		fs.readFile(fileLocation, function(err, strJSON) {
			if (err)
				return _nextTask(err);

			let json = null;
			try {
				json = JSON.parse(strJSON.toString());
			} catch (ex) {
				err = ex;
			}

			_nextTask(err, json);
		});
	},
	function _getConnection(json, _nextTask) {
		if (nconf.get('persistence:tls')) {
			opts.server.sslValidate = true;
			opts.server.sslCA = credentials.ca;
		}

		MongoClient.connect(mongoURL, {}, function(err, db) {
			if (err)
				return _nextTask('could not connect to mongodb: ' + err, db);

			_nextTask(null, json, db);
		});
	},
	function _processFile(eventsJSON, db, _nextTask) {
		const eventsColl = db.collection('events');

		async.each(eventsJSON, function(event, _nextEvent) {
			console.log('processing event: ' + event.id);
			event = _modelLogic(event);

			eventsColl.update({ id:  event.id }, event, { upsert: true }, function(err) {
				if (err)
					return _nextEvent(err);
				console.log('done processing event: ' + event.id);
				_nextEvent();
			});
		}, function(err) {
			if (err)
				return _nextTask(err, db);

			_nextTask(err, db);
		});
	}
], function(err, db) {
	if (db)
		db.close();

	if (err)
		console.error(err);
	else
		console.log('success');
})

// much dirty way of doing things, wow
function _modelLogic(event) {
	if (event.time_end)
		event.time_end = new Date(event.time_end);

	if (event.time_start)
		event.time_start = new Date(event.time_start);

	return event;
}
