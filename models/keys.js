// keys for API requests

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const keySchema = new Schema({

}, {collection: "api_keys"});

const Key = mongoose.model("Key", keySchema);

module.exports = Key;
