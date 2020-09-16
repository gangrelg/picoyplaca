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
        '/api/placa/find/?plate=pbd4155&date=01/01/2020&time=08:08'
      );
      await expect(res.status).toBe(200);
    });
  });

  describe('GET /', () => {
    it('should return 0', async () => {
      const obj = { msg: 0 };
      const res = await request(server).get(
        '/api/placa/find/?plate=pbd4155&date=09/16/2020&time=08:08'
      );
      await expect(res.body).toMatchObject(obj);
    });
  });

  describe('GET /', () => {
    it('should return 1', async () => {
      const obj = { msg: 1 };
      const res = await request(server).get(
        '/api/placa/find/?plate=pbd4155&date=09/16/2020&time=06:00'
      );
      await expect(res.body).toMatchObject(obj);
    });
  });

  describe('GET /', () => {
    it('should return 500 server error', async () => {
      const res = await request(server).get(
        '/api/placa/find/?plate=pbd415a&date=09/16/2020&time=06:00'
      );
      await expect(res.status).toBe(500);
    });
  });
});
