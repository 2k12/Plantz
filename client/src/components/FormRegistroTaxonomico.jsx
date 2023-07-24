import { useEffect, useState, useRef } from "react";
import './nuevaespecie.css';
import { useForm } from "react-hook-form";
import { useEspecie } from "../context/RegistroEspecieContext";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useAdmin } from "../context/AdminContext";
import "./formregistrotaxonomico.css"

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Stepper() {


    const [currentStep, setCurrentStep] = useState(1);
    const [formErrors, setFormErrors] = useState({});
    const prevErrorsRef = useRef(null);
    const [errorToShow, setErrorToShow] = useState(null);


    const notify = (error) => {
        toast.error(error);
    };



    const handleValidation = (data) => {
        const errors = {};
        if (!data.descripcion) {
            errors.descripcion = "Ingrese una Descripción";
        }
        if (!data.filo) {
            errors.filo = "Ingrese un Filo";
        }
        if (!data.clase) {
            errors.clase = "Ingrese una Clase";
        }
        if (!data.orden) {
            errors.orden = "Ingrese un Orden";
        }
        // Agrega más validaciones según tus necesidades

        return errors;
    };

    const handleStepClick = (step) => {
        setCurrentStep(step);
    };

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const { agregarEspecie, leerEspecie, editarEspecie, errores } = useEspecie();
    const { agregarEspecie2, leerEspecie2, editarEspecie2, erroresad } = useAdmin();


    const navigate = useNavigate();
    const params = useParams();
    const [imagen, setImagen] = useState(null);
    const { user } = useAuth();

    useEffect(() => {
        if (user.rol === "taxonomo" || user.rol === "dig") {
            async function cargarEspecie() {
                if (params.id) {
                    const especiebdd = await leerEspecie(params.id);
                    // console.log(especiebdd)
                    setValue('nco', especiebdd.nombre_comun)
                    setValue('nci', especiebdd.nombre_cientifico)
                    setValue('descripcion', especiebdd.descripcion)
                    setValue('reino', especiebdd.reino)
                    setValue('filo', especiebdd.filo)
                    setValue('clase', especiebdd.clase)
                    setValue('orden', especiebdd.orden)
                    setValue('familia', especiebdd.familia)
                    setValue('genero', especiebdd.genero)
                    setValue('especie', especiebdd.especie)
                    setValue('estado', especiebdd.estado)
                }
            }
            cargarEspecie();
        } else {
            async function cargarEspeciead() {
                if (params.id) {
                    const especiebdd = await leerEspecie2(params.id);
                    // console.log(especiebdd)
                    setValue('nco', especiebdd.nombre_comun)
                    setValue('nci', especiebdd.nombre_cientifico)
                    setValue('descripcion', especiebdd.descripcion)
                    setValue('reino', especiebdd.reino)
                    setValue('filo', especiebdd.filo)
                    setValue('clase', especiebdd.clase)
                    setValue('orden', especiebdd.orden)
                    setValue('familia', especiebdd.familia)
                    setValue('genero', especiebdd.genero)
                    setValue('especie', especiebdd.especie)
                    setValue('estado', especiebdd.estado)
                }
            }
            cargarEspeciead();
        }

    }, []);

    const handleImagenChange = (e) => {
        const files = e.target.files;
        if (files.length > 4) {
            // Si se seleccionan más de 4 imágenes, solo tomamos las primeras 4
            const slicedFiles = Array.from(files).slice(0, 4);
            setImagen(slicedFiles);
        } else {
            setImagen(Array.from(files));
        }

    };

    const onSubmit = handleSubmit(async (data, e) => {
        e.preventDefault();

        if (user.rol === "taxonomo" || user.rol === "dig") {
            const formData = new FormData();

            if (!params.id) {
                for (let i = 0; i < imagen.length; i++) {
                    formData.append('imagenm', imagen[i]);
                }
            }
            // console.log(imagen)
            formData.append('reino', data.reino);
            formData.append('filo', data.filo);
            formData.append('clase', data.clase);
            formData.append('orden', data.orden);
            formData.append('familia', data.familia);
            formData.append('genero', data.genero);
            formData.append('especie', data.especie);
            formData.append('nci', data.nci);
            formData.append('nco', data.nco);
            formData.append('descripcion', data.descripcion);
            formData.append('estado', data.estado);


            if (params.id) {
                await editarEspecie(params.id, formData)

            } else {
                await agregarEspecie(formData);
            }
            navigate('/registrotaxonomico');

        }
        else {
            const formData = new FormData();
            formData.append('imagenm', imagen);
            formData.append('reino', data.reino);
            formData.append('filo', data.filo);
            formData.append('clase', data.clase);
            formData.append('orden', data.orden);
            formData.append('familia', data.familia);
            formData.append('genero', data.genero);
            formData.append('especie', data.especie);
            formData.append('nci', data.nci);
            formData.append('nco', data.nco);
            formData.append('descripcion', data.descripcion);
            formData.append('estado', data.estado);
           

            if (params.id) {
                await editarEspecie2(params.id, formData)
            } else {
                await agregarEspecie2(formData);
            }
            navigate('/registrotaxonomico');

        }




    });

    const [formValues, setFormValues] = useState({
        genero: '',
        especie: '',
        nci: '',
    });
    useEffect(() => {
        // Este useEffect se encarga de sincronizar los valores del formulario con setValue
        setValue('genero', formValues.genero);
        setValue('especie', formValues.especie);
        setValue('nci', formValues.nci);
    }, [formValues, setValue]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevFormValues) => ({
            ...prevFormValues,
            [name]: value,
            // nci: name === 'genero' || name === 'especie' ? `${prevFormValues.especie}${prevFormValues[name]}` : prevFormValues.nci,
            nci: name === 'genero' || name === 'especie' ? `${prevFormValues[name]} ${prevFormValues.especie}` : prevFormValues.nci,
        }));
        setFormErrors(handleValidation({ ...formValues, [name]: value }));
    };

    const handleNextClick = () => {
        // Realiza la validación del formulario actual antes de avanzar al siguiente
        const errors = handleValidation(formValues);
        if (Object.keys(errors).length > 0) {
            // Si hay errores, muestra los mensajes de error en el primer formulario
            setFormErrors(errors);
        } else {
            // Si no hay errores, avanza al siguiente formulario
            setCurrentStep(2);
        }
    };


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

        <div className="flex flex-col items-center mt-36 w-96 container-fluid mx-auto ">
            <div className="w-full max-w-xl p-8 bg-gray-900 rounded-lg shadow-md relative border border-purple-500">
                <div className="flex justify-between mb-8 pl-10 pr-10">
                    <div
                        className={` z-10 w-10 h-10 flex items-center justify-center rounded-full  text-gray-400 font-bold cursor-pointer ${currentStep === 1 ? "ring-4 ring-offset-2 ring-purple-500 bg-gray-900 text-purple-500" : "bg-gray-500 border border-purple-500"
                            }`}
                        onClick={() => handleStepClick(1)}
                    >
                        1
                    </div>
                    {/* <div className="w-px h-6 bg-gray-300"></div> */}
                    <div
                        className={` z-10 w-10 h-10 flex items-center justify-center rounded-full  text-gray-400 font-bold cursor-pointer  ${currentStep === 2 ? "ring-4 ring-offset-2 ring-purple-500 bg-gray-900 text-purple-500" : "bg-gray-500 border border-purple-500"
                            }`}
                        onClick={() => {
                            handleNextClick()
                            handleStepClick(2)
                        }}
                    >
                        2
                    </div>
                </div>


                {/* Línea que conecta los steps */}
                <div className="absolute h-1 w-full  bg-purple-500 top-12 left-0 right-0"></div>


                {currentStep === 1 && (
                    <>
                        {/* <h2 id='nuevaespecie' className="text-2xl font-bold mb-4 text-white mx-auto">Registro de Nueva Especie</h2> */}
                        <form className="w-80 mx-auto" onSubmit={onSubmit}>
                            {params.id ? (
                                <div className="mb-4">

                                    <label className="block mb-2  text-gray-900 dark:text-white text-sm font-normal " htmlFor="file_input">Estado</label>
                                    <input className="w-full px-3 py-1 border border-gray-300 rounded-md dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="text" name="estado" placeholder="Estado"
                                        {...register('estado', { required: true })} readOnly={user.rol === 'dig'}
                                    />
                                    {
                                        errors.estado && (
                                            <p className="text-red-500">
                                                Ingrese una Estado
                                            </p>
                                        )
                                    }

                                </div>
                            ) : (

                                <div className="mb-4">
                                    <label className="block mb-2 text-sm  text-gray-900 dark:text-white" htmlFor="multiple_files">Subir Archivos</label>
                                    <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 py-1 pb-0" id="multiple_files" type="file" multiple name="imagenm"
                                        {...register('imagenm', { required: true })}
                                        onChange={handleImagenChange}
                                    />
                                    {
                                        errors.imagenm && (
                                            <p className="text-red-500">
                                                Cargar 4 imagenes, unicamente se enviaran las 4 primeras
                                            </p>
                                        )
                                    }
                                    {imagen?.length > 0 && (
                                        <div className="mt-4">
                                            <p className="text-white text-sm">Imágenes seleccionadas</p>
                                            <div className="grid grid-cols-4 gap-4 mt-2 border border-purple-500 rounded p-1">
                                                {imagen.map((file, index) => (
                                                    <div key={index}>
                                                        <img
                                                            src={URL.createObjectURL(file)}
                                                            alt={`Imagen ${index + 1}`}
                                                            className="w-full h-auto rounded-lg"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                            <div className="mb-4">

                                <div className="relative mt-8 mb-3" data-te-input-wrapper-init>
                                    <textarea
                                        className="pt-7 bg-gray-700 peer block min-h-[auto] w-full rounded border border-gray-600  px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 "
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                        {...register('descripcion', { required: true })}
                                        onChange={handleChange}

                                    ></textarea>
                                    {
                                        formErrors.descripcion && (
                                            <p className="text-red-500">
                                                {formErrors.descripcion}
                                            </p>
                                        )
                                    }
                                    <label
                                        htmlFor="exampleFormControlTextarea1"
                                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary text-sm"
                                    >Descripción de la Especie</label
                                    >

                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="block mb-2 font-normal text-sm text-white">Reino</label>
                                {params.id ? (
                                    <input
                                        type="text"
                                        className="w-full px-3 py-1 border rounded-md dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                        {...register('reino', { required: true })}
                                        placeholder="Reino"
                                        disabled


                                    />
                                ) : (
                                    <input
                                        type="text"
                                        className="w-full px-3 py-1 border rounded-md dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                        {...register('reino', { required: true })}
                                        placeholder="Reino"
                                        readOnly
                                        value={"Plantae"}

                                    />
                                )}

                                {
                                    errors.reino && (
                                        <p className="text-red-500">
                                            Ingrese un Reino
                                        </p>
                                    )
                                }
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 font-normal text-sm  text-white">Filo</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-1 border border-gray-300 rounded-md dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                    {...register('filo', { required: true })}
                                    placeholder="Filo"
                                // onChange={handleChange}
                                />
                                {
                                    formErrors.filo && (
                                        <p className="text-red-500">
                                            {formErrors.filo}
                                        </p>
                                    )
                                }
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 font-normal text-sm text-white">Clase</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-1 border dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 rounded-md"
                                    {...register('clase', { required: true })}
                                    placeholder="Clase"
                                // onChange={handleChange}
                                />
                                {
                                    formErrors.clase && (
                                        <p className="text-red-500">
                                            {formErrors.clase}
                                        </p>
                                    )
                                }
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 font-normal text-sm text-white">Orden</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-1 border dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 rounded-md"
                                    {...register('orden', { required: true })}
                                    placeholder="Orden"
                                // onChange={handleChange}
                                />
                                {
                                    formErrors.orden && (
                                        <p className="text-red-500">
                                            {formErrors.orden}
                                        </p>
                                    )
                                }
                            </div>
                        </form>
                    </>
                )}

                {currentStep === 2 && (
                    <>

                        <form className="w-80 mx-auto" onSubmit={onSubmit}>

                            <div className="mb-4">
                                <label className="block mb-2 font-normal text-sm text-white">Familia</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-1 border dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  rounded-md"
                                    {...register('familia', { required: true })}
                                    placeholder="Familia"
                                // onChange={handleChange}

                                />
                                {
                                    errors.familia && (
                                        <p className="text-red-500">
                                            Ingrese una Familia
                                        </p>
                                    )
                                }
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 font-normal text-sm  text-white">Género</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-1 border dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 rounded-md"
                                    {...register('genero', { required: true })}
                                    placeholder="Género"
                                    value={formValues.genero}
                                    onChange={handleChange}

                                />
                                {
                                    errors.genero && (
                                        <p className="text-red-500">
                                            Ingrese un Género
                                        </p>
                                    )
                                }
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 font-normal text-sm text-white">Especie</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-1 border dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 rounded-md"
                                    {...register('especie', { required: true })}
                                    placeholder="Especie"
                                    value={formValues.especie}
                                    onChange={handleChange}
                                />
                                {
                                    errors.especie && (
                                        <p className="text-red-500">
                                            Ingrese una Especie
                                        </p>
                                    )
                                }
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 font-normal text-sm text-white">Nombre científico</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-1 border rounded-md dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 "
                                    {...register('nci', { required: true })}
                                    placeholder="Nombre Científico"
                                    value={formValues.nci}
                                // onChange={handleChange}
                                // disabled
                                />
                                {
                                    errors.nci && (
                                        <p className="text-red-500">
                                            Ingrese un Nombre Centífico
                                        </p>
                                    )
                                }
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 font-normal text-sm text-white">Nombre común</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-1 rounded-md dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 "
                                    {...register('nco', { required: true })}
                                    placeholder="Nombre Común"
                                />
                                {
                                    errors.nco && (
                                        <p className="text-red-500">
                                            Ingrese un Nombre Común
                                        </p>
                                    )
                                }
                            </div>
                            <button
                                className=" mt-5 bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded w-full">
                                Agregar Especie
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}

export default Stepper;
