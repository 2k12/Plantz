import axios from "./axios";

// especies

export const peticionleerEspeciesall = () => axios.get('/all/especies');
export const peticionleerEspecieall = (id) => axios.get(`/all/especies/${id}`);