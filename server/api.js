const express = require('express');
const parseBody = require('body-parser');
const path = require('path');
const Review = require('./database/Review.js');

const api = express();

api.use(express.static(path.join(__dirname, '../public/')));
api.use(parseBody.json());
api.use(parseBody.urlencoded({extended: true}));

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


api.post('/reviews', (req, res) => {
  console.log('kkk', req.body);
  Review.save(req.body);
  res.end();
});


api.put('/reviews/:id', function(req, res, next){
  console.log('put', req.body);
  Review.update(req.params.id,req.body.author,
   function(err, info){
    if (err) {
      return res.status(500).json(err);
    } else {
      return res.json(true);
    }
    
  });
});


// api.delete('/reviews/:id', function(req, res, next){
//   console.log('delete', req.body);
//   Review.remove(req.params.id,req.body.shoeID,req.body.author,req.body.title,req.body.stars,req.body.body,req.body.createdAt,
//     function(err,info){
//       if (err) {
//         return res.status(500).json(err);
//       } else {
//         return res.json(true);
//       }
//     });
// });

api.delete('/reviews/:id', function(req, res, next){
 
  Review.remove(req.params.id,
    function(err,info){
      if (err) {
        return res.status(500).json(err);
      } else {
        return res.json(true);
      }
    });
});


module.exports = api;
