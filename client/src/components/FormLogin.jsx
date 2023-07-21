import "./formregistro.css";
import { useForm } from "react-hook-form";
import { useEffect, useState, useRef } from 'react';
import { useAuth } from "../context/AuthContext";


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function FormLogin() {

    const [loaded, setLoaded] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { login, errores } = useAuth();
    const prevErrorsRef = useRef(null);

    const [errorToShow, setErrorToShow] = useState(null);


    const notify = (error) => {
        toast.error(error);
    };


    const onSubmit = handleSubmit(async (values) => {
        await login(values);

    });



    useEffect(() => {
        // Simulación de carga de página
        setTimeout(() => {
            setLoaded(true);
        }, 200); // Puedes ajustar el tiempo de retardo según tus necesidades
    }, []);


    // useEffect(() => {
    //     // Mostrar notificación solo si hay cambios en el estado errores
    //     if (prevErrorsRef.current !== null && prevErrorsRef.current.length > 0 && errores !== null && errores.length > 0 && prevErrorsRef.current !== errores) {
    //         notify(errores.join());
    //     }
    //     // Actualizar la referencia prevErrorsRef con el valor actual de errores
    //     prevErrorsRef.current = errores;
    // }, [errores]);

    useEffect(() => {
        // Mostrar notificación solo si hay un mensaje de error
        if (errorToShow !== null) {
          notify(errorToShow);
          setErrorToShow(null); // Reiniciar el estado local para evitar mostrar la notificación nuevamente en futuros cambios de errores
        }
      }, [errorToShow]);
    
      useEffect(() => {
        // Actualizar el mensaje de error para mostrar en la notificación
        if (prevErrorsRef.current !== null && prevErrorsRef.current.length > 0 && errores !== null && errores.length > 0 && prevErrorsRef.current !== errores) {
          setErrorToShow(errores.join());
        }
        // Actualizar la referencia prevErrorsRef con el valor actual de errores
        prevErrorsRef.current = errores;
      }, [errores]);

    return (
        <>
            <div className="w-full  container-fluid mx-auto " id="princ">

                <form onSubmit={onSubmit} className={`shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96 bg-gradient-to-b from-gray-900 to-gray-800 border border-purple-500  transition-opacity duration-400 ease-in ${loaded ? 'opacity-100' : 'opacity-0'}`}>


                    <div className="mb-4">
                        <label className="block text-white text-sm font-normal mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="border-gray-300 rounded-md dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 py-1 px-3 w-full" id="email" type="email" {...register('email', { required: true })} placeholder="Email" />
                        {
                            errors.email && (
                                <p className="text-red-500">
                                    Ingrese un email
                                </p>
                            )
                        }
                    </div>
                    <div className="mb-9">
                        <label className="block text-white text-sm font-normal mb-2" htmlFor="contrasena">
                            Contraseña
                        </label>
                        <input className="border-gray-300 rounded-md dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 py-1 px-3 w-full" id="contrasena" type="password" {...register('contrasena', { required: true })} placeholder="**********" />
                        {
                            errors.contrasena && (
                                <p className="text-red-500">
                                    Ingrese una contraseña
                                </p>
                            )
                        }

                    </div>

                    <div className="flex items-center justify-between">
                        <button className="bg-green-700 dark:hover:bg-green-500 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline w-full" type="submit" >
                            Ingresar
                        </button>

                    </div>
                </form>

            </div>

        </>

    )
}

export default FormLogin