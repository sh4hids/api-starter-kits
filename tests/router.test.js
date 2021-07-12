import request from 'supertest';

import server from '../src/index';

afterEach((done) => {
  server.close();
  done();
});

describe('router', () => {
  describe('/ping', () => {
    it('should respond pong', async () => {
      const response = await request(server).get('/ping');
      expect(response.status).toBe(200);
      expect(response.type).toEqual('application/json');
      expect(response.body.data).toEqual('pong');
    });
  });

  describe('/not-found', () => {
    it('responds with json', async () => {
      const response = await request(server).get('/not-found');
      expect(response.status).toBe(404);
      expect(response.type).toEqual('application/json');
      expect(response.body.error).toEqual('Not Found');
      expect(response.body.message).toEqual('Not Found');
    });
  });

  describe('/todos', () => {
    it('responds with json', async () => {
      const response = await request(server).get('/todos');
      expect(response.status).toBe(200);
      expect(response.type).toEqual('application/json');
      expect(response.body.data).toEqual([]);
    });
  });
});
