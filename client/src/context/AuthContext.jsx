import { createContext, useState, useContext, useEffect } from "react";
import { peticionregistro, peticionlogin, verificarlapeticiondeToken } from "../api/auth";
import Cookies from "js-cookie";
export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('El useAuth deberia estar dentro de un provider')
    }
    return context;
}
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [estalogeado, setEstalogeado] = useState(false);

    const [errores, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);

    const iniciodeSesion = async (user) => {
        try {
            const res = await peticionregistro(user);
            console.log(res.data);
            setUser(res.data);
            setEstalogeado(true);
        } catch (error) {
            console.log(error.response);
            if (error.response) {
                setErrors(error.response.data.error);
            }
            // else {
            //     setErrors([]);
            // }
        }
    }


    const login = async (user) => {
        try {
            const res = await peticionlogin(user);
            console.log(res.data);
            setUser(res.data);
            setEstalogeado(true);
        } catch (error) {
            console.log(error.response);
            if (error.response) {
                setErrors(error.response.data.error);
            }
        }
    }

    useEffect(() => {
        async function checkLogin() {
            const cookies = Cookies.get();

            if (!cookies.token) {
                setEstalogeado(false);
                setLoading(false);
                return setUser(null);
            }

            try {
                const res = await verificarlapeticiondeToken(cookies.token);
                if (!res.data) {
                    setLoading(false);
                    setEstalogeado(false);
                    return;
                }
                setLoading(false);
                setEstalogeado(true);
                setUser(res.data)

            } catch (error) {
                setLoading(false);
                setEstalogeado(false);
                setUser(null)
            }
        }

        checkLogin();
    }, [])

    return (
        <AuthContext.Provider
            value={{
                iniciodeSesion,
                login,
                user,
                estalogeado,
                errores,
                loading
            }}>

            {children}

        </AuthContext.Provider>
    )

}
