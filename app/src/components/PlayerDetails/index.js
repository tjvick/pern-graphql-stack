import React from 'react';
import {useParams} from 'react-router-dom';
import {useQuery} from "@apollo/client";
import {GET_PLAYER_QUERY} from "../../queries";
import {Typography} from "antd";



const PlayerDetails = () => {
  let { id } = useParams();

  const {loading, data} = useQuery(
    GET_PLAYER_QUERY,
    {
      variables: {
        id: id
      }
    }
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  const {player} = data;

  return (
    <Typography.Title>
      {player.name}
    </Typography.Title>
  );
};

export default PlayerDetails;
