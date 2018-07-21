// working on seeding the database

var express = require('express');
var bodyParser = require('body-parser');
var dotenv = require('dotenv');
const passport = require('passport');
const getAPIKeyStrategy = require('./expressMiddleWare/DevTokenAuthStrategy');
const fs = require('fs')
const sequelize = require('./utils/connection')()
const secretString = fs.readFileSync(process.env.jwtPEM || './keys/1nfinite.pem');
var app = express();

app.set('db', sequelize)
app.set('superSecret', secretString);

app.use(bodyParser.json());
app.use(passport.initialize());
passport.use(getAPIKeyStrategy(sequelize));

const events = require('./routes/events');
const venues = require("./routes/venues");
const eventLists = require("./routes/eventLists");
const users = require("./routes/users");

app.use("/events", events);
app.use("/venues", venues);
app.use("/event-lists", eventLists);
app.use("/users", users);

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
