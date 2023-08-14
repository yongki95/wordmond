import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { createServer } from 'http';
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';
import { makeExecutableSchema } from '@graphql-tools/schema'

import { resolvers } from './graphql/resolvers';
import { typeDefs } from './graphql/type_defs';
import { app as restApi } from './rest/index';

const PORT = 8000;
const MONGO_URI = 'mongodb://localhost:27017/wordmond'

async function start() {
  const app = express();

  app.use(cors());
	app.use('/',restApi);
  
  const server = createServer(app);

  const schema = makeExecutableSchema({typeDefs, resolvers})
  const apolloServer = new ApolloServer({schema});
  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path:'/graphql', cors: true });
  
  await mongoose.connect(MONGO_URI);

  const wsServer = new WebSocketServer({
    server: server,
    path:'/graphql',
  }); 

  server.listen({ port: PORT }, () => {
    console.log(`http://localhost:${PORT}`);
    console.log(`Server is ready at http://localhost:${PORT}${ apolloServer.graphqlPath }`);
  });

  useServer({schema}, wsServer);
};



start();
