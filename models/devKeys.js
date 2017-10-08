// devKey model, grants access to protected portions of the API

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const devKeySchema = new Schema({
	id: String,
	name: String,
	user: String,
	organization: String,
	updated: { type: Date, default: Date.now }
}, {collection: "devKeys"});

const DevKey = mongoose.model("DevKey", devKeySchema);

module.exports = DevKey;
