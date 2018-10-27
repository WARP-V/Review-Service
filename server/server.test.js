const request = require('supertest');
const api = require('./api');

test('should respond to the initial get request', () => {
  request(api).get('/').then((response) => {
    expect(response.statusCode).toBe(200);
    done();
  });
});
