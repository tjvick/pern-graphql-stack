import React from 'react';
import {useParams} from 'react-router-dom';
import {useQuery} from "@apollo/client";
import {GET_PLAYER_DETAILS_QUERY} from "../../queries";
import {Layout, Table, Typography} from "antd";

const tableColumns = [
  {
    title: 'Date',
    dataIndex: 'event_time',
    key: 'datetime',
    render: date => (new Date(date)).toLocaleString('en-US'),
  },
  {
    title: 'Game Title',
    dataIndex: ['game', 'name'],
    key: 'gametitle',
  }
];

const PlayerDetails = () => {
  let { id } = useParams();

  const {loading, data} = useQuery(
    GET_PLAYER_DETAILS_QUERY,
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
    <Layout.Content>
      <Typography.Title>
        {player.name}
      </Typography.Title>
      <Typography.Title level={3}>
        Recent Plays
      </Typography.Title>
      <Table
        dataSource={player.events}
        columns={tableColumns}
      />
    </Layout.Content>
  );
};

export default PlayerDetails;
