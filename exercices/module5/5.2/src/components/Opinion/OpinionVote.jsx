import { Context as OpinionContext } from "contexts/OpinionContext";
import { useContext } from "react";

const OpinionVote = ({uuid}) => {
    const { voteOpinion } = useContext(OpinionContext);

    const vote = () => voteOpinion(uuid);

    return (
        <>
            <button onClick = {vote}>Vote</button>
        </>
    );
}

export default OpinionVote;