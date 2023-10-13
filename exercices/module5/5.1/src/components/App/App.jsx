import BadButton from "../Button/BadButton";
import GoodButton from "../Button/GoodButton";
import OkButton from "../Button/OkButton";
import ResetButton from "../Button/ResetButton";

const App = () => {
    return (
        <>
            <h2>Give feedback</h2>
            <GoodButton />
            <OkButton />
            <BadButton />
            <br />
            <ResetButton />
        </>
    );
}

export default App;