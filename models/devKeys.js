// keys for API requests

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const keySchema = new Schema({
	id: String,
	organization: String,
	user_name: String
}, {collection: "dev_keys"});

const Key = mongoose.model("DevKey", keySchema);

module.exports = Key;
