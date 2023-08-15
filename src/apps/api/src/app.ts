import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import express from 'express';
import { useServer } from 'graphql-ws/lib/use/ws';
import { createServer } from 'http';
import mongoose from 'mongoose';
import { WebSocketServer } from 'ws';
import { makeExecutableSchema } from '@graphql-tools/schema';

import { resolvers } from './graphql/resolvers';
import { typeDefs } from './graphql/type_defs';
import { app as restApi } from './rest/index';

const PORT = 8000;
const MONGO_URI = 'mongodb://localhost:27017/wordmond';

async function start() {
  const app = express();
  app.use(cors());
  
	app.use('/',restApi);
    
  const schema = makeExecutableSchema({typeDefs, resolvers});
  const apolloServer = new ApolloServer({schema});
  await apolloServer.start();
  
  apolloServer.applyMiddleware({ app, path:'/graphql', cors: true });
  
  await mongoose.connect(MONGO_URI);
  
  const server = createServer(app);  
  server.listen({ port: PORT }, () => {
    console.log(`http://localhost:${PORT}`);
    console.log(`Server is ready at http://localhost:${PORT}${ apolloServer.graphqlPath }`);
  });
  
  const wsServer = new WebSocketServer({
    server: server,
    path:'/graphql',
  }); 

  useServer({schema}, wsServer);
};

start();
