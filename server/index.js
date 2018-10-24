var express = require('express');
var parseBody = require('body-parser');
var path = require('path');
var Review = require('../database/index.js');
var PORT = 3000;

var app = express();

app.use(express.static(path.join(__dirname + 'client/dist/')));
app.use(parseBody.json());

app.listen(PORT, () => {
  console.log('listening on port: ' + PORT);
})


