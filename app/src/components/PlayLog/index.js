import React from 'react';
import {useQuery} from "@apollo/client";
import {Layout, Table} from "antd";
import {PLAY_LOG_QUERY} from "../../queries";

const tableColumns = [
  {
    title: 'Date',
    dataIndex: 'event_time',
    key: 'datetime',
    render: date => (new Date(date)).toLocaleString('en-US')
  },
  {
    title: 'Game',
    dataIndex: ['game','name'],
    key: 'game'
  },
  {
    title: 'Players',
    dataIndex: 'players',
    key: 'players',
    render: players => (
      <>
        {players.map(p => p.name).join(', ')}
      </>
    )
  }
];

const PlayLog = () => {
  const {loading, data} = useQuery(PLAY_LOG_QUERY);

  if (loading) {
    return <p>Loading...</p>;
  }

  const {events} = data;

  return (
    <Layout.Content>
      <Table
        dataSource={events} columns={tableColumns}
      />
    </Layout.Content>
  );
};

export default PlayLog;
