// working on seeding the database

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var dotenv = require('dotenv');
const passport = require('passport');
const getAPIKeyStrategy = require('./expressMiddleWare/DevTokenAuthStrategy');

var app = express();
app.use(bodyParser.json());
app.use(passport.initialize());
passport.use(getAPIKeyStrategy());

app.use(express.static(path.join(__dirname, 'public')));

var artworks = require('./routes/artworks');
const artists = require('./routes/artists');
const events = require('./routes/events');
const venues = require("./routes/venues");
const curators = require("./routes/curators");

app.use('/artworks', artworks);
app.use("/artists", artists);
app.use("/events", events);
app.use("/venues", venues);
app.use("/curators", curators);

mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/infinite-api');


var appPort = process.env.PORT || '3003';

app.listen(appPort, function () {
    console.log("Magic on port %d", appPort);
});
