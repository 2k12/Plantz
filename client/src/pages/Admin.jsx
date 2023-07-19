import React from 'react';
import imagendefondo from "../assets/fondo.webp";
import hoja from "../assets/hoja.png";
import usuarios from "../assets/usuarios.webp";
import especies from "../assets/especies.webp";
import taxonomias from "../assets/taxonomias.webp";

import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
// import Cookies from "js-cookie";

export default function AdminTemplate() {
    // const miCookie = Cookies.get('token');
    // console.log(miCookie)

    return (
        <>
            <div className="w-full m-0 p-0 bg-cover bg-bottom" style={{ backgroundImage: `url(${imagendefondo})`, height: "60vh", maxHeight: "480px" }}>
                <div className="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal ">
                    <p className="text-white font-light text-3xl md:text-7xl pt-20" id='tit'>
                        Panel de Administrador
                    </p>
                    {/* <p className="text-xl md:text-2xl text-gray-300">Conéctate con la naturaleza a través del estudio de la taxonomía vegetal</p> */}
                </div>
            </div>

            <div className="container px-4 md:px-0 max-w-6xl mx-auto">
                <div className="flex flex-wrap justify-between -mx-5 -mt-24">
                    <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink mb-28">
                        <div className="flex-1 bg-white rounded overflow-hidden shadow-xl hover:bg-gray-200">
                            <Link to="/usuarios" className="flex flex-wrap no-underline hover:no-underline">
                                <img src={usuarios} className="h-full w-full rounded-t pb-5" alt="Post" />
                                <div className="w-full font-bold text-4xl text-gray-900 px-6 text-center uppercase  mb-4">usuarios</div>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink mb-28">
                        <div className="flex-1 bg-white rounded overflow-hidden shadow-lg hover:bg-gray-200">
                            <Link to="/registrotaxonomico" className="flex flex-wrap no-underline hover:no-underline">
                                <img src={especies} className="h-full w-full rounded-t pb-5" alt="Post" />
                                <div className="w-full font-bold text-4xl text-gray-900 px-6 text-center uppercase  mb-4">ESPECIES</div>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink mb-28">
                        <div className="flex-1 bg-white rounded overflow-hidden shadow-lg hover:bg-gray-200">
                            <Link to="/taxonomia" href="#" className="flex flex-wrap no-underline hover:no-underline">
                                <img src={taxonomias} className="h-full w-full rounded-t pb-5" alt="Post" />
                                <div className="w-full font-bold text-4xl text-gray-900 px-6 text-center uppercase  mb-4">taxonomías</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* <Footer /> */}
        </>
    );
}
