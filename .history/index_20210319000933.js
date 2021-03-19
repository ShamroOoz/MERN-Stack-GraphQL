import { ApolloServer } from "apollo-server-express";
import express from "express";
import typeDefs from "./src/typeDefs";
import resolvers from "./src/resolvers";

const PORT = process.env.PORT || 4000;
const IN_PROD = process.env.NODE_ENV === "production";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: !IN_PROD,
});

const app = express();
server.applyMiddleware({ app });
app.disable("");

app.listen(PORT, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
