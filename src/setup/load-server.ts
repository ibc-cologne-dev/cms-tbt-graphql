import * as express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { createServer } from "http";
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { NODE_ENV, PORT } from '../config/env';
import { typeDefs } from '../schemas/tbt';
import { resolvers } from '../resolvers'

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export const loadServer = async () => {
  const app = express();
  const httpServer = createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
  });
  await server.start();

  server.applyMiddleware({ app });

  httpServer.listen({ port: PORT}, () => {
    console.info(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath} [${NODE_ENV}]`);
  });

  return server;
}
