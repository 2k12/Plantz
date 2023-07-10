import { createContext, useContext, useState } from "react";
import { peticionagregarEspecie, peticioneliminarEspecie, peticionleerEspecies } from "../api/especies";

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

    const agregarEspecie = async (especie) => {
        const res = await peticionagregarEspecie(especie);
        console.log(res);
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
            leerEspecies,
            agregarEspecie,
            eliminarEspecie,
        }}>
            {children}
        </EspecieContext.Provider>
    );
};