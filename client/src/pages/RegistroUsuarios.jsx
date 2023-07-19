import { Link } from "react-router-dom";
import imagendefondo from "../assets/fondo.webp";
import { useEffect } from "react";
import {  useAdmin } from "../context/AdminContext";
import DataTable from "../components/DataTable";
function RegistroTaxonomico() {
    const { leerUsuarios, usuarios} = useAdmin();
    useEffect(() => {
        leerUsuarios()
    }, []);
    return (
        <div  style={{ backgroundImage: `url(${imagendefondo})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
            <div className="text-white dark:text-white text-4xl font-normal tracking-wide absolute left-168 top-228 w-614 h-min-content flex flex-col mt-40 pl-10 md:pl-56 ">
                <div className="flex ">
                    <span className="mr-2 rEGISTRODEESPECIE text-5xl">
                        Registro Usuarios
                    </span>
                    <button className="nuevor bg-gray-900 border border-purple-500 hover:bg-purple-900 text-white font-bold text-sm py-2 px-4 rounded ml-5">
                        <Link to="/agregar-usuario"> Nuevo Registro </Link>
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-center h-screen ">
                {/* <div className=" items-center justify-center w-11/12 h-64 md:w-3/4 lg:w-1/2 xl:w-2/3 overflow-y-scroll bg-gradient-to-b from-gray-500 to-gray-400 rounded border border-purple-500"> */}
                    {/* { 
                    usuarios.map((esp) => (
                        <UsuarioCard esp={esp}  key={esp.id}/>
                    ))
                    } */}
            <DataTable/>

                {/* </div> */}

            </div>
            {/* <div>

            </div> */}
        </div>
    );
}

export default RegistroTaxonomico;
