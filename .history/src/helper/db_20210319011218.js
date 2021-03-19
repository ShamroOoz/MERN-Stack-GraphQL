import mongoose from "mongoose";
import { ApolloError } from "apollo-server-errors";
require("dotenv").config();

//db
const url = `${process.env.DB_URL}`;

const connectionParams = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

export const dbconnection = () => {
  mongoose
    .connect(url, connectionParams)
    .then(() => {
      console.log("Connected to database ");
    })
    .catch((err) => {
      console.error(`Error connecting to the database. \n${err}`);
      throw new ApolloError(`Error connecting to the database. \n${err}`);
    });
};
