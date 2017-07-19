// artworx with info attached

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artworkSchema = new Schema({

}, {collection: "artworks"});

const Artwork = mongoose.model("Artwork", artworkSchema);

module.exports = Artwork;
