const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
  type Query {
    books: [Book]
  }
`;

const resolvers = {
  Query: {
    books: () => books,
  },
};

//setting up Port
const Port = process.env.PORT || 4000;

app.listen(Port, () =>
  console.log(`🚀 Server ready at http://localhost${Port}`)
);
