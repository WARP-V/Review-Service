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
  createdAt: {type: Date, default: Date.now},
},{collection: 'reviews'});

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

const save = (reviews) => {
  const review = new Review(reviews);
  review.save(function(err, reviews) {
    if (err) console.log(err);
  });
}

const update = (id, author, callback) => {
  Review.findByIdAndUpdate({ _id: id },{ author: author },(error, docs)=>{
    if(error){
      console.log("error find and updata");
      callback(error, null);
    }else{
      console.log("success find und update");
      callback(null, docs);
    }
  })
}

// const remove = (id, shoeID, author, title, stars, body, createdAt, callback) => {
//   Review.findByIdAndRemove({_id: id}, {shoeID: shoeID, author: author, title: title, stars: stars, body: body, createdAt: createdAt}, (error, docs)=>{
//     if(error){
//       console.log("error find and remove");
//       callback(error, null);
//     } else {
//       console.log("success find and remove ");
//       callback(null, docs);
//     }
//   });
// }

const remove = (id, callback) => {
  Review.findByIdAndRemove({_id: id}, (error, docs)=>{
    if(error){
      console.log("error find and remove");
      callback(error, null);
    } else {
      console.log("success find and remove ");
      callback(null, docs);
    }
  });
}
module.exports.remove = remove;
module.exports.update = update;
module.exports.save = save;
module.exports.Review = Review;
module.exports.retrieveShoeReviews = retrieveShoeReviews;
module.exports.retrieveAllReviews = retrieveAllReviews;
