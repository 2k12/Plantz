import imagendefondo from "../assets/fondo.webp";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
import FormRegistroUsuario from "../components/FormRegistroUsuario";

function Usuario() {

    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 bg-cover bg-center" style={{ backgroundImage: `url(${imagendefondo})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
            <FormRegistroUsuario />
        </div>
    )
}

export default Usuario