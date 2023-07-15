import { Link } from "react-router-dom";
import imagendefondo from "../assets/fondo.webp";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

import TaxonomiasCard from "../components/TaxonomiasCard";
import { useAdmin } from "../context/AdminContext";
import { useEffect } from "react";


function RegistroTaxonomia() {
    const { leerTaxonomias, taxonomia } = useAdmin();
    // console.log(object);
    useEffect(() => {
        leerTaxonomias()
    }, []);

    
    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 bg-cover bg-center" style={{ backgroundImage: `url(${imagendefondo})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
            {/* <Navbar /> */}

            <div className="text-white dark:text-white text-4xl font-normal tracking-wide absolute left-168 top-228 w-614 h-min-content flex flex-col mt-40 pl-10 md:pl-56 items-center">
                <div className="flex items-center">
                    <span className="mr-2 rEGISTRODEESPECIE text-5xl">
                        Módulo Taxonomía
                    </span>
                    <button className="nuevor bg-gray-900 border border-purple-500 hover:bg-purple-900 text-white font-bold text-sm py-2 px-4 rounded ml-5">
                        <Link to="/agregar-taxonomia"> Nuevo Registro </Link>
                    </button>
                </div>
            </div>

            <div className="flex items-center justify-center h-screen ">
                <div className=" items-center justify-center w-11/12 h-64 md:w-3/4 lg:w-1/2 xl:w-2/3 overflow-y-scroll bg-gradient-to-b from-gray-500 to-gray-400 rounded border border-purple-500">
                    {
                    taxonomia.map((esp) => (
                        <TaxonomiasCard esp={esp}  key={esp.id}/>
                    ))}
                    {/* <p>Contenido del div con barra de desplazamiento</p> */}
                </div>

            </div>

            <div>
                {/* Aquí puedes agregar otros elementos adicionales si es necesario */}
            </div>

            {/* <Footer /> */}
        </div>
    );
}

export default RegistroTaxonomia;
