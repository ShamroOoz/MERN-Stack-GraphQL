import { gql } from "apollo-server-express";

export default gql`
  type User {
     _id: ID!
     username: String
username: String
  }
  extend type Query {
   
  }
extend type Mutation {

  }
`;
