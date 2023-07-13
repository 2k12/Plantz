import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import { AuthProvider } from "./context/AuthContext";
import Breadcrumbs from "./components/Breadcrumbs";


import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import RegistroTaxonomico from "./pages/RegistroTaxonomico";
import NuevoRegistroTaxonomico from "./pages/NuevoRegistro";
import Adminmodulos from "./pages/Admin";
import Especie from "./pages/Especie";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RegistroTaxonomia from "./pages/RegistroTaxonomia";

import ProtectedRoute from "./ProtectedRoute";
import { EspecieProvider } from "./context/RegistroEspecieContext";
import { AdminProvider } from "./context/AdminContext";
function App() {
  return (
    <AuthProvider>
      <EspecieProvider>
        <AdminProvider>
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

                <Route path='/taxonomia' element={<RegistroTaxonomia/>} />
                <Route path='/agregar-taxonomia' element={<NuevoRegistroTaxonomico />} />
                <Route path='/editar-taxonomia/:id' element={<NuevoRegistroTaxonomico />} />
                <Route path='/eliminar-registrotaxonomico' element={<h1>eliminar registro taxonomico</h1>} />
                <Route path='/taxonomia/:id' element={<Especie />} />


                <Route path='/profile' element={<h1>Profile</h1>} />


              </Route>
            </Routes>
            <Footer />
          </BrowserRouter>
        </AdminProvider>
      </EspecieProvider>
    </AuthProvider>
  )
}

export default App