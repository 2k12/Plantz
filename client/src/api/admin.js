import axios from "./axios";

// especies

export const peticionleerEspeciesad = () => axios.get('/adm/registrotaxonomico');
export const peticionleerEspeciead = (id) => axios.get(`/adm/registrotaxonomico/${id}`);
export const peticionagregarEspeciead = (especie) => axios.post('/adm/registrotaxonomico',especie, {
    headers: {
        "Content-Type": "multipart/form-datata"
    }
});
export const peticioneditarEspeciead = (id,especie) => axios.put(`/adm/registrotaxonomico/${id}`,especie,{
    headers: {
        "Content-Type": "multipart/form-datata"
    }
});
export const peticioneliminarEspeciead = (id) => axios.delete(`/adm/registrotaxonomico/${id}`);

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

