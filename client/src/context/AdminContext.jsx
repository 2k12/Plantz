import { createContext, useContext, useState } from "react";
import {
    peticionleerEspeciesad, peticionleerEspeciead, peticionagregarEspeciead, peticioneditarEspeciead, peticioneliminarEspeciead,
    peticionleerTaxonomias, peticionleerTaxonomia, peticionagregarTaxonomia, peticioneditarTaxonomia, peticioneliminarTaxonomia,
    peticionleerUsuarios, peticionleerUsuario, peticionagregarUsuario, peticioneditarUsuario, peticioneliminarUsuario

} from "../api/admin";


const AdminContext = createContext();

export const useAdmin = () => {
    const context = useContext(AdminContext);

    if (!context) {
        throw new Error("useAdmin se debe usar ocn AdminProvider");
    }
    return context;

}

export function AdminProvider({ children }) {
    const [taxonomia, setTaxononia] = useState([])
    const [especiead, setEspecie] = useState([])
    const [usuarios, setUsuario] = useState([])
    const [errores, setErrors] = useState([]);



    // ? especies

    const agregarEspecie2 = async (especie) => {
        try {
            const res = await peticionagregarEspeciead(especie);
            console.log(res.data);
        } catch (error) {
            if (error.response) {
                setErrors(error.response.data.error);
            }
        }

    }

    const leerEspecies2 = async () => {
        try {
            const res = await peticionleerEspeciesad();
            // if(res.status === 404){}
            setEspecie(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    const leerEspecie2 = async (id) => {
        const res = await peticionleerEspeciead(id);
        // console.log(res.data.rows[0]);
        // console.log(res.data.especie)
        return res.data;
    }
    const editarEspecie2= async (id, especie) => {
        try {
            const res = await peticioneditarEspeciead(id, especie);
        } catch (error) {
            console.log(error)
        }
    }
    const eliminarEspecie2 = async (id) => {
        try {
            const res = await peticioneliminarEspeciead(id);
            // console.log(res);
            if (res.status === 204) setEspecie(especiead.filter((esp) => esp.id !== id));

        } catch (error) {
            console.log(error);
        }
    };


    // ? taxonomias


    const agregarTaxonomia = async (taxonomia) => {
        try {
            const res = await peticionagregarTaxonomia(taxonomia);
            // console.log(res.data);            
        } catch (error) {
            if (error.response) {
                setErrors(error.response.data.error);
            }
        }
    }
    const leerTaxonomias = async () => {
        try {
            const res = await peticionleerTaxonomias();
            setTaxononia(res.data);
        } catch (error) {
            console.log(error)
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
        } catch (error) {
            console.log(error)
        }
    }
    const eliminarTaxonomia = async (id) => {
        try {
            const res = await peticioneliminarTaxonomia(id);
            // console.log(res);
            if (res.status === 204) setTaxononia(taxonomia.filter((esp) => esp.id !== id));

        } catch (error) {
            console.log(error);
        }
    };

    // ? usuarios


    const agregarUsuario = async (usuario) => {
        try {
            const res = await peticionagregarUsuario(usuario);
            // console.log(res.data);            
        } catch (error) {
            if (error.response) {
                setErrors(error.response.data.error);
            }
        }
    }
    const leerUsuarios = async () => {
        try {
            const res = await peticionleerUsuarios();
            setUsuario(res.data);
        } catch (error) {
            console.log(error)
        }
    }
    const leerUsuario = async (id) => {
        try {
            const res = await peticionleerUsuario(id);
            return res.data;
            // console.log(res.data)
        } catch (error) {
            console.log(error)
        }

    }
    const editarUsuario = async (id, usuario) => {
        try {
            const res = await peticioneditarUsuario(id, usuario);
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
    const eliminarUsuario = async (id) => {
        try {
            const res = await peticioneliminarUsuario(id);
            // console.log(res);
            if (res.status === 204) setUsuario(usuarios.filter((esp) => esp.id !== id));

        } catch (error) {
            console.log(error);
        }
    };


    return (
        <AdminContext.Provider value={{
            errores,
            especiead,
            taxonomia,
            usuarios,
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