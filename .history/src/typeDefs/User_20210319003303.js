import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    user(id: ID!): User
    users: [User!]!
  }
  extend type Mutation {
    signUp(
      email: String!
      username: String
      name: String!
      password: String!
    ): User
  }
  type User {
    _id: ID!
    username: String!
    name: String!
    email: String!
    createdAt: String!
  }
`;
