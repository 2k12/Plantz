import "./formregistro.css";
import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from 'react';
import { useAdmin } from "../context/AdminContext";
import { useNavigate, useParams } from "react-router-dom";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FormregistroUsuario() {
    const [errorToShow, setErrorToShow] = useState(null);
    const prevErrorsRef = useRef(null);




    const notify = (error) => {
        toast.error(error);
    };

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const { agregarUsuario, leerUsuario, editarUsuario, errores } = useAdmin();
    const navigate = useNavigate();
    const params = useParams();
    const isDisabled = params.id;

    useEffect(() => {
        async function cargarUsuario() {
            if (params.id) {
                const usuariobdd = await leerUsuario(params.id);
                // console.log(usuariobdd);
                setValue('nombre', usuariobdd.nombre)
                setValue('usuario', usuariobdd.usuario)
                setValue('email', usuariobdd.email)
                setValue('contrasena', usuariobdd.contrasena)
                setValue('rol', usuariobdd.rol)
            }
        }
        cargarUsuario();
    }, []);


    const onSubmit = handleSubmit(async (data, e) => {

        e.preventDefault();

        if (params.id) {
            await editarUsuario(params.id, data)

        } else {
            await agregarUsuario(data);

        }
        navigate('/usuarios');

    });

    useEffect(() => {
        // Mostrar notificación solo si hay un mensaje de error
        if (errorToShow !== null) {
            notify(errorToShow);
            setErrorToShow(null); // Reiniciar el estado local para evitar mostrar la notificación nuevamente en futuros cambios de errores
            prevErrorsRef.current = null; // Limpiar los errores previos
        }
    }, [errorToShow]);


    useEffect(() => {
        // Actualizar el mensaje de error para mostrar en la notificación
        if (
            prevErrorsRef.current !== null &&
            prevErrorsRef.current.length > 0 &&
            errores !== null &&
            errores.length > 0 &&
            prevErrorsRef.current !== errores
        ) {
            setErrorToShow(errores.join());
        }
        // Actualizar la referencia prevErrorsRef con el valor actual de errores
        prevErrorsRef.current = errores;
    }, [errores]);

    return (
        <>
            <div className="w-full  container-fluid mx-auto " id="princ">

                <form onSubmit={onSubmit} className={`shadow-md rounded px-8 pt-6 pb-8 mb-4
                w-96 bg-gradient-to-b from-gray-900 to-gray-800 border border-purple-500  transition-opacity duration-400 ease-in`}>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-normal mb-2" htmlFor="nombre">
                            Nombre
                        </label>
                        <input className=" border-gray-300 rounded-md dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 border w-full py-1 px-3 " id="nombre" type="text" {...register('nombre', { required: true })} placeholder="Nombre" />
                        {/* <div className="w-full py-1 relative"> */}
                        {
                            errors.nombre && (
                                <span className="text-red-500 text-sm absolute font-bold" style={{ "fontSize": "14px" }}>
                                    Ingrese un Nombre
                                </span>
                            )
                        }
                        {/* </div> */}
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-normal mb-2" htmlFor="usuario">
                            Usuario
                        </label>
                        <input className="border-gray-300 rounded-md dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 border w-full py-1 px-3 " id="usuario" type="text" {...register('usuario', { required: true })} placeholder="Usuario" />
                        {/* <div className="w-full py-1 "> */}
                        {
                            errors.usuario && (
                                <span className="text-red-500 text-sm font-bold" style={{ "fontSize": "14px", "position": "absolute" }}>
                                    Ingrese un usuario
                                </span>
                            )
                        }
                        {/* </div> */}
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-normal mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="border-gray-300 rounded-md dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 border w-full py-1 px-3 " id="email" type="text" {...register('email', { required: true })} placeholder="Email" />
                        {/* <div className="w-full py-1 "> */}
                        {
                            errors.email && (
                                <span className="text-red-500 text-sm font-bold" style={{ "fontSize": "14px", "position": "absolute" }}>
                                    Ingrese un email
                                </span>
                            )
                        }
                        {/* </div> */}
                    </div>

                    <div className="mb-4">

                        {params.id ? (
                            <>
                                <label className="block text-white text-sm font-normal mb-2" htmlFor="rol">
                                    Rol
                                </label>
                                <input className="border-gray-300 rounded-md dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 border w-full py-1 px-3 " id="rol" type="text" {...register('rol', { required: true })} placeholder="Rol" />
                            </>

                        ) : ("")
                        }
                        {/* <div className="w-full py-1 "> */}
                        {
                            errors.rol && (
                                <span className="text-red-500 text-sm font-bold" style={{ "fontSize": "14px", "position": "absolute" }}>
                                    Ingrese una rol
                                </span>
                            )
                        }
                        {/* </div> */}
                    </div>
                    <div className="mb-9">
                        <label className="block text-white text-sm font-normal mb-2" htmlFor="contrasena">
                            Contraseña
                        </label>
                        <input className="border-gray-300 rounded-md dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 border w-full py-1 px-3 " id="contrasena" type={isDisabled ? 'text' : 'password'}
                            {...register('contrasena', { required: true })}
                            placeholder="**********"
                            disabled={isDisabled} />
                        {/* <div className="w-full py-1 "> */}
                        {
                            errors.contrasena && (
                                <span className="text-red-500 text-sm font-bold" style={{ "fontSize": "14px", "position": "absolute" }}>
                                    Ingrese una contraseña
                                </span>
                            )
                        }
                        {/* </div> */}
                    </div>

                    <div className="flex items-center justify-between">
                        <button className="bg-green-700 dark:hover:bg-green-500 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline w-full" >
                            Aceptar
                        </button>
                    </div>

                </form>

            </div>

        </>

    )
}

export default FormregistroUsuario