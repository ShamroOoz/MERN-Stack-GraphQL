import { gql } from "apollo-server-express";

export default gql`
  type User {
    _: String
  }
  type Query {
    _: String
  }
  type Mutation {
    _: String
  }
`;
