import imagendefondo from "../assets/fondo.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import FormRegistroTax from "../components/FormRegistroTaxonomico";
import "./rt.css";
function RegistroTaxonomico() {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 bg-cover bg-center" style={{ backgroundImage: `url(${imagendefondo})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
            RegistroTaxonomico
            <Navbar />
            <div className=" text-white dark:text-white text-4xl font-normal tracking-wide absolute left-168 top-228 w-614 h-min-content flex flex-col mt-40 pl-10 md:pl-56 items-center">
                <div className="flex items-center">
                    <span className="mr-2 rEGISTRODEESPECIE text-5xl">Registro Especie</span>
                    <button className=" nuevor bg-gray-900 border border-purple-500 hover:bg-purple-900  
                    text-white font-bold text-sm py-2 px-4 rounded ml-5"> <a href="agregar-registrotaxonomico"> Nuevo Registro </a></button>
                </div>
            </div>


            <Footer />
        </div>
    )
}

export default RegistroTaxonomico