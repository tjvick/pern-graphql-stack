import React from 'react';
import './style.css';
import {Layout} from 'antd';
import {Routing} from "../Routing";
import {NavigationBar} from "../NavigationBar";

function App() {
  return (
    <Layout>
      <NavigationBar />
      <Routing />
    </Layout>
  );
}

export default App;
