// working on seeding the database

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var dotenv = require('dotenv');
const passport = require('passport');
const getAPIKeyStrategy = require('./expressMiddleWare/DevTokenAuthStrategy');
const Sequelize = require('sequelize')
const sequelize = new Sequelize('infinite_api', 'postgres', 'xxx', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

var app = express();

sequelize.event = sequelize.import(__dirname + '/models/event');
sequelize.event_list_membership = sequelize.import(__dirname + '/models/event_list_membership')
sequelize.event_list = sequelize.import(__dirname + '/models/event_list')

app.set('db', sequelize)
app.use(bodyParser.json());
app.use(passport.initialize());
passport.use(getAPIKeyStrategy());

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