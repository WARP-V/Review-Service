const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/nike', { useNewUrlParser: true });

const { Schema } = mongoose;

mongoose.connect('mongodb://localhost:27017/nike', { useNewUrlParser: true });

const reviewSchema = new Schema({
  shoeID: String,
  author: String,
  title: String,
  stars: {
    type: Number,
    min: 0,
    max: 5,
  },
  body: String,
  createdAt: Date,
});

const Review = mongoose.model('Review', reviewSchema);

const retrieveShoeReviews = (shoeID, callback) => {
  Review.find({ shoeID }, (error, docs) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, docs);
    }
  });
};

const retrieveAllReviews = (callback) => {
  Review.find((error, docs) => {
    if (error) {
      return callback(error, null);
    } return callback(null, docs);
  });
};

module.exports.Review = Review;
module.exports.retrieveShoeReviews = retrieveShoeReviews;
module.exports.retrieveAllReviews = retrieveAllReviews;
