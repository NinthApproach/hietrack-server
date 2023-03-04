import { FastifyInstance } from 'fastify';
import request from 'supertest';
import { createApp } from './app';

describe('app (fastify)', () => {
  let app: FastifyInstance;

  beforeEach(async () => {
    app = createApp();
    await app.ready();
  });

  afterEach(async () => {
    await app.close();
  });

  it('should spin up an instance of Fastify with a Hello, World route', async () => {
    const response = await request(app.server).get('/');

    expect(response.status).toEqual(200);
    expect(response.text).toEqual('Hello, World!');
  });
});
