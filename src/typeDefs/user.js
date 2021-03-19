import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    user(id: ID!): user
    users: [user!]!
  }
  extend type Mutation {
    signUp(
      email: String!
      username: String
      name: String!
      password: String!
    ): user
  }
  type user {
    _id: ID!
    username: String!
    name: String!
    email: String!
    createdAt: String!
  }
`;
