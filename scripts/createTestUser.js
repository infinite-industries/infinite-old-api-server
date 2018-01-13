#!/usr/bin/env node

const UsersController = require('../controllers/users');
const { importFiles } = require(__dirname + '/utils/jsonImportUtil.js');

const files = [
    __dirname + '/../data/mock_user_data.json'
];

importFiles(UsersController, files);
