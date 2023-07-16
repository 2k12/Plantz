import { createContext, useContext, useState } from "react";
import {  peticionleerEspeciesall, peticionleerEspecieall} from "../api/userall";


const UserallContext = createContext();

export const useUserall = () => {
    const context = useContext(UserallContext);
    if (!context) {
        throw new Error("useAdmin se debe usar con AdminProvider");
    }
    return context;
}

export function UserallProvider({ children }) {
    const [especieall, setEspecieAll] = useState([])
    const [errores, setErrors] = useState([]);

    // ? especies

    const leerEspecies3 = async () => {
        try {
            const res = await peticionleerEspeciesall();
            // if(res.status === 404){}
            setEspecieAll(res.data);
        } catch (error) {
            console.log(error);
        }
    }
    const leerEspecie3 = async (id) => {
        const res = await peticionleerEspecieall(id);
        // console.log(res.data.rows[0]);
        // console.log(res.data.especie)
        return res.data;
    }



    return (
        <UserallContext.Provider value={{
            errores,
            especieall,
            leerEspecies3,
            leerEspecie3,
            
        }}>
            {children}
        </UserallContext.Provider>
    );
}