// artworx with info attached

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artworkSchema = new Schema({
  title: String,
  id: String,
  description: String,
  tags: Array,
  artists_name: Array,
  artist_id: String,
  img_url: String,
  presenter_curator: String,
  presenter_curator_id: String,
  has_venue: Boolean,
  presenter_venue: String,
  presenter_venue_id: String,
  sale_status: String,
  has_distro_method: Boolean,
  distro_id: String,
  notes: String,
  updated: { type: Date, default: Date.now }
}, {collection: "artworks"});

const Artwork = mongoose.model("Artwork", artworkSchema);

module.exports = Artwork;
