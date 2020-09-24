const {events, games, players, plays} = require("../fixtures/testing");
const {
  EVENTS_TABLE,
  GAMES_TABLE,
  PLAYERS_TABLE,
  PLAYS_TABLE,
} = require("../constants");


const seedGamesTable = (knex) => {
  return knex(GAMES_TABLE).insert(games);
};

const seedPlayersTable = (knex) => {
  return knex(PLAYERS_TABLE).insert(players);
};

const seedEventsTable = (knex) => {
  return knex(EVENTS_TABLE).insert(events)
};

const seedPlaysTable = (knex) => {
  return knex(PLAYS_TABLE).insert(plays);
};

async function seed(knex) {
  await knex(PLAYS_TABLE).del();
  await knex(EVENTS_TABLE).del();
  await knex(GAMES_TABLE).del();
  await knex(PLAYERS_TABLE).del();

  await seedGamesTable(knex);
  await seedPlayersTable(knex);
  await seedEventsTable(knex);
  await seedPlaysTable(knex);
}

module.exports = {
  seed,
};
