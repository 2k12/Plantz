import { useEspecie } from "../context/RegistroEspecieContext";
import { useAdmin } from "../context/AdminContext";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { useLocation } from "react-router-dom";
function EspeciesCard({ esp }) {

    const { user } = useAuth();
    const { eliminarEspecie } = useEspecie();
    const { eliminarEspecie2, verificarEspecie } = useAdmin();
    const [especienoVerificada, setEspecienoVerificada] = useState(true);
    const hacerqueVerifique = () => {
        verificarEspecie(esp.id)
        setEspecienoVerificada(false);
    }
    const location = useLocation();

    return (
        
        <>
            {
            
            location.pathname !=="/clasificacion" ?(

                user.rol === "taxonomo" || user.rol === "dig"  ? (
                    <>
                        <div className="bg-gray-900 m-3 rounded flex items-center justify-between">
                            <div className="flex">
                                <h1 className=" ml-5 font-bold text-purple-500">Especie: <span className="text-white font-normal pl-2">{esp.nombrecientifio}</span></h1>
                            </div>
                            <div className="flex flex-wrap items-center">
                                {/* target="_blank"  */}
                                <Link to={`/registrotaxonomico/${esp.id}`} className="text-white hover:bg-blue-500 bg-blue-700 pl-2 pr-2 rounded border m-2 border-blue-700">Ver</Link>
                                <Link to={`/editar-registrotaxonomico/${esp.id}`} className=" text-white hover:bg-green-500 bg-green-700 pl-2 pr-2 rounded border m-2 border-green-700">Editar</Link>
                                <button className=" text-white hover:bg-red-500 bg-red-700  pl-2 pr-2 rounded border m-2 border-red-700" onClick={() => {
                                    eliminarEspecie(esp.id);
                                }}>Eliminar</button>
    
                            </div>
                        </div>
                    </>) : (
                    <>
                        <div className="bg-gray-900 m-3 rounded flex items-center justify-between">
                            <div className="flex">
                                <h1 className=" ml-5 font-bold text-purple-500">Especie: <span className="text-white font-normal pl-2">{esp.nombrecomun}</span></h1>
                            </div>
                            <div className="flex flex-wrap items-center">
                                {/* target="_blank"  */}
                                <Link to={`/registrotaxonomico/${esp.id}`} className="text-white hover:bg-blue-500 bg-blue-700 pl-2 pr-2 rounded border m-2 border-blue-700">Ver</Link>
                                <Link to={`/editar-registrotaxonomico/${esp.id}`} className=" text-white hover:bg-green-500 bg-green-700 pl-2 pr-2 rounded border m-2 border-green-700">Editar</Link>
                                <button className=" text-white hover:bg-red-500 bg-red-700  pl-2 pr-2 rounded border m-2 border-red-700" onClick={() => {
                                    eliminarEspecie2(esp.id);
                                }}>Eliminar</button>
                                {esp.estado !== "verificado" && especienoVerificada ? (
                                    <button className=" text-white hover:bg-orange-500 bg-orange-700  pl-2 pr-2 rounded border m-2 border-orange-700" onClick={() => {
                                        hacerqueVerifique();
                                    }}>Verificar</button>) : (<></>)}
                            </div>
                        </div>
    
                    </>)

            ):( <>
                <div className="bg-gray-900 m-3 rounded flex items-center justify-between">
                    <div className="flex">
                        <h1 className=" ml-5 font-bold text-purple-500">Especie: <span className="text-white font-normal pl-2">{esp.nombrecientifio}</span></h1>
                    </div>
                    <div className="flex flex-wrap items-center">
                        {/* target="_blank"  */}
                        <Link to={`/especies/${esp.id}`} className="text-white hover:bg-blue-500 bg-blue-700 pl-2 pr-2 rounded border m-2 border-blue-700">Ver</Link>
                    </div>
                </div>

            </>)
            
            
            }
        </>


    )
}

export default EspeciesCard