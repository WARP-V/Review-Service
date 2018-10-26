var dbMethods = require('./Review.js');

test('should populate database with an array of reviews', () => {

  dbMethods.retrieveAllReviews((error, result) => {
    expect(Array.isArray(result)).toBeTruthy();
    expect(result.length > 0).toBeTruthy();
    expect(typeof result[0]).toEqual('object');
  });
});

test('reviews should have all required properties', () => {

  var requiredProperties = ['shoeID', 'author', 'title', 'stars', 'body', 'createdAt'];

  dbMethods.retrieveAllReviews((error, result) => {
    expect(requiredProperties.every((property) => {
    return Object.keys(result[0]).includes(property);
    })).toEqual(true);
    expect(result.every((review) => {
      return review.stars > 0 && review.stars < 6;
    }));
    expect(result.some((review) => {
      return review.starts === 0;
    }));
    expect(result.some((review) => {
      return review.starts === 5;
    }));
    expect(typeof result[0].createdAt === 'object');
  });

})

