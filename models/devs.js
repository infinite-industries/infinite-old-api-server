// developers registered for API access and their contact info

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const devSchema = new Schema({

}, {collection: "devs"});

const Dev = mongoose.model("Dev", devSchema);

module.exports = Dev;
