// developers registered for API access and their contact info

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const devSchema = new Schema({
  name: String,
  id: String,
  portrait_img: String,
  contact_email: String,
  email_is_public: Boolean,
  has_key: Boolean,
  key_id: String,
  updated: { type: Date, default: Date.now }
}, {collection: "devs"});

const Dev = mongoose.model("Dev", devSchema);

module.exports = Dev;
