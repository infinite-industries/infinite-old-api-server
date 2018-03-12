// Gallery Info

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gallerySchema = new Schema({
  id: { type: String, index: true },
  name: String,
  slug: { type: String, index: true },
  address: String,
  g_map_link: String
}, { collection: "venues" });

const Venue = mongoose.model("Venue", gallerySchema);

module.exports = Venue;
