import imagendefondo from "../assets/fondo.webp";
// import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import EspecieCard from "../components/EspeciesCard";
import { useUserall } from "../context/UserallContext";
import { useEffect, useState } from "react";
function RegistroTaxonomico() {
    const { leerEspecies3, especieall } = useUserall();
    const itemList = especieall;
    const [filteredList, setFilteredList] = useState(itemList);



    const filterBySearch = (event) => {
        // Access input value
        const query = event.target.value;
        // Create copy of item list
        var updatedList = [...itemList];
        // Include all elements which includes the search query
        updatedList = updatedList.filter((esp) => esp.nombrecientifio.includes(query));
        // Trigger render with updated values
        setFilteredList(updatedList);
    };


    useEffect(() => {
        leerEspecies3();
    }, []);

    useEffect(() => {
        setFilteredList(itemList);
    }, [itemList]);

    return (

        <div className="bg-gradient-to-r from-blue-500 to-purple-500 bg-cover bg-center" style={{ backgroundImage: `url(${imagendefondo})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
            <div className="text-white dark:text-white text-4xl font-normal  absolute left-168 top-228 w-614 h-min-content flex flex-col mt-40 md:pl-56   ">
                <div className="flex  mt-14">
                    <span className="ml-4 rEGISTRODEESPECIE text-5xl">Especies</span>
                </div>
            </div>

            <div className="flex items-center justify-center h-screen">
                <div className="absolute w-11/12 md:w-3/4 lg:w-1/2 xl:w-2/3 top-1/4 mt-20">
                    <input
                        id="search-box"
                        className="w-full h-10 border border-purple-500 rounded dark:text-white focus:outline-none dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 pl-2"
                        placeholder="Ingrese una especie"
                        onChange={filterBySearch}
                    />
                </div>

                <div className="w-11/12 h-3/6 md:w-3/4 lg:w-1/2 xl:w-2/3 overflow-y-scroll bg-gradient-to-b from-gray-500 to-gray-400 rounded border border-purple-500 mt-64">
                    {filteredList.map((esp) => (
                        <EspecieCard esp={esp} key={esp.nombrecientifio} />
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );

}

export default RegistroTaxonomico;
