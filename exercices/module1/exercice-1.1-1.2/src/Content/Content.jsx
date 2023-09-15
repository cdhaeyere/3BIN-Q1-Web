import Part from '../Part/Part.jsx'

const Content = (props) => {
    return (
        <div>
            <Part part={props.parts[0]} exercice={props.exercices[0]} />
            <Part part={props.parts[1]} exercice={props.exercices[1]} />
            <Part part={props.parts[2]} exercice={props.exercices[2]} />
        </div>
    )
}

export default Content