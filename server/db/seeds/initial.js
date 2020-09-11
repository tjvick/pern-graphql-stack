const {v4: uuid} = require("uuid");
const {
  GAMES_TABLE,
  PLAYERS_TABLE,
  PLAYS_TABLE,
  EVENTS_TABLE
} = require("../constants");

const seedGamesTable = (knex) => {
    return knex(GAMES_TABLE).insert([
      {id: uuid(), name: "Monopoly"},
      {id: uuid(), name: "Trouble"},
      {id: uuid(), name: "Twin Tin Bots"}
    ]);
};

const seedPlayersTable = (knex) => {
  return knex(PLAYERS_TABLE).insert([
    {id: uuid(), name: "Alice"},
    {id: uuid(), name: "Bill"},
    {id: uuid(), name: "Claire"},
    {id: uuid(), name: "Tyler"}
  ]);
};


const eventId = uuid();
const seedEventsTable = (knex) => {
  return knex(EVENTS_TABLE).insert([
    {
      id: eventId,
      game_id: knex(GAMES_TABLE).where({name: 'Monopoly'}).select('id')
    }
  ])
};

const seedPlaysTable = (knex) => {
  return knex(PLAYS_TABLE).insert([
    {
      id: uuid(),
      player_id: knex(PLAYERS_TABLE).where({name: 'Alice'}).select('id'),
      event_id: eventId,
    },
    {
      id: uuid(),
      player_id: knex(PLAYERS_TABLE).where({name: 'Bill'}).select('id'),
      event_id: eventId,
    },
    {
      id: uuid(),
      player_id: knex(PLAYERS_TABLE).where({name: 'Tyler'}).select('id'),
      event_id: eventId,
    }
  ]);
};

async function seed(knex) {
  await knex(EVENTS_TABLE).del();
  await knex(PLAYS_TABLE).del();
  await knex(GAMES_TABLE).del();
  await knex(PLAYERS_TABLE).del();

  const games = await seedGamesTable(knex);
  const players = await seedPlayersTable(knex);
  const events = await seedEventsTable(knex);
  const plays = await seedPlaysTable(knex);
  console.log(games);
  console.log(players);
  console.log(events);
  console.log(plays)
}

module.exports = {
  seed,
}
