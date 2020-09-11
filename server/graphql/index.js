const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const {makeExecutableSchema} = require('graphql-tools');
const Knex = require('knex');
const knexConfig = require('../db/knexfile');

const knex = Knex(knexConfig.development);

const schema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers(knex)
});

module.exports = {
  schema,
};