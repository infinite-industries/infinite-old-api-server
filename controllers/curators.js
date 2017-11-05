const CuratorModel = require("../models/curators.js");
const getDefaultController = require('./generators/controllerGenerator');
module.exports = getDefaultController(CuratorModel);
