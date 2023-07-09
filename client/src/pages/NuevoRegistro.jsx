import imagendefondo from "../assets/fondo.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FormRegistroTax from "../components/FormRegistroTaxonomico";

function NuevoRegistro() {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 bg-cover bg-center" style={{ backgroundImage: `url(${imagendefondo})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
            RegistroTaxonomico
            <Navbar />
            <FormRegistroTax />


            <Footer />
        </div>
    )
}

export default NuevoRegistro