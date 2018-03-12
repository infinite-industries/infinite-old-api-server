// registered webhooks with dev info and keys (if any)
// This a future possiblity and in no way implemented at this point

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const webhookSchema = new Schema({

}, {collection: "webhooks"});

const Webhook = mongoose.model("Webhook", webhookSchema);

module.exports = Webhook;
