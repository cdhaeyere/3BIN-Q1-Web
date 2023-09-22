import Display from "components/Display/Display.jsx";
import Button from "components/Button/Button.jsx";
import useLocalStorage from "../../hooks/useLocalStorage.js";

const App = () => {
    const [counter, setCounter] = useLocalStorage("counter", 0)

    console.log('rendering with counter value', counter)

    const changeCount = (delta) => {
        setCounter(counter + delta)
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