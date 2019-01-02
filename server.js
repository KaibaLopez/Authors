// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// requirements

var path = require("path");

// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './authors/dist/authors')));

// Routes
require('./server/routes')(app);
app.listen(8000);
