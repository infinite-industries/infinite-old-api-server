const DevKeyModel = require("../models.bk/devKeys");
const debug = require('debug')('controllers:devKeys');
const getDefaultController = require('./helpers/controllerGenerator');
module.exports = getDefaultController(DevKeyModel);
