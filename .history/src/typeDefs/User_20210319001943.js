import { gql } from "apollo-server-express";

export default gql`
  type Book {
    title: String
    author: String
  }
  extend type Query {
    books: [Book]
    user: [Book]
  }
`;
