import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { createRequire } from "module";

const require = createRequire(import.meta.url);

const typeDefs = require('./graphql/typeDefs.cjs');
const resolvers = require('./graphql/resolvers.cjs');

const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);