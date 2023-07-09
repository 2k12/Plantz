import "./formregistro.css";
import { useForm } from "react-hook-form";
import { useEffect, useState } from 'react';
import { useAuth } from "../context/AuthContext";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Formregistro() {
    const [loaded, setLoaded] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { iniciodeSesion, errores } = useAuth();

    const notify = (errors) => {
        toast.error(errors.join(' 📍 '), {
            className: 'foo-bar',
            theme: 'dark',
        });
    };


    const onSubmit = handleSubmit(async (values) => {
        await iniciodeSesion(values);
        if (errores.length > 0) {
            notify(errores);
        }
    });



    useEffect(() => {
        // Simulación de carga de página
        setTimeout(() => {
            setLoaded(true);
        }, 200); // Puedes ajustar el tiempo de retardo según tus necesidades
    }, []);





    return (
        <>
            <div className="w-full  container-fluid mx-auto " id="princ">

                <form onSubmit={onSubmit} className={`shadow-md rounded px-8 pt-6 pb-8 mb-4 w-80 bg-gradient-to-b from-gray-900 to-gray-800 border border-purple-500  transition-opacity duration-400 ease-in ${loaded ? 'opacity-100' : 'opacity-0'}`}>

                    <div className="mb-4">
                        <label className="block text-white text-sm font-normal mb-2" htmlFor="nombre">
                            Nombre
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nombre" type="text" {...register('nombre', { required: true })} placeholder="Nombre" />
                        {
                            errors.nombre && (
                                <p className="text-red-500">
                                    Ingrese un Nombre
                                </p>
                            )
                        }
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-normal mb-2" htmlFor="usuario">
                            Usuario
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="usuario" type="text" {...register('usuario', { required: true })} placeholder="Usuario" />
                        {
                            errors.usuario && (
                                <p className="text-red-500">
                                    Ingrese un usuario
                                </p>
                            )
                        }
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-normal mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" {...register('email', { required: true })} placeholder="Email" />
                        {
                            errors.email && (
                                <p className="text-red-500">
                                    Ingrese un email
                                </p>
                            )
                        }
                    </div>
                    <div className="mb-6">
                        <label className="block text-white text-sm font-normal mb-2" htmlFor="contrasena">
                            Contraseña
                        </label>
                        <input className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="contrasena" type="password" {...register('contrasena', { required: true })} placeholder="**********" />
                        {
                            errors.contrasena && (
                                <p className="text-red-500">
                                    Ingrese una contraseña
                                </p>
                            )
                        }

                    </div>

                    <div className="flex items-center justify-between">
                        <button className="bg-green-700 dark:hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="submit" >
                            Registrar
                        </button>
                        {/* <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                        </a> */}
                    </div>
                    {/* {errores.map((error, i) => (

                        <div className="  text-purple-500" key={i}>
                            {'📍' + error}
                        </div>))} */}
                </form>
                <ToastContainer style={{fontSize: "14px", marginTop: "5em"}} />

            </div>

        </>

    )
}

export default Formregistro