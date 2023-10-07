import React from 'react'

const FilterPersons = ({ filterValue, changeFilter }) => {

    const handleFilterChange = (e) => {
        const newValue = e.target.value;
        changeFilter(newValue);
    }

    return (
        <div>
            filter shown with <input value={filterValue} onChange={handleFilterChange} />
        </div>
    )
}

export default FilterPersons
