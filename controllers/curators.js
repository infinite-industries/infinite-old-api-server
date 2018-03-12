const CuratorModel = require("../models.bk/curators.js");
const getDefaultController = require('./helpers/controllerGenerator');
module.exports = getDefaultController(CuratorModel);
