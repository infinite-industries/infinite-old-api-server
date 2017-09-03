// Artists info

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artistSchema = new Schema({
  name: String,
  id: String,
  portrait_img: String,
  contact_email: String,
  email_is_public: Boolean,
  website: String,
  facebook: String,
  twitter: String,
  instagram: String,
  blog: String,
  also_curator: Boolean,
  curator_id: String,
  updated: { type: Date, default: Date.now }
}, {collection: "artists"});

const Artist = mongoose.model("Artist", artistSchema);

module.exports = Artist;
