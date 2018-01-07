/*
*
* Easier way to submit to different calendars
*
*   email notifications
*
*
* */

const EventsModel = require("../models/events.js");
const getDefaultController = require('./helpers/controllerGenerator');

module.exports = getDefaultController(EventsModel);
