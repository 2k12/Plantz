import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import { AuthProvider } from "./context/AuthContext";
import Breadcrumbs from "./components/Breadcrumbs";


import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import RegistroTaxonomico from "./pages/RegistroTaxonomico";
import NuevoRegistroTaxonomico from "./pages/NuevoRegistro";


import ProtectedRoute from "./ProtectedRoute";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Breadcrumbs />
        <Routes>
          <Route path='/' element={<IndexPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />

          <Route element={<ProtectedRoute />}>
            <Route path='/registrotaxonomico' element={<RegistroTaxonomico />} />
            <Route path='/agregar-registrotaxonomico' element={<NuevoRegistroTaxonomico />} />
            <Route path='/editar-registrotaxonomico' element={<h1>editar registro taxonomico</h1>} />
            <Route path='/eliminar-registrotaxonomico' element={<h1>eliminar registro taxonomico</h1>} />
            <Route path='/registrotaxonomico/:id' element={<h1>Mostrar un registro economico</h1>} />

            <Route path='/profile' element={<h1>Profile</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App