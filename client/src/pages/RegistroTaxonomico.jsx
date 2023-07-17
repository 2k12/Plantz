import { Link } from "react-router-dom";
import imagendefondo from "../assets/fondo.webp";
// import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import EspecieCard from "../components/EspeciesCard";
import { useEspecie } from "../context/RegistroEspecieContext";
import { useEffect , useState} from "react";
import { useAuth } from "../context/AuthContext";
import { useAdmin } from "../context/AdminContext";


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
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 bg-cover bg-center" style={{ backgroundImage: `url(${imagendefondo})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
            {/* <Navbar /> */}

            <div className="text-white dark:text-white text-4xl font-normal  absolute left-168 top-228 w-614 h-min-content flex flex-col mt-40 md:pl-56   ">
                <div className="flex  mt-14">
                    <span className="ml-4 rEGISTRODEESPECIE text-5xl">
                        Registro Especie
                    </span>
                    <button className="nuevor bg-gray-900 border border-purple-500 hover:bg-purple-900 text-white font-bold text-sm py-2 px-4 rounded ml-5">
                        <Link to="/agregar-registrotaxonomico"> Nuevo Registro </Link>
                    </button>
                </div>
            </div>

            <div className="flex items-center justify-center h-screen ">
                <div className="absolute w-11/12 md:w-3/4 lg:w-1/2 xl:w-2/3 top-1/4 mt-20">
                    <input
                        id="search-box"
                        className="w-full h-10 border border-purple-500 rounded dark:text-white focus:outline-none dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 pl-2"
                        placeholder="Ingrese una especie"
                        onChange={filterBySearch}
                    />
                </div>
                <div className="w-11/12 h-3/6 md:w-3/4 lg:w-1/2 xl:w-2/3 overflow-y-scroll bg-gradient-to-b from-gray-500 to-gray-400 rounded border border-purple-500 mt-64">
                    {user.rol !== "admin" ? (
                        especie.map((esp) => (
                            <EspecieCard esp={esp} key={esp.id} />
                        ))) : (filteredList.map((esp) => (
                            <EspecieCard esp={esp} key={esp.nombrecientifio} />
                        )))}
                    {/* <p>Contenido del div con barra de desplazamiento</p> */}
                </div>

            </div>

            <div>
                {/* Aquí puedes agregar otros elementos adicionales si es necesario */}
            </div>

            <Footer />
        </div>
    );
}

export default RegistroTaxonomico;
