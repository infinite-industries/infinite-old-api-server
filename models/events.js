// events to be pushed out to the subscribed apps

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: String,
  id: String,
  description: String,
  tags: Array,
  status: String, //can cancel and/or postpone events here
  presenter_curator: String,
  presenter_curator_id: String,
  has_gallery: Boolean,
  presenter_gallery: String,
  presenter_gallery_id: String,
  one_day_event: Boolean,
  start_date_time: Date,
  end_date_time: Date,
  has_opening: Boolean,
  venue_name: String,
  location_street: String,
  location_country: String,
  location_city: String,
  location_state: String,
  location_neighborhood: String
}, {collection: "events"});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
