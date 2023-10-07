import React, { useState } from "react"

const AddPerson = ({ createPerson }) => {

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleAddPerson = (event) => {
        event.preventDefault()
        createPerson({ name: newName, number: newNumber })
        setNewName('')
        setNewNumber('')
    }

    const handleNameChange = event => {
        setNewName(event.target.value)
    }

    const handleNumberChange = event => {
        setNewNumber(event.target.value)
    }

    return (
        <form onSubmit={handleAddPerson}>
            <div>
                name: <input value={newName} onChange={handleNameChange} />
            </div>
            <div>
                number: <input value={newNumber} onChange={handleNumberChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )

}

export default AddPerson