import { createContext, useContext, useState } from "react";
import { peticionagregarEspecie, peticioneliminarEspecie, peticionleerEspecies  , peticionleerEspecie, peticioneditarEspecie} from "../api/especies";

const EspecieContext = createContext();

export const useEspecie = () => {
    const context = useContext(EspecieContext);
    
    if (!context) {
        throw new Error("useEspecie se debe usar ocn EspecieProvider");
    }
    return context;
}

export function EspecieProvider({ children }) {
    const [especie, setEspecie] = useState([])
    const [errores, setErrors] = useState([]);

    const agregarEspecie = async (especie) => {
        try {
            const res = await peticionagregarEspecie(especie);
            console.log(res);            
        } catch (error) {
            if (error.response) {
                setErrors(error.response.data.error);
            }
        }

    }

    const leerEspecies = async () => {
        try {
            const res = await peticionleerEspecies();
            // if(res.status === 404){}
            setEspecie(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    const leerEspecie = async (id) =>{
        const res = await peticionleerEspecie(id);
        // console.log(res.data.rows[0]);
        // console.log(res.data.especie)
        return res.data;
    }
    const editarEspecie = async (id, especie) =>{
        try {
            const res = await peticioneditarEspecie(id,especie);
        } catch (error) {
            console.log(error)
        }
    }
    const eliminarEspecie = async(id) =>{
        try {
            const res = await peticioneliminarEspecie(id);
            // console.log(res);
            if(res.status === 204) setEspecie(especie.filter((esp) => esp.id !== id )) ;
            
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <EspecieContext.Provider value={{
            especie,
            errores,
            leerEspecies,
            leerEspecie,
            agregarEspecie,
            eliminarEspecie,
            editarEspecie,
        }}>
            {children}
        </EspecieContext.Provider>
    );
};