// events to be pushed out to the subscribed apps

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  id: { type: String, index: true },
  type: String,
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
  notes: String,

  // === in json file ===
  title: String,
  slug: String,
  when: String,
  time_start: Date,
  time_end: Date,
  website: String,
  image: String,
  social_image: String,
  venues: Array,
  organizers: Array,
  map_link: String,
  brief_description: String,
  description: String,
  links: Array,
  fb_event_link: String,
  eventbrite_link: String,
  bitly_link: String,
  tags: Array,
  verified: Boolean
}, {collection: "events"});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
