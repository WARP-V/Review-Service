var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/nike');
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
})

var Review = mongoose.model("Review", reviewSchema);

module.exports.Review = Review;