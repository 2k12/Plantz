import { createContext, useContext, useState } from "react";
import { peticionleerTaxonomias,peticionleerTaxonomia,peticionagregarTaxonomia,peticioneditarTaxonomia,peticioneliminarTaxonomia} from "../api/admin";


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
    const [errores, setErrors] = useState([]);

    const agregarTaxonomia = async (taxonomia) => {
        try {
            const res = await peticionagregarTaxonomia(taxonomia);
            console.log(res);            
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