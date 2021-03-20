import { gql } from "apollo-server-express";

export default gql`
  directive @auth on FIELD_DEFINITION
  directive @guest on FIELD_DEFINITION
  directive @date(format: String) on FIELD_DEFINITION
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
