const dateResolver = require('./dateResolver');


const mainResolver = (repository) => {
  return {
    Event: {
      game: ({game_id}) => repository.getGameById(game_id),
      players: ({id}) => repository.getPlayersForAnEventByEventID(id)
    },
    Player: {
      events: ({id}) => repository.getEventsForAPlayerByPlayerID(id)
    },
    Query: {
      games: () => repository.getGames(),
      players: () => repository.getPlayers(),
      events: () => repository.getEvents(),
      plays: () => repository.getPlays(),
      player: (obj, {id}) => repository.getPlayerById(id),
    },
    Mutation: {
      createPlayer: (obj, {name}) => repository.createPlayer(name),
      deletePlayer: (obj, {id}) => repository.deletePlayerByID(id)
    }
  }
};

const resolvers = (repository) => {
  return [
    dateResolver,
    mainResolver(repository),
  ]
};

module.exports = resolvers;