#!/usr/bin/env node

const uuidv4 = require('uuid/v4');
const DevKeyController = require('../controllers/devKeys');
const mongoose = require('mongoose');
const nconf = require('nconf');
const debug = require('debug')('scripts:createDevKey');
const util = require('util');
nconf.env().argv();

const mongoURL = 'mongodb://localhost/infinite-api';

const user_name = nconf.get('user');
const organization = nconf.get('org');
const id = nconf.get('id') || uuidv4();

debug(util.format('running script with user_name: "%s", organization: "%s"', user_name, organization));

if (!user_name || !organization)
	return printUsage();

debug('connecting to: ' + mongoURL);
mongoose.connect('mongodb://localhost/infinite-api');

debug('create key with id: ' + id);
DevKeyController.create({ id, user_name, organization }, function(err) {
	debug('key created with id: ' + id);

	if (err)
		return console.error('error creating devKey: ' + err);

	debug('script completed with success');
	console.log('success => created devKey "%s"', id);
	console.log('keep this key secret');

	mongoose.disconnect();
});

function printUsage() {
	console.log([
		'Usage: ',
		'createDevKey [--org organization] [--user user name]'
	].join('\n'));
}
