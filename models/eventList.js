const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const keySchema = new Schema({
	id: { type: String, index: true },
	name: String,
	curators: Array,
	is_public: Boolean,
	events: Array,
}, { collection: "event_lists" });

module.exports = mongoose.model("EventList", keySchema);
