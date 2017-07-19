// events to be pushed out to the subscribed apps

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({

}, {collection: "events"});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
