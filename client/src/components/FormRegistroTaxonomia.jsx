import { useEffect, useState } from "react";
import './nuevaespecie.css';
import { useForm } from "react-hook-form";
import { useAdmin } from "../context/AdminContext";
import { useNavigate, useParams } from "react-router-dom";

function Stepper() {
    const [currentStep, setCurrentStep] = useState(1);
    const handleStepClick = (step) => {
        setCurrentStep(step);
    };

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const { agregarTaxonomia, leerTaxonomia, editarTaxonomia , taxonomia} = useAdmin();

    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        async function cargarEspecie() {
            if (params.id) {
                const taxonomiabdd = await leerTaxonomia(params.id);
                setValue('reino', taxonomiabdd.reino)
                setValue('filo', taxonomiabdd.filo)
                setValue('clase', taxonomiabdd.clase)
                setValue('orden', taxonomiabdd.orden)
                setValue('familia', taxonomiabdd.familia)
                setValue('genero', taxonomiabdd.genero)
                setValue('especie', taxonomiabdd.especie)
            }
        }
        cargarEspecie();
    }, []);


    const onSubmit = handleSubmit((data, e) => {

        e.preventDefault();

        if (params.id) {
            editarTaxonomia(params.id, data)

        } else {
            agregarTaxonomia(data);
        }
        navigate('/taxonomia');


    });



    return (

        <div className="flex flex-col items-center mt-36 w-96 container-fluid mx-auto">
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
                        onClick={() => handleStepClick(2)}
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
                            <div className="mb-4">

                                {/*  */}

                                



                                {/*  */}
                                <label className="block mb-2 font-normal text-sm text-white">Reino</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-1 border rounded-md dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                    {...register('reino', { required: true })}
                                    placeholder="Reino"
                                />
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
                                />
                                {
                                    errors.filo && (
                                        <p className="text-red-500">
                                            Ingrese un Filo
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
                                />
                                {
                                    errors.clase && (
                                        <p className="text-red-500">
                                            Ingrese una Clase
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
                                />
                                {
                                    errors.orden && (
                                        <p className="text-red-500">
                                            Ingrese un Orden
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
                                />
                                {
                                    errors.especie && (
                                        <p className="text-red-500">
                                            Ingrese una Especie
                                        </p>
                                    )
                                }
                            </div>
                            <button
                                className=" mt-5 bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded w-full">
                                Agregar Taxonomia
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}

export default Stepper;
