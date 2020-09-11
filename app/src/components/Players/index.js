import React from 'react';
import {gql, useQuery} from "@apollo/client";
import {Layout, Table} from "antd";

const PLAYERS_QUERY = gql`
    query {
        players {
            id
            name
        }
    }
`;

const tableColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  }
];

const Players = () => {
  const {loading, data} = useQuery(PLAYERS_QUERY);

  if (loading) {
    return <p>Loading...</p>;
  }

  const {players} = data;

  return (
    <Layout.Content>
      <Table dataSource={players} columns={tableColumns}/>
    </Layout.Content>
  );
};

export default Players;
