import Header from "components/Header/Header"
import Content from "components/Content/Content"
import Total from "components/Total/Total"

import "./App.css"
import image from './test.png'

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
            <img src={image} />
        </div>
    )
}

export default App