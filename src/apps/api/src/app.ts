import { makeExecutableSchema } from '@graphql-tools/schema';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import express from 'express';
import { useServer } from 'graphql-ws/lib/use/ws';
import { createServer } from 'http';
import mongoose from 'mongoose';
import { WebSocketServer } from 'ws';

import { PORT, MONGO_URI } from './constants';
import { resolvers, typeDefs } from './graphql';
import { GraphqlContext } from './graphql/type';
import { UserModel } from './models';
import { app as restApi } from './rest/index';

const start = async () => {
  const app = express();
  app.use(cors());
  
	app.use('/', restApi);
    
  const schema = makeExecutableSchema({ typeDefs, resolvers });
  const apolloServer = new ApolloServer<GraphqlContext>({
    schema,
    context: async ({ req }) => {
      try {
        const token = (req.headers.authorization || '').split(' ')[1];
        const user = await UserModel.findOne({ token });

        return {
          user,
          req,
        };
      } catch (e: any) {
        return {
          user: null,
          req,
        };
      }
    },
  });

  await apolloServer.start();
  
  apolloServer.applyMiddleware({
    app,
    path:'/graphql',
    cors: true,
  });
  
  await mongoose.connect(MONGO_URI);
  
  const server = createServer(app);  
  server.listen({ port: PORT }, () => {
    console.log(`http://localhost:${PORT}`);
    console.log(`Server is ready at http://localhost:${PORT}${apolloServer.graphqlPath}`);
  });
  
  const wsServer = new WebSocketServer({
    server: server,
    path:'/graphql',
  }); 

  useServer({ schema }, wsServer);
};

start();
