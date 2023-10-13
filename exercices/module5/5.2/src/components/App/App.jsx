import { Context as OpinionContext } from "contexts/OpinionContext";
import { useContext } from "react";
import Opinion from 'components/Opinion/Opinion';
import OpinionAdd from 'components/Opinion/OpinionAdd';

const App = () => {
    const { sortedOpinions } = useContext(OpinionContext);

    return (
        <>
            {sortedOpinions.map((opinion, index) => <Opinion key = {index} opinion = {opinion}></Opinion>)}
            <OpinionAdd />
        </>
    );
}

export default App;