import React from 'react';
import {useQuery} from '@apollo/client';
import {Layout, Table} from "antd";
import {GAMES_QUERY} from "../../queries";

const tableColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  }
];

const Games = () => {
  const {loading, data} = useQuery(GAMES_QUERY);

  if (loading) {
    return <p>Loading...</p>;
  }

  const {games} = data;

  return (
    <Layout.Content>
      <Table dataSource={games} columns={tableColumns}/>
    </Layout.Content>
  );
};

export default Games;
