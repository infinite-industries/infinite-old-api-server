// Gallery Info

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
	id: { type: String, index: true },
	identifier: { type: String, index: true }, //whatever joins our auth system to our user table
	info: Object,
	permissions_post_as_venues: Array,
	permissions_edit_lists: Array,
	lists: Array
}, { collection: "users" });

module.exports = mongoose.model("User", userSchema);
