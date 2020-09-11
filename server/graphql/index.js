const {makeExecutableSchema} = require('graphql-tools');
const gql = require('graphql-tag');

const Knex = require('knex');
const knexConfig = require('../db/knexfile');
const {
  GAMES_TABLE,
  PLAYERS_TABLE
} = require("../db/constants");

const knex = Knex(knexConfig.development);

const typeDefs = gql`
  type Game {
      id: ID!
      name: String!
  }
  
  type Player {
      id: ID!
      name: String!
  }
  
  type Query {
      games: [Game]
      players: [Player]
  }
`;

const resolvers = {
  Query: {
    games: async () => knex(GAMES_TABLE),
    players: async () => knex(PLAYERS_TABLE)
  }
};

const schema = makeExecutableSchema({typeDefs, resolvers});

module.exports = {
  schema,
};