import { gql } from "apollo-server-express";

export default gql`
  type User {
     _id: ID!
     username: String!
     name: String!
     email: String!
     createdAt: String!
  }
  extend type Query {
    
  }
extend type Mutation {
    signUp(email:String!,username:String ,name:String!, password:String! )
  }
`;
