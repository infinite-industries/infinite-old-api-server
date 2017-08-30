// events to be pushed out to the subscribed apps

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: String,
  id: String,
  type: String,
  description: String,
  tags: Array,
  status: String, //can cancel and/or postpone events here
  presenter_curator: String,
  presenter_curator_id: String,
  has_venue: Boolean,
  presenter_venue: String,
  presenter_venue_id: String,
  one_day_event: Boolean,
  start_date_time: Date,
  end_date_time: Date,
  has_opening: Boolean,

  // in case it is NOT a venue (ex. public performance) or
  // not a venue that is in the system
  location_name: String,
  location_country: String,     // intentionally duplicate of venue entity field
  location_city: String,        // intentionally duplicate of venue entity field
  location_state: String,       // intentionally duplicate of venue entity field
  location_neighborhood: String, // intentionally duplicate of venue entity field
  location_street: String,      // intentionally duplicate of venue entity field

  website_link: String,
  facebook_event_link: String,

  notes: String

}, {collection: "events"});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
