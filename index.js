// working on seeding the database

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var dotenv = require('dotenv');
const passport = require('passport');
const getAPIKeyStrategy = require('./expressMiddleWare/DevTokenAuthStrategy');
const sequelize = require('./db/connection')()

var app = express();

app.set('db', sequelize)
app.use(bodyParser.json());
app.use(passport.initialize());
passport.use(getAPIKeyStrategy(sequelize));

const events = require('./routes/events');
const venues = require("./routes/venues");
const curators = require("./routes/curators");
const eventLists = require("./routes/eventLists");
const users = require("./routes/users");

app.use("/events", events);
app.use("/venues", venues);
app.use("/curators", curators);
app.use("/event-lists", eventLists);
app.use("/users", users);

mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/infinite-api');

var appPort = process.env.PORT || '3003';

sequelize
  .authenticate()
  .then(() => {
      console.info('Connection to database established.')
      app.listen(appPort, function () {
          console.log("Magic on port %d", appPort)
      });
  })
  .catch(err => {
      console.error('Unable to connect to the database:', err)
      process.exit(1)
  })