const dateResolver = require('./dateResolver');

const {
  GAMES_TABLE,
  PLAYERS_TABLE,
  EVENTS_TABLE,
  PLAYS_TABLE
} = require("../../db/constants");

const mainResolver = (knex) => {
  return {
    Query: {
      games: async () => knex(GAMES_TABLE),
      players: async () => knex(PLAYERS_TABLE),
      events: async () => knex(EVENTS_TABLE),
      plays: async () => knex(PLAYS_TABLE)
    }
  }
};

const resolvers = (knex) => {
  return [
    dateResolver,
    mainResolver(knex),
  ]
};

module.exports = resolvers;