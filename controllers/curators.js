const CuratorModel = require("../models/curators.js");
const getDefaultController = require('./helpers/controllerGenerator');
module.exports = getDefaultController(CuratorModel);
