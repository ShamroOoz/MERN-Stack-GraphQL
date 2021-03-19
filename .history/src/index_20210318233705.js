import { ApolloServer } from "apollo-server-express";
import express from "express";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";

const PORT = process.env.PORT || 4000;
const IN_PROD = process.env.NODE_ENV === "PRODUCTION";
const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
app.disable("x-powered-by");

server.applyMiddleware({ app });

app.listen(PORT, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
