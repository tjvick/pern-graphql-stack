const dateResolver = require('./dateResolver');
const {v4: uuid} = require("uuid");
const {
  GAMES_TABLE,
  PLAYERS_TABLE,
  EVENTS_TABLE,
  PLAYS_TABLE
} = require("../../db/constants");

const createPlayer = () => {

};

const mainResolver = (knex) => {
  return {
    Event: {
      game: ({game_id}) => (
        knex(GAMES_TABLE)
          .where('id', game_id)
          .first()
      ),
      players: ({id}) => {
        return knex(PLAYS_TABLE)
          .where('event_id', id)
          .join(PLAYERS_TABLE, `${PLAYS_TABLE}.player_id`, `${PLAYERS_TABLE}.id`)
          .select(`${PLAYERS_TABLE}.*`)
      }
    },
    Play: {
      player: ({player_id}) => {
        return knex(PLAYERS_TABLE)
          .where('id', player_id)
          .first();
      }
    },
    Query: {
      games: () => knex(GAMES_TABLE),
      players: () => knex(PLAYERS_TABLE).orderBy('name'),
      events: () => knex(EVENTS_TABLE),
      plays: () => knex(PLAYS_TABLE)
    },
    Mutation: {
      createPlayer: (obj, {name}) => {
        return knex(PLAYERS_TABLE)
          .insert({id: uuid(), name: name}, ['id', 'name']);
      }
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