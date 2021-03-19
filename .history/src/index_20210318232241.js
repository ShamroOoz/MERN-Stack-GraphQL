import { ApolloServer } from "apollo-server-express";
import express from "express";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

const PORT = process.env.PORT || 4000;

// The `listen` method launches a web server.
app.listen().then(PORT, () => {
  console.log(`🚀  Server ready at ${url}`);
});
