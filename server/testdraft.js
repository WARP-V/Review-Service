// const request = require('supertest');
// const api = require('./api');

// test('should respond to the initial get request', (done) => {
//   request(api).get('/').then((response) => {
//     expect(response.statusCode).toBe(200);
//     done();
//   });
// });

// test('should respond to the shoes\' get request', (done) => {
//   request(api).get('/554724-109/reviews').then((response) => {
//     expect(response.statusCode)
//       .toBe(200);
//     expect(Array.isArray(response.body))
//       .toBe(true);
//     expect(response.body.length > 0)
//       .toBeTruthy();
//     done();
//   });
// });

// test('should respond respond with the reviews in the required data shape', (done) => {
//   const requiredProperties = ['shoeID', 'author', 'title', 'stars', 'body', 'createdAt'];
//   request(api).get('/554724-109/reviews').then((response) => {
//     expect(typeof response.body[0])
//       .toBe('object');
//     expect(requiredProperties.every(property =>
//        Object.keys(response.body[0]).includes(property)))
//       .toBe(true);
//     expect(response.body.every(review => review.stars >= 0 && review.stars < 6))
//       .toBeTruthy();
//     expect(typeof response.body[0].createdAt)
//       .toBe('string');
//     done();
//   });
// });
