import { ApolloServer } from "apollo-server-express";
import typeDefs from "./src/typeDefs";
import resolvers from "./src/resolvers";

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
