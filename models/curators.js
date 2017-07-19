// Curator info

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const curatorSchema = new Schema({

}, {collection: "curators"});

const Curator = mongoose.model("Curator", curatorSchema);

module.exports = Curator;
