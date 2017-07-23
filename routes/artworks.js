// artwork related API endpoints
var express = require('express');
var router = express.Router();

var ArtworkController = require('../controllers/artworks');

router.post('/one-by-id',
  function(req, res, next) {
    console.log(req.body);
    ArtworkController.findById(req.body.artwork_id, function(err, data){
      if(err){
        res.json({"status":"db_fail"});
      }
      else if (data===null){
        res.json({"status":"no_such_id"});
      }
      else{
        res.json({"status":"success","artwork":data});
      }
    })
  });

module.exports = router;
