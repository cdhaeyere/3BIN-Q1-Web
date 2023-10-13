import { Context as CounterContext } from 'contexts/countersContext';
import { useContext } from 'react';

const BadButton = () => {
    const { bad, increaseBad } = useContext(CounterContext);
    return (
        <>
            <p>Bad: {bad}</p>
            <button onClick={increaseBad}>Increase bad</button>
        </>
    );
};

export default BadButton;