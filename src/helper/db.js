import mongoose from "mongoose";
import { DB_URI, DB_OPTIONS } from "../../config";

export const dbconnection = () => {
  return mongoose.connect(DB_URI, DB_OPTIONS).then((response) => response);
};
