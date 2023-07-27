import express from "express";
import { ApolloServer } from "apollo-server-express";
import mongoose from "mongoose";

import { resolvers, typeDefs } from "./graphql";
const app = express();
const port = 3000;

//mongo URI
const MONGO_URI = "mongodb://127.0.0.1:27017/"


//rest API ==> create new folder and put it there later**
app.get('/', (_, res) => {
    res.send({
        massage: "ok",
        uptime: process.uptime(),
    });
});

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
});

//create new folder and .ts and move to there
const initDB = async () => {
    mongoose
    .connect(MONGO_URI)
    .then(() => {
        console.log(`DB connected`);
    })
    .catch(err => {
        console.log(err.message);
    });
};

const start = async () => {
    await apolloServer.start();
    await initDB();

    apolloServer.applyMiddleware({app, path: "/graphql"});

    app.listen(port, () => {
        console.log(`http://localhost:${port}`);
        console.log(`typescript with express http://localhost:${port}${apolloServer.graphqlPath}/`);
    });
};

start();


