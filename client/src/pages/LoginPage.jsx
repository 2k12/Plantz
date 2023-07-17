import imagendefondo from "../assets/fondo.webp";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
import FormLogin from "../components/FormLogin";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";


// import FormLogin from "../components/FormLogin";
function LoginPage() {

  const { estalogeado } = useAuth();
  const navigation = useNavigate();

  useEffect(() => {
    if (estalogeado) {
      navigation('/')
    }
  }, [estalogeado]);


  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 bg-cover bg-center" style={{ backgroundImage: `url(${imagendefondo})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      {/* <Navbar /> */}
      <FormLogin />
      {/* <Footer /> */}

    </div>
  )
}

export default LoginPage