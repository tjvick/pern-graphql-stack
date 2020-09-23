const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const {makeExecutableSchema} = require('graphql-tools');

function buildSchema(repository) {
  return makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers(repository)
  });
}

module.exports = {
  buildSchema,
};