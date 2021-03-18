import { ApollServer } from "apollo-server";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";

const server = new ApollServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
