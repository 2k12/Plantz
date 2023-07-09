import { useState } from "react";

function Stepper() {
    const [currentStep, setCurrentStep] = useState(1);

    const handleStepClick = (step) => {
        setCurrentStep(step);
    };

    return (
        <div className="flex flex-col items-center mt-36">
            <div className="w-full max-w-xl p-8 bg-gray-900 rounded-lg shadow-md relative border border-purple-500">
                <div className="flex justify-between mb-8 pl-10 pr-10">
                    <div
                        className={` z-10 w-10 h-10 flex items-center justify-center rounded-full  text-white font-bold cursor-pointer ${currentStep === 1 ? "ring-4 ring-offset-2 ring-purple-500 bg-gray-900 text-purple-500" : "bg-gray-500 border border-purple-500"
                            }`}
                        onClick={() => handleStepClick(1)}
                    >
                        1
                    </div>
                    {/* <div className="w-px h-6 bg-gray-300"></div> */}
                    <div
                        className={` z-10 w-10 h-10 flex items-center justify-center rounded-full  text-white font-bold cursor-pointer  ${currentStep === 2 ? "ring-4 ring-offset-2 ring-purple-500 bg-gray-900 text-purple-500" : "bg-gray-500 border border-purple-500"
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
                        <h2 className="text-2xl font-bold mb-4 text-white">Step 1</h2>
                        <form>
                            <div className="mb-4">

                                <label className="block mb-2  font-medium text-gray-900 dark:text-white" htmlFor="file_input">Imagen</label>
                                <input className="  block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"/>

                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 font-medium text-white">Reino</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 font-medium text-white">Filo</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 font-medium text-white">Clase</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 font-medium text-white">Orden</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                />
                            </div>
                        </form>
                    </>
                )}

                {currentStep === 2 && (
                    <>
                        <h2 className="text-2xl font-bold mb-4">Step 2</h2>
                        <form>
                            <button
                                type="button"
                                className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded"
                            >
                                Submit
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}

export default Stepper;
