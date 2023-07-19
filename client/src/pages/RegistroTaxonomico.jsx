import { Link } from "react-router-dom";
import imagendefondo from "../assets/fondo.webp";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

import { useEspecie } from "../context/RegistroEspecieContext";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useAdmin } from "../context/AdminContext";
import DataTable from "../components/DataTable";
import Footer from "../components/Footer";


function RegistroTaxonomico() {
    const { user } = useAuth();
    const { leerEspecies, especie } = useEspecie();
    const { leerEspecies2, especiead } = useAdmin();
    const itemList = especiead;

    const [filteredList, setFilteredList] = useState(itemList);


    const filterBySearch = (event) => {
        // Access input value
        const query = event.target.value;
        // Create copy of item list
        var updatedList = [...itemList];
        // Include all elements which includes the search query
        updatedList = updatedList.filter((esp) => esp.estado.includes(query));
        // Trigger render with updated values
        setFilteredList(updatedList);
    };


    // console.log(object);
    useEffect(() => {
        if (user.rol === "admin") {
            leerEspecies2()
        }
        leerEspecies()
    }, []);

    useEffect(() => {
        setFilteredList(itemList);
    }, [itemList]);

    return (
        <div className="mx-auto flex justify-center" style={{ backgroundImage: `url(${imagendefondo})`, backgroundPosition: 'center', minHeight: '100vh' }}>

            <div className="text-white dark:text-white text-4xl font-normal  absolute left-168 top-228 w-614 h-min-content flex flex-col mt-40 md:pl-56   ">
                <div className="flex  mt-14">
                    <span className="rEGISTRODEESPECIE text-5xl">
                        Registro Especie
                    </span>
                    <button className="nuevor bg-gray-900 border border-purple-500 hover:bg-purple-900 text-white font-bold text-sm py-2 px-4 rounded ml-5">
                        <Link to="/agregar-registrotaxonomico"> Nuevo Registro </Link>
                    </button>
                </div>
            </div>

            <div className="flex items-center justify-center h-screen mt-20">
                <DataTable />
            </div>
        <Footer/>

        </div>
        
    );
}

export default RegistroTaxonomico;
