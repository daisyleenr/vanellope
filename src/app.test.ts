import request from 'supertest';
import app from './app';

describe('app', () => {
  describe('Users API', () => {
    it('GET /users', async () => {
      await request(app)
        .get('/users')
        .expect('Content-Type', /json/)
        .expect(200);
    });
  });

  describe('Moods API', () => {
    it('GET /moods', async () => {
      await request(app)
        .get('/moods')
        .expect('Content-Type', /json/)
        .expect(200);
    });
  });
});
