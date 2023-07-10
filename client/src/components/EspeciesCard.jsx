import { useEspecie } from "../context/RegistroEspecieContext";
import { Link  } from "react-router-dom";

function EspeciesCard({esp}) {
    const {eliminarEspecie} = useEspecie();
    return (
        <div className="bg-gray-900 m-3 rounded flex items-center justify-between">
            <div className="flex">
                <h1 className="text-white ml-5">{esp.nombrecientifio}</h1>
            </div>
            <div className="flex flex-wrap items-center">
                <button className=" text-white hover:bg-blue-500 bg-blue-700 pl-2 pr-2 rounded border m-2 border-blue-700">Ver</button>
                <Link to={`/editar-registrotaxonomico/${esp.id}`}className=" text-white hover:bg-green-500 bg-green-700 pl-2 pr-2 rounded border m-2 border-green-700">Editar</Link>
                <button className=" text-white hover:bg-red-500 bg-red-700  pl-2 pr-2 rounded border m-2 border-red-700" onClick={() => {
                    eliminarEspecie(esp.id);
                }}>Eliminar</button>
            </div>
        </div>
    )
}

export default EspeciesCard