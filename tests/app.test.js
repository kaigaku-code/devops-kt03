const request = require('supertest');
const { createApp } = require('../src/app');

describe('KT3 App Tests', () => {
  let app;

  beforeAll(() => {
    app = createApp();
  });

  test('GET / должен возвращать статус 200 и текст KT3 App', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('KT3 App');
  });

  test('GET /health должен возвращать статус 200 и JSON { "status": "ok" }', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ status: 'ok' });
  });
});