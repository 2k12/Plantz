import axios from "./axios"; 


export const peticionregistro =  user => axios.post(`/registro`,user);
export const peticionlogin =  user => axios.post(`/login`,user);
export const verificarlapeticiondeToken =  () => axios.get(`/verify`);
export const peticionregistrotaxonomia =  () => axios.post(`/registrotaxonomico`);
// export const peticionnRegistroTaxonomia =  () => axios.post(`/registrotaxonomico/agregar`);
