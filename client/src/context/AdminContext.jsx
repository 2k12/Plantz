import { createContext, useContext, useState } from "react";
import {
    peticionverificarEspecie,
    peticionleerEspeciesad, peticionleerEspeciead, peticionagregarEspeciead, peticioneditarEspeciead, peticioneliminarEspeciead,
    peticionleerTaxonomias, peticionleerTaxonomia, peticionagregarTaxonomia, peticioneditarTaxonomia, peticioneliminarTaxonomia,
    peticionleerUsuarios, peticionleerUsuario, peticionagregarUsuario, peticioneditarUsuario, peticioneliminarUsuario

} from "../api/admin";
import { toast } from 'react-toastify';


const AdminContext = createContext();

export const useAdmin = () => {
    const context = useContext(AdminContext);
    if (!context) {
        throw new Error("useAdmin se debe usar con AdminProvider");
    }
    return context;
}

export function AdminProvider({ children }) {
    const [taxonomia, setTaxononia] = useState([])
    const [especiead, setEspecie] = useState([])
    const [usuarios, setUsuario] = useState([])
    const [errores, setErrors] = useState([]);



    // ? especies
    const verificarEspecie = async (id) => {
        try {
            const res = await peticionverificarEspecie(id)
            if (res.status === 200) {
                toast.success(`Especie Verificada`)
            } else {
                toast.error(`Fallo en la Verificación`)
            }
            setErrors([]);
        } catch (error) {
            if (error.response) {
                setErrors([error.response.data.error]);
                toast.error(`${errores}`);

            }
        }
    }



    const agregarEspecie2 = async (especie) => {
        try {
            const res = await peticionagregarEspeciead(especie);
            if (res.status === 200) {
                toast.success(`Especie Registrada`)
            } else {
                toast.error(`No se Registro la Especie`)
            }
            setErrors([]);
        } catch (error) {
            if (error.response) {
                setErrors([error.response.data.error]);
                toast.error(errores);
            }
        }

    }

    const leerEspecies2 = async () => {
        try {
            const res = await peticionleerEspeciesad();
            // if(res.status === 404){}
            setEspecie(res.data);
        } catch (error) {
            if (error.response) {
                setErrors(error.response.data.error);
            }
        }
    }

    const leerEspecie2 = async (id) => {
        const res = await peticionleerEspeciead(id);
        return res.data;
    }
    const editarEspecie2 = async (id, especie) => {
        try {
            const res = await peticioneditarEspeciead(id, especie);
            if (res.status === 200) {
                toast.success(`Edición de especie Completada`)
            } else {
                toast.error(`Edición de especie Fallida`)
            }
            setErrors([]);
        } catch (error) {
            if (error.response) {
                setErrors([error.response.data.error]);
                toast.error(`${errores}`);
            }
        }
    }
    const eliminarEspecie2 = async (id) => {
        try {
            const res = await peticioneliminarEspeciead(id);
            // console.log(res);
            if (res.status === 204) {
                setEspecie(especiead.filter((esp) => esp.id !== id));
                toast.success("Especie Eliminada")
            }
            setErrors([]);
        } catch (error) {
            if (error.response) {
                setErrors(error.response.data.error);
            }
        }
    };


    // ? taxonomias


    const agregarTaxonomia = async (taxonomia) => {
        try {
            const res = await peticionagregarTaxonomia(taxonomia);
            // console.log(res.data);   
            if (res.status === 200) {
                toast.success(`Taxonomía Registrada`)
            } else if (res.status === 400){
                toast.error(`No se Registro la Taxonomía`)
            }
            setErrors([]);
        } catch (error) {
            if (error.response) {
                setErrors([error.response.data.error]);
                toast.error(`${errores}`);
            }
        }
    }
    const leerTaxonomias = async () => {
        try {
            const res = await peticionleerTaxonomias();
            setTaxononia(res.data);
        } catch (error) {
            if (error.response) {
                setErrors(error.response.data.error);
            }
        }
    }
    const leerTaxonomia = async (id) => {
        const res = await peticionleerTaxonomia(id);
        // console.log(res.data.rows[0]);
        // console.log(res.data.especie)
        return res.data;
    }
    const editarTaxonomia = async (id, taxonomia) => {
        try {
            const res = await peticioneditarTaxonomia(id, taxonomia);
            if (res.status === 200) {
                toast.success(`Edición de Taxonomía Completada`)
            } else {
                toast.error(`Edición de Taxonomía Fallida`)
            }
            setErrors([]);
        } catch (error) {
            if (error.response) {
                setErrors([error.response.data.error]);
                toast.error(`${errores}`);
            }
        }
    }
    const eliminarTaxonomia = async (id) => {
        try {
            const res = await peticioneliminarTaxonomia(id);
            // console.log(res);
            if (res.status === 204) {
                setTaxononia(taxonomia.filter((esp) => esp.id !== id));
                toast.success("Taxonomía Eliminada")
            }
            setErrors([]);

        } catch (error) {
            if (error.response) {
                setErrors(error.response.data.error);
            }
        }
    };

    // ? usuarios


    const agregarUsuario = async (usuario) => {
        try {
            const res = await peticionagregarUsuario(usuario);
            if (res.status === 200) {
                toast.success(`Usuario Registrado`)
            } 
            setErrors([]);
        } catch (error) {
            if (error.response) {
                setErrors([error.response.data.error]);
                toast.error(`${errores}`);
                // setErrors([error.response.data.error]);
                // toast.error(errores);
            }
        }
    }
    const leerUsuarios = async () => {
        try {
            const res = await peticionleerUsuarios();
            setUsuario(res.data);
        } catch (error) {
            if (error.response) {
                setErrors(error.response.data.error);
            }
        }
    }
    const leerUsuario = async (id) => {
        try {
            const res = await peticionleerUsuario(id);
            return res.data;
            // console.log(res.data)
        } catch (error) {
            if (error.response) {
                setErrors(error.response.data.error);
            }
        }

    }
    const editarUsuario = async (id, usuario) => {
        try {
            const res = await peticioneditarUsuario(id, usuario);
            if (res.status === 200) {
                toast.success(`Edición de Usuario Completada`)
            } else {
                toast.error(`Edición de Usuario Fallida`)
            }
            setErrors([]);
        } catch (error) {
            if (error.response) {
                setErrors([error.response.data.error]);
                toast.error(`${errores}`);
            }
        }
    }
    const eliminarUsuario = async (id) => {
        try {
            const res = await peticioneliminarUsuario(id);
            // console.log(res);
            if (res.status === 204){
            setUsuario(usuarios.filter((esp) => esp.id !== id));
            toast.success("Usuario Eliminado")
            } 

        } catch (error) {
            if (error.response) {
                setErrors(error.response.data.error);
            }
        }
    };

    return (
        <AdminContext.Provider value={{
            errores,
            especiead,
            taxonomia,
            usuarios,
            verificarEspecie,
            leerEspecies2,
            leerEspecie2,
            agregarEspecie2,
            editarEspecie2,
            eliminarEspecie2,
            leerTaxonomias,
            leerTaxonomia,
            agregarTaxonomia,
            editarTaxonomia,
            eliminarTaxonomia,
            leerUsuarios,
            leerUsuario,
            agregarUsuario,
            editarUsuario,
            eliminarUsuario
        }}>
            {children}
        </AdminContext.Provider>
    );
}