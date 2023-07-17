import { useAuth } from "./context/AuthContext";
import {  Navigate , Outlet} from "react-router-dom";
function ProtectedRoute() {
    const {user, estalogeado, loading} = useAuth();

    console.log(loading, estalogeado);
    
    if(loading) return <h1>
        Loading...
    </h1>
    if(!loading && !estalogeado) return <Navigate to='/login' replace/>;
    return <Outlet/>;
}

export default ProtectedRoute