import React, { useContext } from 'react';
import { Context as JokeContext } from '../../contexts/JokeContext';

const Jokes = () => {
    const { jokes } = useContext(JokeContext);

    return (
        <div>
            <h1>Jokes</h1>
            <ul>
                { jokes.map(joke => (
                    <li key={joke.id}>
                        <a href={`/jokes/${joke.id}`}>
                            <h2>{joke.question}</h2>
                            <p>{joke.answer}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Jokes