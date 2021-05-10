import Fastify, { FastifyInstance } from 'fastify';

import { routes } from './routes';

const server: FastifyInstance = Fastify({ logger: true });

server.setErrorHandler((error, request, reply) => {
  console.log(error);

  reply
    .status(error.statusCode || error.validation ? 400 : 500)
    .send({ error: error.message });
});

server.register(routes);

export { server };
