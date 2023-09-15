import Header from "./Header.jsx";
import Content from "./Content.jsx";
import Total from "./Total.jsx";

const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    const parts = [part1, part2, part3]
    const exercices = [exercises1, exercises2, exercises3]

    return (
        <div>
            <Header course={course} />
            <Content parts={parts} exercices={exercices} />
            <Total exercices={exercices} />
        </div>
    )
}

export default App