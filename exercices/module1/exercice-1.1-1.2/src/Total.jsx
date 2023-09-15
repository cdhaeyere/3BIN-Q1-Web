const Total = (props) => {
    let total = 0
    props.exercices.forEach((e) => {
        total = total + e
    })

    return (
        <p>Number of exercises {total}</p>
    )
}

export default Total