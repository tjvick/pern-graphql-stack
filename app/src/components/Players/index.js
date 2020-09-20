import React, {useState} from 'react';
import {useMutation, useQuery} from "@apollo/client";
import {Button, Input, Layout, Modal, Table} from "antd";
import {ADD_PLAYER_MUTATION, PLAYERS_QUERY} from "../../queries";

const tableColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  }
];

const Players = () => {
  const [newPlayerName, setNewPlayerName] = useState('');
  const [isAddPlayerModalOpen, setIsAddPlayerModalOpen] = useState(false);
  const {loading, data, refetch} = useQuery(PLAYERS_QUERY);
  const [addPlayer] = useMutation(ADD_PLAYER_MUTATION);

  if (loading) {
    return <p>Loading...</p>;
  }

  const {players} = data;

  return (
    <Layout.Content>
      <Button
        type="primary"
        onClick={() => setIsAddPlayerModalOpen(true)}
      >
        Add Player
      </Button>
      <Table dataSource={players} columns={tableColumns} pagination={{ pageSize: 50 }}/>
      <Modal
        title="Add New Player"
        visible={isAddPlayerModalOpen}
        onOk={async (e) => {
          await addPlayer({
            variables: {
              name: newPlayerName
            }
          });
          setIsAddPlayerModalOpen(false);
          setNewPlayerName('');
          return refetch();
        }}
        onCancel={() => setIsAddPlayerModalOpen(false)}
        okText="Add"
      >
        <Input
          placeholder="Player Name"
          value={newPlayerName}
          onChange={(e) => setNewPlayerName(e.target.value)}
        />
      </Modal>
    </Layout.Content>
  );
};

export default Players;
