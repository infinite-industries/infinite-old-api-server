// Gallery Info

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gallerySchema = new Schema({

}, {collection: "galleries"});

const Gallery = mongoose.model("Gallery", gallerySchema);

module.exports = Gallery;
