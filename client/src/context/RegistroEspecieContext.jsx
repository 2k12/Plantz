import { createContext, useContext, useState } from "react";
import { peticionagregarEspecie, peticioneliminarEspecie, peticionleerEspecies  , peticionleerEspecie, peticioneditarEspecie} from "../api/especies";
import { toast } from 'react-toastify';


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
            // console.log(res);        
            if (res.status === 200) {
                toast.success(`Especie Registrada`)
            }else{
                toast.error(`No se Registro la Especie`)
            }
            setErrors([]);
            
        } catch (error) {
            if (error.response) {
                setErrors([error.response.data.error]);
                toast.error(`${errores}`);
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
        return res.data;
    }

    // !por hacer la edicion de las especies 
    
    const editarEspecie = async (id, especie) =>{
        try {
            const res = await peticioneditarEspecie(id,especie);
            if (res.status === 200) {
                toast.success(`Edición de especie Completada`)
            }else{
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

    const eliminarEspecie = async(id) =>{
        try {
            const res = await peticioneliminarEspecie(id);
            // console.log(res);
            if(res.status === 204) {
                setEspecie(especie.filter((esp) => esp.id !== id ))
                toast.success("Especie Eliminada")
            }
            setErrors([]);
            
        } catch (error) {
            if (error.response) {
                setErrors(error.response.data.error);
            }
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