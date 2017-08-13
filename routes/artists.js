// artwork related API endpoints
var express = require("express");
var router = express.Router();

var ArtworkController = require("../controllers/artists");

const db_error = "db_fail";
const success_message = "success";

router.get("/", function(req, res, next) {
	console.log("handling request for all artwork");
	ArtworkController.all(function(err, data) {
		if (err) {
			console.warn("error handling request for all artworks: " + err);
			res.status(500).json({ "status": db_error });
		} else {
			res.status(200).json({ status: success_message, artworks: data });
		}
	});
});

router.get("/:artID",
	function(req, res, next) {
		console.log("handling request for artwork by id: " + req.params.artID);
		ArtworkController.findById(req.params.artID, function(err, data){
			if(err){
				console.warn("error handling request for artwork: " + err);
				res.status(500).json({ "status": db_error });
			}
			else if (data===null){
				res.status(404).json({"status":"no_such_id"});
			}
			else{
				res.status(200).json({"status":"success","artwork":data});
			}
		})
	});

module.exports = router;
