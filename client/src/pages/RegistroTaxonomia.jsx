import { Link } from "react-router-dom";
import imagendefondo from "../assets/fondo.webp";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

import TaxonomiasCard from "../components/TaxonomiasCard";
import { useAdmin } from "../context/AdminContext";
import { useEffect } from "react";
import DataTable from "../components/DataTable";


function RegistroTaxonomia() {
    const { leerTaxonomias} = useAdmin();
    // console.log(object);
    useEffect(() => {
        leerTaxonomias()
    }, []);

    
    return (
        <div className="mx-auto flex justify-center" style={{ backgroundImage: `url(${imagendefondo})`, backgroundPosition: 'center', minHeight: '100vh' }}>

            <div className="text-white dark:text-white text-4xl font-normal  absolute left-168 top-228 w-614 h-min-content flex flex-col mt-40 md:pl-56  ">
                <div className="flex  ">
                    <span className="rEGISTRODEESPECIE text-5xl">
                        Registro Taxonomía
                    </span>
                    <button className="nuevor bg-gray-900 border border-purple-500 hover:bg-purple-900 text-white font-bold text-sm py-2 px-4 rounded ml-5">
                        <Link to="/agregar-taxonomia"> Nuevo Registro </Link>
                    </button>
                </div>
            </div>

          

            <DataTable/>
            {/* <Footer /> */}
        </div>
    );
}

export default RegistroTaxonomia;
