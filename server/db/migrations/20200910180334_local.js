const {
  GAMES_TABLE,
  PLAYERS_TABLE,
  PLAYS_TABLE,
  EVENTS_TABLE
} = require("../constants");

const createPlayersTable = (knex) => {
  return knex.schema.createTable(PLAYERS_TABLE, (table) => {
    table.uuid('id')
      .primary();
    table.string('name');
  })
};

const createGamesTable = (knex) => {
  return knex.schema.createTable(GAMES_TABLE, (table) => {
    table.uuid('id')
      .primary();
    table.string('name');
  })
};

const createEventsTable = (knex) => {
  return knex.schema.createTable(EVENTS_TABLE, (table) => {
    table.uuid('id')
      .primary();
    table.uuid('game_id')
      .references(`${GAMES_TABLE}.id`);
    table.dateTime('event_time')
      .defaultTo(knex.fn.now());
  })
};

const createPlaysTable = (knex) => {
  return knex.schema.createTable(PLAYS_TABLE, (table) => {
    table.uuid('id')
      .primary();
    table.uuid('event_id')
      .references(`${EVENTS_TABLE}.id`);
    table.uuid('player_id')
      .references(`${PLAYERS_TABLE}.id`);
  })
};

async function up(knex) {
  await createPlayersTable(knex);
  await createGamesTable(knex);
  await createEventsTable(knex);
  await createPlaysTable(knex);
}

async function down(knex) {
  await knex.schema.dropTable(PLAYS_TABLE);
  await knex.schema.dropTable(EVENTS_TABLE);
  await knex.schema.dropTable(PLAYERS_TABLE);
  await knex.schema.dropTable(GAMES_TABLE);
}


module.exports = {
  up,
  down
};