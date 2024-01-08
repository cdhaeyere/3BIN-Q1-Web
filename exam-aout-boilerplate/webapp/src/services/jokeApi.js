import axios from 'axios';

const baseUrl = "http://localhost:3001";

const getAll = () => axios.get(`${baseUrl}/jokes`).then(response => response.data);

const get = (id) => axios.get(`${baseUrl}/jokes/${id}`).then(response => response.data);

const jokeApi = { getAll, get };

export default jokeApi;