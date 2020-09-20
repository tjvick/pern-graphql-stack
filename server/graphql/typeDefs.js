const gql = require('graphql-tag');

const typeDefs = gql`
    scalar Date
    
    type Game {
        id: ID!
        name: String!
    }

    type Player {
        id: ID!
        name: String!
        events: [Event]
    }
    
    type Event {
        id: ID!
        game_id: ID!
        event_time: Date
        game: Game
        players: [Player] 
    }
    
    type Play {
        id: ID!
        event_id: ID!
        player_id: ID!
    }

    type Query {
        games: [Game]
        players: [Player]
        events: [Event]
        plays: [Play]
        
        player(id: ID): Player
    }
    
    type Mutation {
        createPlayer(name: String): [Player]
    }
`;

module.exports = typeDefs;