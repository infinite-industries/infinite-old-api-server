const DevKeyModel = require("../models/devKeys");
const debug = require('debug')('controllers:devKeys');
const getDefaultController = require('./generators/controllerGenerator');
module.exports = getDefaultController(DevKeyModel);
