import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    me: user @auth
    user(id: ID!): user @auth
    users: [user!]! @auth
  }
  extend type Mutation {
    Signup(
      email: String!
      username: String
      name: String!
      password: String!
      repeat_password: String!
    ): user @guest
    Signin(email: String!, password: String!): user @guest
    signout: Boolean @auth
  }
  type user {
    _id: ID!
    username: String!
    name: String!
    email: String!
    createdAt: String! @date(format: "isoDateTime")
    updatedAt: String! @date(format: "isoDateTime")
  }
`;
