import { useAdmin } from "../context/AdminContext";
import { Link  } from "react-router-dom";

function UsuariosCard({esp}) {
    const {eliminarUsuario} = useAdmin();
    return (
        <div className="bg-gray-900 m-3 rounded flex items-center justify-between">
            <div className="flex">
                <h1 className=" ml-5 font-bold text-purple-500">Usuario: <span className="text-white font-normal pl-2">{esp.usuario}</span></h1>
            </div>
            <div className="flex flex-wrap items-center">
            {/* target="_blank"  */}
                <Link to={`/usuarios/${esp.id}`}   className="text-white hover:bg-blue-500 bg-blue-700 pl-2 pr-2 rounded border m-2 border-blue-700">Ver</Link>
                <Link to={`/editar-usuario/${esp.id}`}className=" text-white hover:bg-green-500 bg-green-700 pl-2 pr-2 rounded border m-2 border-green-700">Editar</Link>
                <button className=" text-white hover:bg-red-500 bg-red-700  pl-2 pr-2 rounded border m-2 border-red-700" onClick={() => {
                    eliminarUsuario(esp.id);
                }}>Eliminar</button>
            </div>
        </div>
    )
}

export default UsuariosCard