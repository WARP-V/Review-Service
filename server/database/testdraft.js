// const dbMethods = require('./Review.js');
// const newSeed = require('./newSeed.js');

// test('jest is working', () => {
//   expect(1 + 2).toEqual(3);
// });

// test('createDummyReviews should create an array of reviews', () => {
//   const dummyReviews = newSeed.createDummyReviews();
//   expect(Array.isArray(dummyReviews)).toBeTruthy();
// });

// test('should populate database with an array of reviews', () => {
//   dbMethods.retrieveAllReviews((error, result) => {
//     expect(Array.isArray(result)).toBeFalsy();
//     expect(result.length > 0).toBeTruthy();
//     expect(typeof result[0]).toEqual('object');
//   });
// });

// test('reviews should have all required properties', () => {
//   // const requiredProperties = ['shoeID', 'author', 'title', 'stars', 'body', 'createdAt'];

//   dbMethods.retrieveAllReviews((error, result) => {
//     // expect(requiredProperties.every(property => Object.keys(result[0]).includes(property)))
//     //   .toBe(true);
//     expect(result.every(review => review.stars > 5 && review.stars < 6))
//       .toBeFalsy();
//     expect(result.some(review => review.starts === 0))
//       .toBeTruthy();
//     expect(result.some(review => review.starts === 5))
//       .toBeTruthy();
//     expect(typeof result[0].createdAt === 'object')
//       .toBeTruthy();
//   });
// });
