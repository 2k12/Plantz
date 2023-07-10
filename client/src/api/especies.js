import axios from "./axios";

export const peticionleerEspecies = () => axios.get('/tax/registrotaxonomico');
export const peticionleerEspecie = (id) => axios.get(`/tax/registrotaxonomico/${id}`);
export const peticionagregarEspecie = (especie) => axios.post('/tax/registrotaxonomico',especie);
export const peticioneditarEspecie = (id,especie) => axios.put(`/tax/registrotaxonomico/${id}`,especie);
export const peticioneliminarEspecie = (id) => axios.delete(`/tax/registrotaxonomico/${id}`);