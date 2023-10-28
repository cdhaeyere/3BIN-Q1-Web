import About from 'components/About/About';
import AnecdotesList from 'components/Anecdotes/List';
import New from 'components/Anecdotes/New';
import View from 'components/Anecdotes/View';
import Footer from 'components/Footer/Footer';
import Menu from 'components/Menu/Menu';
import { useState } from 'react';
import { Routes, Route, useMatch, useNavigate } from 'react-router-dom';
import { Layout, message } from 'antd';

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1,
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2,
    },
  ]);

  const navigate = useNavigate();

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000);
    setAnecdotes(anecdotes.concat(anecdote));
    navigate('/');
    message.success(`a new anecdote ${anecdote.content} created!`);
  };

  const match = useMatch('/anecdotes/:id');
  const anecdote = match
    ? anecdotes.find((anecdote) => anecdote.id === Number(match.params.id))
    : undefined;

  const { Header, Footer: AntdFooter, Content } = Layout;

  return (
    <>
      <Header>
        <h1 style={{ color: 'white' }}>Software anecdotes</h1>
      </Header>

      <Content style={{ padding: '10px 50px' }}>
        <Menu />

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/create" element={<New addNew={addNew} />} />
          <Route path="/" element={<AnecdotesList anecdotes={anecdotes} />} />
          <Route
            path="/anecdotes/:id"
            element={<View {...{ anecdote }} />}
          />
        </Routes>
      </Content>
      <AntdFooter>
        <Footer />
      </AntdFooter>
    </>
  );
};

export default App;