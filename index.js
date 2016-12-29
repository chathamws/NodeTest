// Load Libraries
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

// Create a new instance of express
var app = express();

//  Add our logging and body parser middleware
app.use(morgan('combined'));
app.use(bodyParser.json());

// Add some routes
app.get('/', function (req, res) {
  res.send('Hello World');
});

app.post('/', function (req, res) {
  res.send('Hello World ' + req.body.name);
});

app.get('/:name', function (req, res) {
  res.send('Hello World ' + req.params.name);
});

// Start the app, listening on port 3000
app.listen(3000, function () {
  console.log('Listening on port 3000');
});