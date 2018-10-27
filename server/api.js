const express = require('express');
const parseBody = require('body-parser');
const path = require('path');
const Review = require('./database/Review.js');

const api = express();

api.use(express.static(path.join(__dirname, '../public/')));
api.use(parseBody.json());

api.get('/:shoeID/reviews', (req, res) => {
  const { shoeID } = req.params;
  Review.retrieveShoeReviews(shoeID, (error, reviews) => {
    if (error) {
      res.status(500).end();
    } else {
      res.status(200).send(reviews).end();
    }
  });
});

module.exports = api;
