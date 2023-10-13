import React, {useEffect, useState} from "react";
import { v4 as uuidv4 } from 'uuid';

const Context = React.createContext(null)

const generateUUID = () => {
    return uuidv4();
}

const ProviderWrapper = (props) => {

    const defaultOpinions = [
        {
            uuid: generateUUID(),
            opinion: "A",
            votes: 0
        },
        {
            uuid: generateUUID(),
            opinion: "B",
            votes: 0
        },
        {
            uuid: generateUUID(),
            opinion: "C",
            votes: 0
        }
    ];

    const [opinions, setOpinions] = useState(defaultOpinions);
    const [sortedOpinions, setSortedOpinions] = useState(defaultOpinions);

    useEffect(() => {
        const sorted = opinions.sort((a, b) => b.votes - a.votes);
        setSortedOpinions(sorted);
    }, [opinions]);

    const addOpinion = (opinion) => {
        if (opinions.find(o => o.opinion.toLowerCase() === opinion.toLowerCase()) !== undefined) {
            console.log("Opinion already exists");
            return;
        }

        const opinionsCopy = [...opinions];

        opinionsCopy.push({
            uuid: uuidv4(),
            opinion: opinion,
            votes: 1
        });

        setOpinions(opinionsCopy);
    }

    const voteOpinion = (uuid) => {
        const opinionsCopy = [...opinions];

        opinionsCopy.find(opinion => opinion.uuid === uuid).votes++;

        setOpinions(opinionsCopy);
    }

    const exposedValue = {
        opinions,
        sortedOpinions,
        addOpinion,
        voteOpinion
    }

    return <Context.Provider value={exposedValue}>
        { props.children }
    </Context.Provider>
}

export {
    Context,
    ProviderWrapper,
}