// Curator info

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const curatorSchema = new Schema({
  name: String,
  id: String,
  portrait_img: String,
  contact_email: String,
  email_is_public: Boolean,
  also_artist: Boolean,
  artist_id: String,
  independent: Boolean,
  works_at_venue: String,
  works_with_venues: Array,
  website: String,
  facebook: String,
  twitter: String,
  instagram: String,
  blog: String,
  updated: { type: Date, default: Date.now }
}, {collection: "curators"});

const Curator = mongoose.model("Curator", curatorSchema);

module.exports = Curator;
