// Gallery Info

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gallerySchema = new Schema({
  name: { type: String, index: true },
  id: { type: String, index: true },
  location_country: String,     // intentionally duplicate of event entity field
  location_city: String,        // intentionally duplicate of event entity field
  location_state: String,       // intentionally duplicate of event entity field
  location_neighborhood: String, // intentionally duplicate of event entity field
  location_street: String,      // intentionally duplicate of event entity field
  website: String,
  facebook: String,
  twitter: String,
  instagram: String,
  blog: String,
  notes: String
}, {collection: "venues"});

const Gallery = mongoose.model("Venue", gallerySchema);

module.exports = Gallery;
