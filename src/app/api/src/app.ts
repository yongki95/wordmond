import express from "express";
import { ApolloServer } from "apollo-server-express";
import mongoose from "mongoose";

import { app as restApi } from './rest/index';
import { type_defs as typeDefs } from "./graphql/type_defs";
import { resolvers } from "./graphql/resolvers";

const port = 3000;

//mongo URI
const MONGO_URI = "mongodb://localhost:27017/wordmond"


async function start() {
    const app = express();

    app.use('/',restApi);

    const apolloServer = new ApolloServer({ typeDefs, resolvers});
    await apolloServer.start();
    await mongoose.connect(MONGO_URI);

    apolloServer.applyMiddleware({app, path: '/graphql'});


    app.listen({ port }, () => {
        console.log(`http://localhost:${port}`);
        console.log(`Server is ready at http://localhost:${port}${apolloServer.graphqlPath}`);
    })

}

start();
