const express = require('express');
const parseBody = require('body-parser');
const path = require('path');
const Review = require('./database/Review.js');

const PORT = 3001;

const app = express();

app.use(express.static(path.join(__dirname, '../public/')));
app.use(parseBody.json());

app.get('/:shoeID/reviews', (req, res) => {
  const { shoeID } = req.params;
  // console.log(JSON.stringify(shoeID));
  Review.retrieveShoeReviews(shoeID, (error, reviews) => {
    if (error) {
      res.status(500).end();
    } else {
      res.status(200).send(reviews).end();
    }
  });
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
