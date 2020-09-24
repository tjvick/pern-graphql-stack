const {Repository} = require("../db/repository/repository");
const knexConfig = require('../db/knexfile');
const Knex = require('knex');
const path = require('path');
const dataFixtures = require("../db/fixtures/testing");

const dbDir = path.join(__dirname, '../db');

let knexClient;

let subject;

describe('Repository', () => {
  beforeAll(async () => {
    knexClient = Knex(knexConfig.testing);
    await initializeTestDatabase(knexClient);
  });

  beforeEach(() => {
    subject = new Repository(knexClient);
  });

  describe('getGames', () => {
    it('Returns all results from games table', async () => {
      const games = await subject.getGames();

      expect(games).toEqual(dataFixtures.games);
    })
  });

  describe('getPlayers', () => {
    it('Returns all players from players table in alphabetical order', async() => {
      const players = await subject.getPlayers();

      const actualPlayerOrder = players.map(({name}) => name);
      const expectedPlayerOrder = dataFixtures.players.map(({name}) => name).sort();

      expect(players).toHaveLength(dataFixtures.players.length);
      expect(actualPlayerOrder).toEqual(expectedPlayerOrder);
    })
  });

  // getEvents
  // getPlays
  // getPlayerById
  describe('getPlayerById', () => {
    it('Returns the player specified by the given ID', async () => {
      const playerOfInterest = dataFixtures.players[0];
      const player = await subject.getPlayerById(playerOfInterest.id);

      expect(player).toEqual(playerOfInterest)
    })
  });

  // getGameById

  describe('getPlayersForAnEventByEventID', () => {
    it('Returns a list of players for a given event', async () => {
      const eventId = dataFixtures.events[0].id;
      const playersForEvent = await subject.getPlayersForAnEventByEventID(eventId);

      const expectedPlayers = dataFixtures.players.slice(0, 3);
      expect(playersForEvent).toEqual(expectedPlayers);
    })
  });

  describe('getEventsForAPlayerByPlayerID', () => {
    it('Returns a list of events for a given player', async () => {
      const playerId = dataFixtures.players[0].id;
      const eventsForPlayer = await subject.getEventsForAPlayerByPlayerID(playerId);

      const expectedEvents = dataFixtures.events.slice(0, 1);
      expect(eventsForPlayer).toEqual(expectedEvents);
    })
  });

  describe('createPlayer', () => {
    it('Adds a player to the database', async () => {
      await subject.createPlayer("Ralph");

      const players = await subject.getPlayers();

      expect(players).toHaveLength(dataFixtures.players.length + 1);
      expect(players.map(({name}) => name)).toContain("Ralph");
    });
  });

  describe('deletePlayerByID', () => {
    it('Removes a player specified by ID from the database', async () => {
      const playersInitial = await subject.getPlayers();

      const tempPlayerName = "Temp";
      await subject.createPlayer(tempPlayerName);

      const playersAfterAdd = await subject.getPlayers();
      const tempPlayerAfterAdd = playersAfterAdd.find(({name}) => name === tempPlayerName);

      await subject.deletePlayerByID(tempPlayerAfterAdd.id);

      const playersAfterDelete = await subject.getPlayers();
      const tempPlayerAfterDelete = playersAfterDelete.find(({name}) => name === tempPlayerName);

      expect(playersAfterDelete).toEqual(playersInitial);
      expect(playersAfterDelete.length).toBe(playersAfterAdd.length - 1);
      expect(tempPlayerAfterDelete).not.toBeDefined();
    })
  });

  afterAll(async () => {
    await knexClient.migrate.down({
      directory: path.join(dbDir, 'migrations')
    });

    knexClient.destroy();
  })
});


async function initializeTestDatabase(knexClient) {
  await knexClient.migrate.latest({
    directory: path.join(dbDir, 'migrations')
  });

  await knexClient.seed.run({
    directory: path.join(dbDir, 'seeds'),
    specific: 'testing.js'
  });
}