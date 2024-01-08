import axios from 'axios';

const baseUrl = "http://localhost:3001";

const getAll = () => axios.get(`${baseUrl}/scores`).then(response => response.data);

const add = (score) => axios.post(`${baseUrl}/scores`, score).then(response => response.data);

const scoreApi = { getAll, add };

export default scoreApi;