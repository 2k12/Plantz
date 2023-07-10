import imagendefondo from "../assets/fondo.png";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
import Formregistro from "../components/Formregistro";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function RegisterPage() {
  const { estalogeado } = useAuth();
  const navigation = useNavigate();

  useEffect(()=> {
    if(estalogeado){
      navigation ('/')
    }
  },[estalogeado]);
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 bg-cover bg-center" style={{ backgroundImage: `url(${imagendefondo})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      {/* <Navbar /> */}
      <Formregistro/>
      {/* <Footer /> */}

    </div>
  )
}

export default RegisterPage