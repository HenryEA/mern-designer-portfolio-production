const request = require('supertest');
const server = require('../server');

describe('Auth routes', () => {
  describe('POST /api/auth/register', () => {
    it('should register a new user and return 201 + user data', async () => {
      const res = await request(server).post('/api/auth/register').send({
        name: 'Test User',
        email: 'testuser@example.com',
        password: 'Password123!',
      });
      expect(res.statusCode).toBe(201);
      expect(res.body).toHaveProperty('id');
      expect(res.body).toHaveProperty('email', 'testuser@example.com');
    });
  });

  describe('POST /api/auth/login', () => {
    it('should login existing user and return token (or user data)', async () => {
      const res = await request(server).post('/api/auth/login').send({
        email: 'testuser@example.com',
        password: 'Password123!',
      });
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('email', 'testuser@example.com');
    });
  });

  describe('PATCH /api/auth/updateUser', () => {
    it('should update user details when authenticated', async () => {
      const loginRes = await request(server)
        .post('/api/auth/login')
        .send({ email: 'testuser@example.com', password: 'Password123!' });

      const token = loginRes.body.token;
      expect(token).toBeDefined();

      const res = await request(server)
        .patch('/api/auth/updateUser')
        .set('Authorization', `Bearer ${loginRes.body.token}`)
        .send({ name: 'Updated Name' });

      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('name', 'Updated Name');
    });
  });
});
