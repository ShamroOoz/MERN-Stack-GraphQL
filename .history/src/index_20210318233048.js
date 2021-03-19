import { ApolloServer } from "apollo-server-express";
import express from "express";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
app.disable("X-Powered-By");
server.applyMiddleware({ app });

const PORT = process.env.PORT || 4000;

app.listen(PORT, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
