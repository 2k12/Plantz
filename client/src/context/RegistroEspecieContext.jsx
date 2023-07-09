import { createContext, useContext, useState } from "react";
import { peticionagregarEspecie, peticionleerEspecies } from "../api/especies";

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
            setEspecie(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <EspecieContext.Provider value={{
            especie,
            agregarEspecie,
            leerEspecies,
        }}>
            {children}
        </EspecieContext.Provider>
    );
};