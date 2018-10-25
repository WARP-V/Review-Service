var seedFunction = require('./newSeed.js');
var dbMethods = require('./Review.js');

test('creates array of reviews', () => {
  var dummyReviews = seedFunction.createDummyReviews();
  var dummyReviewKeys = Object.keys(dummyReviews[0]);
  console.log('dummyReviewKeys' ,dummyReviewKeys);
  var requiredProperties = ['shoeID', 'author', 'title', 'stars', 'body', 'createdAt'];

  expect(Array.isArray(dummyReviews)).toBeTruthy();
  expect(typeof dummyReviews[0]).toEqual('object');
  expect(requiredProperties.every((property) => {
    return dummyReviewKeys.includes(property);
  })).toEqual(true);
});