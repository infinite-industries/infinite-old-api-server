// working on seeding the database

var express = require('express');
var path = require('path');

var app = express();
app.use(express.static(path.join(__dirname, 'public')));

var appPort = process.env.PORT || '3003';

app.listen(appPort, function () {
    console.log("Magic on port %d", appPort);
});
