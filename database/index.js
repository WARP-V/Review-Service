var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost:27017/nike');
mongoose.Promise = global.Promise;

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
module.exports.db = db;