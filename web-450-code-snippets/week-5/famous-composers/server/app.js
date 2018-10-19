var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var logger = require('morgan');
var path = require('path');
var mongoose = require('mongoose');
var createError = require('http-errors');
var config = require('./helpers/config');
var composerApi = require('./api/api-composer');


/**
 * MongoDB setup
 */
mongoose.connect('mongodb://' + config.database.username + ':'
  + config.database.password + '@'
  + config.database.url + ':'
  + config.database.port + '/'
  + config.database.name, {promiseLibrary: require('bluebird'), useNewUrlParser: true})
  .then(() => console.log('Connection to the MongoDB instance was successful'))
  .catch((err) => console.log('MongoDB Error: ' + err));


/**
 * Express
 */
var app = express();

/**
 * use statements
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': 'false'}));
app.use(express.static(path.join(__dirname, '../dist/famous-composers')));
app.use('/', express.static(path.join(__dirname, '../dist/famous-composers')));
app.use(logger('dev'));

/**
 * API configuration
 * TODO: To test the API's you visit localhost:3000/api/composer
 */
app.use('/api/composer', composerApi);

/**
 * Request handler for invalid API calls
 */
app.use(function(req, res, next) {
  next(createError(404));
});

// intercept the incoming error and process
app.use(function (err, req, res) {
  res.status(err.status || 500); // set the status to 500
  res.sendStatus(err.status);
});


// start the server
http.createServer(app).listen(3000, function() {
  console.log('Application started and listening on port 3000!');
});




