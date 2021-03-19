import mongoose from "mongoose";
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
      res.send({ err: `Database Connectio lost....` });
    });
};