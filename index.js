import { ApolloServer } from "apollo-server-express";
import express from "express";
import typeDefs from "./src/typeDefs";
import resolvers from "./src/resolvers";
import schemaDirectives from "./src/Directive";
import { dbconnection } from "./src/helper/db";
import connectRedis from "connect-redis";
import session from "express-session";
import Redis from "ioredis";
import { APOLLO_OPTIONS, SESS_OPTIONS, PORT, REDIS_OPTIONS } from "./config";

(async () => {
  try {
    await dbconnection();
    console.log("Connected to database");

    const app = express();

    // session redis store
    const RedisStore = connectRedis(session);

    const store = new RedisStore({
      client: new Redis(REDIS_OPTIONS),
    });

    //session
    const sessionHandler = session({
      store,
      ...SESS_OPTIONS,
    });

    app.use(sessionHandler);

    app.disable("x-powered-by");

    const server = new ApolloServer({
      ...APOLLO_OPTIONS,
      typeDefs,
      resolvers,
      schemaDirectives,
      context: ({ req, res }) => ({ req, res }),
    });

    server.applyMiddleware({ app });

    app.listen(PORT, () =>
      console.log(`🚀 Server ready at http://localhost:${PORT}`)
    );
  } catch (error) {
    console.error(error);
    throw new ApolloError(error);
  }
})();
