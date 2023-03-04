import Fastify, { FastifyInstance } from 'fastify';

export const createApp = (): FastifyInstance => {
  const app = Fastify({ logger: true });

  app.get('/', async () => {
    return 'Hello, World!';
  });

  return app;
};

export const listen = (app: FastifyInstance, port: number) => {
  const start = async () => {
    try {
      await app.listen({ port: port });
    } catch (err) {
      app.log.error(err);
      process.exit(1);
    }
  };
  start();
};
