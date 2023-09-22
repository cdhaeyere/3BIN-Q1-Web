import Display from "components/Display/Display.jsx";
import Button from "components/Button/Button.jsx";
import {useState} from "react";

const App = () => {
    const [counter, setCounter] = useState(JSON.parse(localStorage.getItem("counter")))

    console.log('rendering with counter value', counter)

    const changeCount = (delta) => {
        setCounter(counter + delta)
        localStorage.setItem("counter", JSON.stringify(counter))
    }

    return (
        <div>
            <Display counter={counter} />
            <Button changeCount={changeCount} delta={1} text="plus" />
            <Button changeCount={changeCount} delta={-counter} text="zero" />
            <Button changeCount={changeCount} delta={-1} text="minus" />
        </div>
    )
}

export default App