import { useEffect, useState } from "react";
import './nuevaespecie.css';
import { useForm } from "react-hook-form";
import { useEspecie } from "../context/RegistroEspecieContext";
import { useNavigate, useParams } from "react-router-dom";

function Stepper() {
    const [currentStep, setCurrentStep] = useState(1);
    const handleStepClick = (step) => {
        setCurrentStep(step);
    };

    const { register, handleSubmit, setValue } = useForm();
    const { agregarEspecie, leerEspecie , editarEspecie} = useEspecie();

    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        async function cargarEspecie() {
            if (params.id) {
                const especie = await leerEspecie(params.id);
                // console.log(especie.nombre_comun)
                setValue('nco', especie.nombre_comun)
                setValue('nci', especie.nombre_cientifico)
                setValue('reino', especie.reino)
                setValue('filo', especie.filo)
                setValue('clase', especie.clase)
                setValue('orden', especie.orden)
                setValue('familia', especie.familia)
                setValue('genero', especie.genero)
                setValue('especie', especie.especie)
            }
        }
        cargarEspecie();
    }, []);

    const onSubmit = handleSubmit((data) => {
        if (params.id) {
            editarEspecie(params.id,data)
        } else {
            agregarEspecie(data);
        }
        navigate('/registrotaxonomico');


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

                                <label className="block mb-2  text-gray-900 dark:text-white text-sm font-normal " htmlFor="file_input">Imagen</label>
                                <input className="  block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 " id="file_input" type="file" />

                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 font-normal text-sm text-white">Reino</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-1 border rounded-md dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                    {...register('reino')}
                                    placeholder="Reino"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 font-normal text-sm  text-white">Filo</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-1 border border-gray-300 rounded-md dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                    {...register('filo')}
                                    placeholder="Filo"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 font-normal text-sm text-white">Clase</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-1 border dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 rounded-md"
                                    {...register('clase')}
                                    placeholder="Clase"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 font-normal text-sm text-white">Orden</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-1 border dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 rounded-md"
                                    {...register('orden')}
                                    placeholder="Orden"
                                />
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
                                    {...register('familia')}
                                    placeholder="Familia"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 font-normal text-sm  text-white">Género</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-1 border dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 rounded-md"
                                    {...register('genero')}
                                    placeholder="Género"

                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 font-normal text-sm text-white">Especie</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-1 border dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 rounded-md"
                                    {...register('especie')}
                                    placeholder="Especie"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 font-normal text-sm text-white">Nombre científico</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-1 border rounded-md dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 "
                                    {...register('nci')}
                                    placeholder="Nombre Científico"

                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 font-normal text-sm text-white">Nombre común</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-1 rounded-md dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 "
                                    {...register('nco')}
                                    placeholder="Nombre Común"
                                />
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
