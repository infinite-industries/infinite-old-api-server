// artwork related API endpoints
var express = require("express");
var router = express.Router();

var ArtistController = require("../controllers/artists");

const db_error = "db_fail";
const success_message = "success";

router.get("/", function(req, res, next) {
    console.log("handling request for all artists");
    ArtistController.all(function(err, data) {
        if (err) {
            console.warn("error handling request for all artists: " + err);
            res.status(500).json({ "status": db_error });
        } else {
            res.status(200).json({ status: success_message, artists: data });
        }
    });
});

router.get("/:artistID",
    function(req, res) {
        console.log("handling request for artist by id: " + req.params.artistID);
        ArtistController.findById(req.params.artistID, function(err, data){
            if(err){
                console.warn("error handling request for artist: " + err);
                res.status(500).json({ "status": db_error });
            }
            else if (data===null){
                res.status(404).json({"status":"no_such_id"});
            }
            else{
                res.status(200).json({ status: "success", artist: data });
            }
        })
    });

module.exports = router;
