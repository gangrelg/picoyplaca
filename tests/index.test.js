const request = require('supertest');
let server;

describe('/api/placa', () => {
  beforeEach(() => {
    server = require('../server');
  });

  afterAll((done) => {
    server = require('../server');
    server.close();
    done();
  });

  describe('GET /', () => {
    it('should return a 200', async () => {
      const res = await request(server).get(
        '/api/placa/find/?plate=pbd4180&date=01/01/2020&time=08:08'
      );
      await expect(res.status).toBe(200);
    });
  });
});
