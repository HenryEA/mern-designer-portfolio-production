// tests/server.test.js
const request = require('supertest');
const app = require('../server');

describe('Server basic routes', () => {
  it('should respond with 200 on GET /', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    // the JSON message
    expect(res.body).toHaveProperty('message');
  });

  it('should return 404 for an unknown route', async () => {
    const res = await request(app).get('/some/nonexistent/route');
    expect(res.statusCode).toBe(404);
  });
});
