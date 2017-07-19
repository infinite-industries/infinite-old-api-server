// Artists info

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artistSchema = new Schema({

}, {collection: "artists"});

const Artist = mongoose.model("Artist", artistSchema);

module.exports = Artist;
