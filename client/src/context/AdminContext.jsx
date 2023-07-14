import { createContext, useContext, useState } from "react";
import { 
    peticionleerEspeciesad,peticionleerEspeciead,peticionagregarEspeciead,peticioneditarEspeciead,peticioneliminarEspeciead,
    peticionleerTaxonomias,peticionleerTaxonomia,peticionagregarTaxonomia,peticioneditarTaxonomia,peticioneliminarTaxonomia

} from "../api/admin";


const AdminContext = createContext();

export const useAdmin = () => {
    const context = useContext(AdminContext);

    if (!context) {
        throw new Error("useAdmin se debe usar ocn AdminProvider");
    }
    return context;

}

export function AdminProvider({children}){
    const [taxonomia, setTaxononia] = useState([])
    const [especiead, setEspecie] = useState([])
    const [errores, setErrors] = useState([]);


    const agregarEspecie = async (especie) => {
        try {
            const res = await peticionagregarEspeciead(especie);
            console.log(res);            
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

    const leerEspecie = async (id) =>{
        const res = await peticionleerEspeciead(id);
        // console.log(res.data.rows[0]);
        // console.log(res.data.especie)
        return res.data;
    }
    const editarEspecie = async (id, especie) =>{
        try {
            const res = await peticioneditarEspeciead(id,especie);
        } catch (error) {
            console.log(error)
        }
    }
    const eliminarEspecie = async(id) =>{
        try {
            const res = await peticioneliminarEspeciead(id);
            // console.log(res);
            if(res.status === 204) setEspecie(especiead.filter((esp) => esp.id !== id )) ;
            
        } catch (error) {
            console.log(error);
        }
    };





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
    const leerTaxonomia = async (id) =>{
        const res = await peticionleerTaxonomia(id);
        // console.log(res.data.rows[0]);
        // console.log(res.data.especie)
        return res.data;
    }
    const editarTaxonomia = async (id, taxonomia) =>{
        try {
            const res = await peticioneditarTaxonomia(id,taxonomia);
        } catch (error) {
            console.log(error)
        }
    }
    const eliminarTaxonomia = async(id) =>{
        try {
            const res = await peticioneliminarTaxonomia(id);
            // console.log(res);
            if(res.status === 204) setTaxononia(taxonomia.filter((esp) => esp.id !== id )) ;
            
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <AdminContext.Provider value={{
            taxonomia,
            errores,
            especiead,
            leerEspecies2,
            leerEspecie,
            agregarEspecie,
            eliminarEspecie,
            editarEspecie,
            leerTaxonomias,
            leerTaxonomia,
            agregarTaxonomia,
            eliminarTaxonomia,
            editarTaxonomia,
        }}>
            {children}
        </AdminContext.Provider>
    );
}