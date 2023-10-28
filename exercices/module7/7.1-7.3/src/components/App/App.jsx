import About from 'components/About/About';
import List from 'components/Anecdotes/List';
import New from 'components/Anecdotes/New';
import View from 'components/Anecdotes/View';
import Footer from 'components/Footer/Footer';
import Menu from 'components/Menu/Menu';
import Notification from 'components/Notification/Notification';
import { useState, useEffect } from 'react';
import { Routes, Route, useMatch, useNavigate } from 'react-router-dom';

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

  const [notification, setNotification] = useState('');

  const navigate = useNavigate();

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000);
    setAnecdotes(anecdotes.concat(anecdote));
    setNotification(`a new anecdote ${anecdote.content} created!`);
    navigate('/');
  };

  const clearNotificationWithDelay = (_) => {
    setTimeout(() => setNotification(''), 5000);
  };

  useEffect(clearNotificationWithDelay, [notification]);

  const match = useMatch('/anecdotes/:id');
  const anecdote = match
    ? anecdotes.find((anecdote) => anecdote.id === Number(match.params.id))
    : undefined;

  return (
    <div>
      <h1>Software anecdotes</h1>
      <Menu />
      {notification && <Notification notification={notification} />}
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<New addNew={addNew} />} />
        <Route path="/" element={<List anecdotes={anecdotes} />} />
        <Route path="/anecdotes/:id" element={<View {...{ anecdote }} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
