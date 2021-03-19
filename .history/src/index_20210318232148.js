import { ApolloServer } from "apollo-server-express";
import express from "express";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

// The `listen` method launches a web server.
app.listen().then({ port: 4000 }, () => {
  console.log(`🚀  Server ready at ${url}`);
});
