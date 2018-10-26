var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var reviewSchema = new Schema({
  shoeID: String,
  author: String,
  title: String,
  stars: {
    type: Number,
    min: 0,
    max: 5
  },
  body: String,
  createdAt: Date
});

var Review = mongoose.model("Review", reviewSchema);

var retrieveShoeReviews = (shoeID, callback) => {
  Review.find({shoeID}, (error, docs) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, docs);
    }
  });
}

var retrieveAllReviews = (callback) => {
  Review.find((error, docs) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, docs);
    }
  });
}

module.exports.Review = Review;
module.exports.retrieveShoeReviews = retrieveShoeReviews;

