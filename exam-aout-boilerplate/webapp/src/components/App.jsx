import React from 'react';

import { Layout, Menu } from 'antd'
import { Route, Routes, useMatch, useNavigate } from 'react-router-dom';
import About from './About/About';
import Jokes from './Jokes/Jokes';
import Joke from './Joke/Joke';

const { Header, Content } = Layout



const App = () => {

  const navigate = useNavigate();

  const match = useMatch('/jokes/:id');

  return (
    <Layout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal" selectedKeys={[]}>
          <Menu.Item key="1" onClick={() => navigate('/')}>Home</Menu.Item>
          <Menu.Item key="2" onClick={() => navigate('/about')}>About</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '30px 50px' }}>
        <Routes>
          <Route path="/" element={<Jokes />} />
          <Route path="/jokes/:id" element={<Joke />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Content>
    </Layout>
  )
}

export default App
