import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import mongoose from 'mongoose';

import { resolvers } from './graphql/resolvers';
import { typeDefs } from './graphql/type_defs';
import { app as restApi } from './rest/index';

const PORT = 8000;
const MONGO_URI = 'mongodb://localhost:27017/wordmond'

async function start() {
  const app = express();
	
	app.use('/',restApi);

  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: '/graphql' });

  await mongoose.connect(MONGO_URI);

  app.listen({ port: PORT }, () => {
    console.log(`http://localhost:${PORT}`);
    console.log(`Server is ready at http://localhost:${PORT}${ apolloServer.graphqlPath }`);
  });
};

start();
