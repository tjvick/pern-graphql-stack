import {gql} from "@apollo/client";

export const PLAYERS_QUERY = gql`
    query {
        players {
            id
            name
        }
    }
`;

export const GET_PLAYER_DETAILS_QUERY = gql`
    query GetPlayerDetails($id: ID) {
        player(id: $id) {
            name
            events {
                id
                event_time
                game {
                    name
                }
            }
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

export const DELETE_PLAYER_MUTATION = gql`
    mutation DeletePlayer($id: ID) {
        deletePlayer(id: $id)
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