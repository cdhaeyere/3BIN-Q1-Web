import { Context as CounterContext } from 'contexts/countersContext';
import { useContext } from 'react';

const GoodButton = () => {
    const { good, increaseGood } = useContext(CounterContext);
    return (
        <>
            <p>Good: {good}</p>
            <button onClick={increaseGood}>Increase good</button>
        </>
    );
};

export default GoodButton;