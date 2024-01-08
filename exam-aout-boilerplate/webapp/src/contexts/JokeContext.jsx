import React, { useState, useEffect, createContext, useCallback } from 'react';
import jokeApi from '../services/jokeApi';
import scoreApi from '../services/scoreApi';

const Context = createContext(null);

const ProviderWrapper = (props) => {
    const [jokes, setJokes] = useState([]);
    const [scores, setScores] = useState([]);

    const fetchJokes = async () => {
        const fetchedJokes = await jokeApi.getAll();
        setJokes(fetchedJokes);
    };

    const fetchScores = async () => {
        const fetchedScores = await scoreApi.getAll();
        setScores(fetchedScores);
    };

    useEffect(() => {
        const fetchData = async () => {
            await Promise.all([fetchScores(), fetchJokes()]);
        };

        fetchData();
    }, []);

    const getJokeWithScores = (jokeId) => {
        const joke = jokes.find((joke) => joke.id === jokeId);

        if (!joke) {
            return null;
        }

        const jokeScores = scores.filter((score) => score.joke === jokeId);

        const scoreCount = jokeScores.length;
        const averageScore =
            scoreCount > 0
                ? jokeScores.reduce((acc, score) => acc + score.score, 0) / scoreCount
                : 0;

        return {
            question: joke.question,
            answer: joke.answer,
            category: joke.category,
            id: joke.id,
            scores: jokeScores,
            scoreCount,
            averageScore,
        };
    };

    const addScore = useCallback(async (username, score, jokeId) => {
        const newScore = {
            username,
            score,
            joke: jokeId,
        };

        await scoreApi.add(newScore);
        await fetchScores();
    }, []);

    const exposedValue = {
        getJokeWithScores,
        jokes,
        addScore,
    };

    return (
        <Context.Provider value={exposedValue}>
            {props.children}
        </Context.Provider>
    );
};

export { Context, ProviderWrapper };
