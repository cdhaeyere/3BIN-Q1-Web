import axios from "axios"

const baseUrl = "//localhost:3001/persons"

const getAll = () => axios.get(baseUrl).then(response => response.data)

const create = personPayload => axios.post(baseUrl, personPayload).then(response => response.data)

const PersonsAPI = {
    getAll,
    create
}

export default PersonsAPI