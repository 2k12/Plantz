import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import { AuthProvider } from "./context/AuthContext";
import Breadcrumbs from "./components/Breadcrumbs";


import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import RegistroTaxonomico from "./pages/RegistroTaxonomico";
import NuevoRegistroTaxonomico from "./pages/NuevoRegistro";
import NuevoRegistroTaxonomia from "./pages/NuevoRegistroTaxonomia";
import NuevoRegistroUsuario from "./pages/NuevoRegistroUsuario";
import Adminmodulos from "./pages/Admin";
import Especie from "./pages/Especie";
import Taxonomia from "./pages/Taxonomia";
import Usuario from "./pages/Usuario";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RegistroTaxonomia from "./pages/RegistroTaxonomia";
import RegistroUsuarios from "./pages/RegistroUsuarios";

import ProtectedRoute from "./ProtectedRoute";
import { EspecieProvider } from "./context/RegistroEspecieContext";
import { AdminProvider } from "./context/AdminContext";
function App() {
  return (
    <AuthProvider>
      <AdminProvider>

        <EspecieProvider>
          <BrowserRouter>
            <Breadcrumbs />
            <Navbar />

            <Routes>
              <Route path='/' element={<IndexPage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/register' element={<RegisterPage />} />

              <Route element={<ProtectedRoute />}>

                <Route path='/registrotaxonomico' element={<RegistroTaxonomico />} />
                <Route path='/agregar-registrotaxonomico' element={<NuevoRegistroTaxonomico />} />
                <Route path='/editar-registrotaxonomico/:id' element={<NuevoRegistroTaxonomico />} />
                <Route path='/eliminar-registrotaxonomico' element={<h1>eliminar registro taxonomico</h1>} />
                <Route path='/registrotaxonomico/:id' element={<Especie />} />


                <Route path='/adminmodulos' element={<Adminmodulos />} />

                <Route path='/taxonomia' element={<RegistroTaxonomia />} />
                <Route path='/agregar-taxonomia' element={<NuevoRegistroTaxonomia />} />
                <Route path='/editar-taxonomia/:id' element={<NuevoRegistroTaxonomia />} />
                <Route path='/eliminar-registrotaxonomico' element={<h1>eliminar registro taxonomico</h1>} />
                <Route path='/taxonomia/:id' element={<Taxonomia />} />

                <Route path='/usuarios' element={<RegistroUsuarios />} />
                <Route path='/agregar-usuario' element={<NuevoRegistroUsuario />} />
                <Route path='/editar-usuario/:id' element={<NuevoRegistroUsuario />} />
                <Route path='/eliminar-registrotaxonomico' element={<h1>eliminar registro taxonomico</h1>} />

                <Route path='/usuarios/:id' element={<Usuario />} />

                {/* faltas este ↓↓ */}
                <Route path='/profile' element={<h1>Profile</h1>} />


              </Route>
            </Routes>
            <Footer />
          </BrowserRouter>
        </EspecieProvider>
      </AdminProvider>

    </AuthProvider>
  )
}

export default App