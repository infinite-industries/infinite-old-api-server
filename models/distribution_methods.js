// construct a way to sell/give away/list gallery contact for an artwork
// this one is definitely in the later phase implementation bucket

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const distroSchema = new Schema({

  //stuff here

}, {collection: "distribution_methods"});

const Distro = mongoose.model("Distro", distroSchema);

module.exports = Distro;
