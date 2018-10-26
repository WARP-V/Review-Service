const express = require('express');
const parseBody = require('body-parser');
const path = require('path');
// const dbConnection = require('./database/index.js');

const PORT = 3001;

const app = express();

app.use(express.static(path.join(__dirname, '../public/')));
app.use(parseBody.json());

app.get('/shoes/:shoeID', (req, res) => {
  // const shoeID = req.params.shoeID;
  res.end();
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
