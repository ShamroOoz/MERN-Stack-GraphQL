import { ApolloServer } from "apollo-server-express";
import express from "express";
import typeDefs from "./src/typeDefs";
import resolvers from "./src/resolvers";
import { dbconnection } from "./src/helper/db";

// env
const PORT = process.env.PORT || 4000;
const IN_PROD = process.env.NODE_ENV === "production";

//db connection
dbconnection();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: !IN_PROD,
});

const app = express();
server.applyMiddleware({ app });

app.disable("x-powered-by");

app.listen(PORT, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
