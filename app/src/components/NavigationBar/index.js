import {Menu} from "antd";
import {Link} from "react-router-dom";
import React from "react";
import {Layout} from 'antd';

export const NavigationBar = () => {
  return (
    <Layout.Header>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="games">
          <Link to="/games">Games</Link>
        </Menu.Item>
        <Menu.Item key="players">
          <Link to="/players">Players</Link>
        </Menu.Item>
        <Menu.Item key="playlog">
          <Link to="/playlog">Play Log</Link>
        </Menu.Item>
      </Menu>
    </Layout.Header>
  )
};