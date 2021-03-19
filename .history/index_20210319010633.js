import { ApolloServer } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";

import typeDefs from "./src/typeDefs";
import resolvers from "./src/resolvers";
import { dbconnection } from "./src/helper/db";
require("dotenv").config();

//db
const url = `${process.env.DB_URL}`;

const connectionParams = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

const PORT = process.env.PORT || 4000;
const IN_PROD = process.env.NODE_ENV === "production";

async () => {
  try {
    await mongoose.connect(url, connectionParams);
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      playground: !IN_PROD,
    });

    const app = express();
    server.applyMiddleware({ app });

    app.disable("x-powered-by");

    app.listen(PORT, () =>
      console.log(
        `🚀 Server ready at http://localhost:4000${server.graphqlPath}`
      )
    );
  } catch (error) {
    console.log(error);
  }
};
