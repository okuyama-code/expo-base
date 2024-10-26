import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { addMocksToSchema } from '@graphql-tools/mock';
import { makeExecutableSchema } from '@graphql-tools/schema';

const typeDefs = `#graphql
  type User {
    id: ID!
    name: String!
    age: Int
    email: String
    posts: [Post!]
  }

  type Post {
    id: ID!
    title: String!
    content: String
    createdAt: String
  }

  type Query {
    hello: String
    resolved: String
    user(id: ID!): User
    users: [User!]!
    posts: [Post!]!
  }
`;

const resolvers = {
  Query: {
    resolved: () => 'Resolved',
    user: (_: any, { id }: any) => {
      return { id, name: `User ${id}` };
    },
  },
};

const mocks = {
  Int: () => Math.floor(Math.random() * 70) + 18,
  String: () => 'Hello',
  User: () => ({
    name: () => `User ${Math.random().toString(36).substring(7)}`,
    email: () => `user${Math.random().toString(36).substring(7)}@example.com`,
  }),
  Post: () => ({
    title: () => `Post ${Math.random().toString(36).substring(7)}`,
    content: () => `Content ${Math.random().toString(36).substring(7)}`,
    createdAt: () => new Date().toISOString(),
  }),
};

const startServer = async () => {
  const server = new ApolloServer({
    schema: addMocksToSchema({
      schema: makeExecutableSchema({ typeDefs, resolvers }),
      mocks,
    }),
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
  });

  console.log(`🚀 Server listening at: ${url}`);
  return { server };
};

startServer().catch(console.error);

export default startServer;