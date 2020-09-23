const {
  GAMES_TABLE,
  PLAYERS_TABLE,
  EVENTS_TABLE,
  PLAYS_TABLE
} = require("../constants");
const {v4: uuid} = require("uuid");

class Repository {
  constructor(knexClient) {
    this.knex = knexClient;
  }

  getGames() {
    return this.knex(GAMES_TABLE);
  }

  getPlayers() {
    return this.knex(PLAYERS_TABLE)
      .orderBy('name')
  }

  getEvents() {
    return this.knex(EVENTS_TABLE);
  }

  getPlays() {
    return this.knex(PLAYS_TABLE);
  }

  getPlayerById(player_id) {
    return this.knex(PLAYERS_TABLE)
      .where('id', player_id)
      .first();
  }

  getGameById(game_id) {
    return this.knex(GAMES_TABLE)
      .where('id', game_id)
      .first();
  }

  getPlayersForAnEventByEventID(event_id) {
    return this.knex(PLAYS_TABLE)
      .where('event_id', event_id)
      .join(PLAYERS_TABLE, `${PLAYS_TABLE}.player_id`, `${PLAYERS_TABLE}.id`)
      .select(`${PLAYERS_TABLE}.*`)
  }

  getEventsForAPlayerByPlayerID(player_id) {
    return this.knex(PLAYS_TABLE)
      .where('player_id', player_id)
      .join(EVENTS_TABLE, `${PLAYS_TABLE}.event_id`, `${EVENTS_TABLE}.id`)
      .select(`${EVENTS_TABLE}.*`)
  }

  createPlayer(name) {
    return this.knex(PLAYERS_TABLE)
      .insert({id: uuid(), name: name}, ['id', 'name']);
  }

  async deletePlayerByID(player_id) {
    return this.knex(PLAYERS_TABLE)
      .where('id', player_id)
      .delete();
  }
}

module.exports = {
  Repository
};