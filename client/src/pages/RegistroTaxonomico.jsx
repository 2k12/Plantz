import imagendefondo from "../assets/fondo.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEspecie } from "../context/RegistroEspecieContext";
import { useEffect } from "react";

function RegistroTaxonomico() {
    const { leerEspecies, especie } = useEspecie();

    useEffect(() => {
        leerEspecies();
    }, []);


    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 bg-cover bg-center" style={{ backgroundImage: `url(${imagendefondo})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
            <Navbar />

            <div className="text-white dark:text-white text-4xl font-normal tracking-wide absolute left-168 top-228 w-614 h-min-content flex flex-col mt-40 pl-10 md:pl-56 items-center">
                <div className="flex items-center">
                    <span className="mr-2 rEGISTRODEESPECIE text-5xl">
                        Registro Especie
                    </span>
                    <button className="nuevor bg-gray-900 border border-purple-500 hover:bg-purple-900 text-white font-bold text-sm py-2 px-4 rounded ml-5">
                        <a href="agregar-registrotaxonomico"> Nuevo Registro </a>
                    </button>
                </div>
            </div>

            <div className="flex items-center justify-center h-screen ">
                <div className=" items-center justify-center w-11/12 h-64 md:w-3/4 lg:w-1/2 xl:w-2/3 overflow-y-scroll bg-gradient-to-b from-gray-500 to-gray-400 rounded border border-purple-500">
                    {especie.map(esp => (
                        <div className="bg-gray-900 m-3 rounded flex items-center justify-between" key={esp.id}>
                            <div className="flex">
                                <h1 className="text-white">{esp.nombrecientifio}</h1>
                            </div>
                            <div className="flex flex-wrap items-center">
                                <button className="bg-gray-900 text-white rounded border m-2 border-purple-500">Ver</button>
                                <button className="bg-gray-900 text-white rounded border m-2 border-purple-500">Editar</button>
                                <button className="bg-gray-900 text-white rounded border m-2 border-purple-500">Eliminar</button>
                            </div>
                        </div>
                    ))}
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
