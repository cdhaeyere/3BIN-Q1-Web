import OpinionVote from "components/Opinion/OpinionVote";

const Opinion = ({opinion}) => {
    return (
        <>
            <p>Opinion {opinion.opinion} : {opinion.votes}</p>
            <OpinionVote uuid = {opinion.uuid}/>
        </>
    );
}

export default Opinion;