import React, { useState, useEffect } from 'react'

import AddPerson from "components/AddPerson/AddPerson"
import Person from "components/Person/Person"
import FilterPersons from 'components/FilterPersons/FilterPersons'
import PersonsAPI from 'services/persons'

const App = () => {

    const [persons, setPersons] = useState([])
    const [filterValue, setFilterValue] = useState('')

    const initialLoad = () => {
        PersonsAPI
            .getAll()
            .then(persons => setPersons(persons))
            .catch(error => console.warn(error))
    }
    useEffect(initialLoad, [])

    const createPerson = (person) => {
        PersonsAPI
            .create(person)
            .then(createdPerson => setPersons([...persons, createdPerson]))
    }

    const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filterValue.toLowerCase()))

    return (
        <div>
            <h2>Phonebook</h2>
            <FilterPersons filterValue={filterValue} changeFilter={setFilterValue} />
            <h2>Add a new</h2>
            <AddPerson createPerson={createPerson} />
            <h2>Numbers</h2>
            {filteredPersons.map(person => <Person key={person.id} person={person} />)}
        </div>
    )

}

export default App