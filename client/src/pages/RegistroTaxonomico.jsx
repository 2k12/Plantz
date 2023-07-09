import imagendefondo from "../assets/fondo.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function RegistroTaxonomico() {
    return (
        <div style={{ backgroundImage: `url(${imagendefondo})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
            <Navbar />

            <div className="text-white dark:text-white text-4xl font-normal tracking-wide absolute flex-col mt-40 pl-10 md:pl-56 items-center w-full pb-3">
                <div className="flex items-center">
                    <span className="mr-2 rEGISTRODEESPECIE text-5xl">
                        Registro Especie
                    </span>
                    <button className="nuevor bg-gray-900 border border-purple-500 hover:bg-purple-900 text-white font-bold text-sm py-2 px-4 rounded ml-5 mt-3">
                        <a href="agregar-registrotaxonomico"> Nuevo Registro </a>
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default RegistroTaxonomico;
