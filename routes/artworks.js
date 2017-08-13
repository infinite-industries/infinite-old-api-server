// artwork related API endpoints
var express = require("express");
var router = express.Router();

const ArtistController = require("../controllers/artists");

const { constants } = require('./routeHelpers');

router.get("/", function(req, res, next) {
	console.log("handling request for all artists");
	ArtistController.all(function(err, data) {
		if (err) {
			console.warn("error handling request for all artists: " + err);
			res.status(500).json({ status: constants.db_error });
		} else {
			res.status(200).json({ status: constants.success_status, artists: data });
		}
	});
});

router.get("/:artistID",
	function(req, res, next) {
		console.log("handling request for artist by id: " + req.params.artistID);
		ArtistController.findById(req.params.artistID, function(err, data){
			if(err){
				console.warn("error handling request for artist: " + err);
				res.status(500).json({ status: constants.db_error });
			}
			else if (data===null){
				res.status(404).json({ status: "no_such_id"});
			}
			else{
				res.status(200).json({ status: constants.success_status, artist: data });
			}
		})
	});

/* get random artwork id, that has not already been shown */

module.exports = router;
