import User from "../Model/User";
import { SingupSchema, SignInSchema } from "../Schema/SingupSchema";
import mongoose from "mongoose";
import { JOI_OPTION } from "../../config";
import { attemptSignIn, signOut } from "../helper/auth";
export default {
  Query: {
    me: async (root, args, { req, res }, info) => {
      try {
        return await User.findById(req.session.userId);
      } catch (error) {
        throw new Error(error);
      }
    },
    users: async (root, args, { req, res }, info) => {
      try {
        return await User.find();
      } catch (error) {
        throw new Error(error);
      }
    },
    user: async (root, { id }, { req, res }, info) => {
      try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
          throw new UserInputError("User id NOT EXIST", id);
        }
        return await User.findById(id);
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  Mutation: {
    Signin: async (root, args, { req, res }, info) => {
      try {
        // const { userId } = req.session;
        // if (userId) {
        //   return await User.findById(userId);
        // }
        await SignInSchema.validateAsync(args, { ...JOI_OPTION });
        const user = await attemptSignIn(args);
        req.session.userId = user._id;
        return user;
      } catch (error) {
        throw new Error(error);
      }
    },
    signout: async (root, args, { req, res }, info) => {
      try {
        return await signOut(req, res);
      } catch (error) {
        throw new Error(error);
      }
    },
    Signup: async (root, args, { req, res }, info) => {
      try {
        await SingupSchema.validateAsync(args, { ...JOI_OPTION });
        const addUser = new User({
          name: args.name,
          username: args.username,
          email: args.email,
          password: args.password,
        });
        const user = await addUser.save();
        req.session.userId = user._id;
        return user;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
