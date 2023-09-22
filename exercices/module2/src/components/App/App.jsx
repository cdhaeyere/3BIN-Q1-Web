import Display from "components/Display/Display.jsx";
import Button from "components/Button/Button.jsx";
import {useState} from "react";

const App = () => {
    const [counter, setCounter] = useState(0)
    
    console.log('rendering with counter value', counter)
    const increaseByOne = () => {
        console.log('increasing, value before', counter);
        setCounter(counter + 1)
    }

    const decreaseByOne = () => {
        console.log('decreasing, value before', counter);
        setCounter(counter - 1)
    }

    const setToZero = () => {
        console.log('resetting to zero, value before', counter);
        setCounter(0)
    }

    return (
        <div>
            <Display counter={counter} />
            <Button handleClick={increaseByOne} text="plus" />
            <Button handleClick={setToZero} text="zero" />
            <Button handleClick={decreaseByOne} text="minus" />
        </div>
    )
}

export default App