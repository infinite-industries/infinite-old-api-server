// recently seen artwork, seen meaning chosen at random to be pushed out

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// 6 days expressed in seconds
const timeToWait = 518400;

const recentlySeenArtworkSchema = new Schema({
    id: String,
    updated: { type: Date, default: Date.now, expires: timeToWait }
}, {collection: "RecentlySeenArtworks"});

const RecentlySeenArtwork = mongoose.model("RecentlySeenArtwork", recentlySeenArtworkSchema);

module.exports = RecentlySeenArtwork;
