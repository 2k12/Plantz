import axios from "./axios";


// taxonomias
export const peticionleerTaxonomias = () => axios.get('/adm/taxonomia');
export const peticionleerTaxonomia = (id) => axios.get(`/adm/taxonomia/${id}`);
export const peticionagregarTaxonomia = (taxonomia) => axios.post('/adm/taxonomia',taxonomia);
export const peticioneditarTaxonomia = (id,taxonomia) => axios.put(`/adm/taxonomia/${id}`,taxonomia);
export const peticioneliminarTaxonomia = (id) => axios.delete(`/adm/taxonomia/${id}` );


// usuarios
export const peticionleerUsuarios = () => axios.get('/adm/usuarios');
export const peticionleerUsuario = () => axios.get('/adm/usuarios/:id');
export const peticionagregarUsuario = () =>axios.post('/adm/usuarios');
export const peticioneditarUsuario = () =>axios.put('/adm/usuarios/:id');
export const peticioneleerUsuario = () =>axios.delete('/adm/usuarios/:id');

