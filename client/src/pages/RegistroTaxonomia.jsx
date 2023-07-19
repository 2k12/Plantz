import { Link } from "react-router-dom";
import imagendefondo from "../assets/fondo.webp";
import { useAdmin } from "../context/AdminContext";
import { useEffect } from "react";
import DataTable from "../components/DataTable";
import './class.css'


function RegistroTaxonomia() {
    const { leerTaxonomias } = useAdmin();
    // console.log(object);
    useEffect(() => {
        leerTaxonomias()
    }, []);


    return (
        <div className="mx-auto flex justify-center" style={{ backgroundImage: `url(${imagendefondo})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
            <div className="container mx-auto pt-28">
                <div className="text-white pt-32 dark:text-white text-4xl font-normal absolute left-0 md:left-168 top-0 md:top-228 w-full md:w-614 h-min-content flex flex-col md:pl-56">
                    <div className="flex mt-28 absolute pb-20">
                        <span className="rEGISTRODEESPECIE text-5xl lg:text-5xl  md:text-6xl sm:text-4xl">
                            Taxonomías
                        </span>
                        <button className="nuevor bg-gray-900 border border-purple-500 hover:bg-purple-900 text-white font-bold text-sm py-2 px-4 rounded ml-5">
                            <Link to="/agregar-taxonomia"> Agregar </Link>
                        </button>
                    </div>
                </div>

                <div className="mt-32">
                    <DataTable />
                </div>
                <div className="h-20"></div>
            </div>
            {/* <Footer /> */}

        </div>
    );
}

export default RegistroTaxonomia;
