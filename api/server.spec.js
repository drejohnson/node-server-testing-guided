const request = require('supertest');

const server = require('./server.js');

describe('server.js', function() {
  describe('check env var', function() {
    it('should set env to testing', function() {
      expect(process.env.DB_ENV).toBe('testing');
    });
  });
});

describe('GET /', function() {
  it('should return 200 OK', function() {
    // always return async code
    return request(server)
      .get('/')
      .then(res => {
        expect(res.status).toBe(200);
      });
  });

  it('should return JSON', function() {
    // always return async code
    return request(server)
      .get('/')
      .then(res => {
        expect(res.type).toMatch(/json/i);
      });
  });

  it('should return string', function() {
    // always return async code
    return request(server)
      .get('/')
      .then(res => {
        expect(res.body.api).toBe('up');
      });
  });

  // it('should return string', function() {
  //   // always return async code
  //   return request(server)
  //     .get('/')
  //     .then(res => {
  //       expect(res.body.api).toBe('up');
  //     });
  // });
});
