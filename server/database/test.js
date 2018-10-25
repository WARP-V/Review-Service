var seedFunction = require('./newSeed.js');

test('creates array of reviews', () => {
  expect(Array.isArray(seedFunction.createDummyReviews())).toBeTruthy();
});