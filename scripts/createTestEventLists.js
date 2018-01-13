#!/usr/bin/env node

const EventListController = require('../controllers/eventLists');
const { importFiles } = require(__dirname + '/utils/jsonImportUtil.js');

const files = [
	__dirname + '/../data/mock_user_list_1.json',
    __dirname + '/../data/mock_user_list_2.json',
    __dirname + '/../data/mock_user_list_3.json',
    __dirname + '/../data/mock_user_list_4.json'
];

importFiles(EventListController, files);