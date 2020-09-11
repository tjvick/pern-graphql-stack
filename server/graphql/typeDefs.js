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
    }
    
    type Event {
        id: ID!
        game_id: ID!
        event_time: Date
    }
    
    type Play {
        id: ID!
        player_id: ID!
    }

    type Query {
        games: [Game]
        players: [Player]
        events: [Event]
        plays: [Play]
    }
`;

module.exports = typeDefs;