import {gql} from "@apollo/client";

export const PLAYERS_QUERY = gql`
    query {
        players {
            id
            name
        }
    }
`;

export const GET_PLAYER_QUERY = gql`
    query GetPlayer($id: ID) {
        player(id: $id) {
            name
        }
    }
`;

export const ADD_PLAYER_MUTATION = gql`
    mutation AddPlayer($name: String) {
        createPlayer(name: $name) {
            id
            name
        }
    }
`;

export const GAMES_QUERY = gql`
    query {
        games {
            id
            name
        }
    }
`;

export const PLAY_LOG_QUERY = gql`
    query {
        events {
            event_time
            game {
                name
            }
            players {
                name
            }
        }
    }
`;