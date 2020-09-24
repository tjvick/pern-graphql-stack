const {v4: uuid} = require('uuid');

const games = [
  {id: uuid(), name: "Monopoly"},
  {id: uuid(), name: "Trouble"},
  {id: uuid(), name: "Twin Tin Bots"},
  {id: uuid(), name: "Wizard"},
];

const players = [
  {id: uuid(), name: "Tyler"},
  {id: uuid(), name: "Alice"},
  {id: uuid(), name: "Bill"},
  {id: uuid(), name: "Claire"},
];

const events = [
  {id: uuid(), game_id: games[0].id, event_time: Date.now()}
];

const plays = [
  {id: uuid(), player_id: players[0].id, event_id: events[0].id},
  {id: uuid(), player_id: players[1].id, event_id: events[0].id},
  {id: uuid(), player_id: players[2].id, event_id: events[0].id}
];

module.exports = {
  games,
  players,
  events,
  plays
};