import { Context as CounterContext } from 'contexts/countersContext';
import { useContext } from 'react';

const OkButton = () => {
    const { ok, increaseOk } = useContext(CounterContext);
    return (
        <>
            <p>Ok: {ok}</p>
            <button onClick={increaseOk}>Increase ok</button>
        </>
    );
};

export default OkButton;