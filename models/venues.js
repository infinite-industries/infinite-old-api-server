// Gallery Info

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gallerySchema = new Schema({
  name: String,
  id: String,
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
}, {collection: "galleries"});

const Gallery = mongoose.model("Gallery", gallerySchema);

module.exports = Gallery;
