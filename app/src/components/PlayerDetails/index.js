import React from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {useMutation, useQuery} from "@apollo/client";
import {DELETE_PLAYER_MUTATION, GET_PLAYER_DETAILS_QUERY} from "../../queries";
import {Button, Layout, Modal, Table, Typography} from "antd";

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

const {confirm} = Modal;

const PlayerDetails = () => {
  let { id } = useParams();
  let history = useHistory();
  const [deletePlayer] = useMutation(DELETE_PLAYER_MUTATION);

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

  function showConfirm() {
    confirm({
      title: "Are you sure you want to delete this player?",
      content: "You cannot undo this action.",
      okText: "Yes - Delete",
      okType: "danger",
      okButtonProps: {
        type: "primary",
      },
      cancelText: 'No - Cancel',
      onOk: async () => {
        await deletePlayer({
          variables: {
            id: id
          }
        });

        history.push(`/players`);
      },
    })
  }

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
      <Button
        danger
        type="primary"
        onClick={showConfirm}
      >Delete Player</Button>
    </Layout.Content>
  );
};

export default PlayerDetails;
