var express = require('express');
var parseBody = require('body-parser');
var path = require('path');
var dbConnection = require('./database/index.js');

var PORT = 3001;

var app = express();

console.log(path.join(__dirname, '../public/'));

app.use(express.static(path.join(__dirname, '../public/')));
app.use(parseBody.json());

app.get('/shoes/:shoeID', (req, res) => {
  console.log(req.params);
  var shoeID = req.params.shoeID;
  res.end();
})

app.listen(PORT, () => {
  console.log('listening on port: ' + PORT);
})


