// artwork related API endpoints
const express = require("express");
const async = require('async');
const ArtworkController = require("../controllers/artworks");
const RecentlySeenArtworkController = require("../controllers/recentlySeenArtworks");
const { constants, getDefaultRouter } = require('./helpers/routeHelpers');
const router = getDefaultRouter("artworks", "artwork", ArtworkController);

/* get random artwork id, that has not already been shown */
router.get("/random", function(req, res) {
    async.waterfall([
        function _getAllFields(_nextTask) {
            ArtworkController.all(_nextTask);
        },
        function _chooseWork(allIDs, _nextTask) {
            if (allIDs.length === 0)
                return _nextTask("no artwork in the database");
            _findRandom(allIDs, _nextTask);
        },
        function _markFound(chosenArt, _nextTask) {
            // make sure we mark this as recently seen inserting or updating an entry
            RecentlySeenArtworkController.updateOne(chosenArt.id, function (err) {
               _nextTask(err, chosenArt);
            });
        },
    ], function(err, chosenArt) {
        if (err) {
            console.warn("error handling request for artwork: " + err);
            return res.status(500).json({ status: constants.db_error });
        }

        res.status(200).json({ artwork: chosenArt });
    });

    // ==== Private Helpers ====
    function _findRandom(allIDs, complete) {
        const i = Math.floor(Math.random() * allIDs.length);
        const chosenID = allIDs[i].id;
        const chosenArt = allIDs[i];

        _isSeen(chosenID, function (err, recentlySeen) {
            if (err)
                return complete(err); // db error just break out of recursion and return error

            if (!recentlySeen)
                return complete(null, chosenArt); // success

            // remove items we've already seen so we don't repeat
            const newIDArray = allIDs.slice(i, i + 1);

            if (newIDArray.length === 0) {
                // we've seen it all so just go ahead and return one we've seen
                return complete(null, chosenArt);
            }

            // try again
            _findRandom(newIDArray, complete);
        });
    }

    function _isSeen(id, complete) {
        RecentlySeenArtworkController.findById(id, function (err, seenWorks) {
            complete(err, seenWorks && seenWorks.length > 0);
        });
    }
});

module.exports = router;
