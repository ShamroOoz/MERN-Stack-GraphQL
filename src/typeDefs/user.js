import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    me: user
    user(id: ID!): user
    users: [user!]!
  }
  extend type Mutation {
    Signup(
      email: String!
      username: String
      name: String!
      password: String!
      repeat_password: String!
    ): user
    Signin(email: String!, password: String!): user
    signout: Boolean
  }
  type user {
    _id: ID!
    username: String!
    name: String!
    email: String!
    createdAt: String!
    updatedAt: String!
  }
`;
