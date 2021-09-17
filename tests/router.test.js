import request from 'supertest';

import server from '../src/index';
import db from '../src/models';

beforeAll(async () => {
  await db.sequelize.truncate();
});

afterEach((done) => {
  server.close();
  done();
});

afterAll(async () => {
  await db.sequelize.close();
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
      expect(response.type).toEqual('text/plain');
      expect(response.body).toEqual({});
    });
  });

  describe('/todos', () => {
    it('should fetch all todos', async () => {
      const response = await request(server).get('/todos');
      expect(response.status).toBe(200);
      expect(response.type).toEqual('application/json');
      expect(response.body.data).toEqual([]);
    });

    it('should create a todo', async () => {
      const todo = {
        task: 'Item 1',
        isCompleted: false,
      };
      const response = await request(server).post('/todos').send(todo);
      expect(response.status).toBe(201);
      expect(response.type).toEqual('application/json');
      expect(typeof response.body.data).toBe('object');
      expect(Object.keys(response.body.data).includes('task')).toEqual(true);
      expect(Object.keys(response.body.data).includes('isCompleted')).toEqual(
        true
      );
      expect(Object.keys(response.body.data).includes('createdAt')).toEqual(
        true
      );
      expect(Object.keys(response.body.data).includes('updatedAt')).toEqual(
        true
      );
      expect(response.body.data.task).toEqual(todo.task);
      expect(response.body.data.isCompleted).toEqual(todo.isCompleted);
    });

    it('should fetch all todos', async () => {
      const response = await request(server).get('/todos');
      expect(response.status).toBe(200);
      expect(response.type).toEqual('application/json');
      expect(Array.isArray(response.body.data)).toEqual(true);
      expect(response.body.data.length).toEqual(1);
    });
  });
});
