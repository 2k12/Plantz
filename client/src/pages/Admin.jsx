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
            <div className="w-full m-0 p-0 bg-cover bg-bottoms " style={{ backgroundImage: `url(${imagendefondo})`, height: "60vh", maxHeight: "480px" }}>
                <div className="container max-w-4xl mx-auto pt-60 md:pt-44 text-center break-normal ">
                    <span className=" font-light text-5xl md:text-7xl pt-8 text-yellow-400" id='tit'>
                        Administrador
                    </span>
                    {/* <p className="text-xl md:text-2xl text-gray-300">Conéctate con la naturaleza a través del estudio de la taxonomía vegetal</p> */}
                </div>
            </div>

            {/* </div> */}

            <div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
                <div className="mx-0 sm:mx-6 flex flex-wrap mt-2">
                    <div className="w-full md:w-1/3 p-6">
                        <div className="flex-1 bg-white rounded overflow-hidden shadow-lg hover:bg-gray-200">
                            <Link to="/usuarios" className="flex flex-wrap no-underline hover:no-underline">
                                <img src={usuarios} className="h-full w-full rounded-t pb-5" alt="Post" />
                                <div className="w-full font-bold text-4xl text-gray-900 px-6 text-center uppercase mb-4">Usuarios</div>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 p-6">
                        <div className="flex-1 bg-white rounded overflow-hidden shadow-lg hover:bg-gray-200">
                            <Link to="/registrotaxonomico" className="flex flex-wrap no-underline hover:no-underline">
                                <img src={especies} className="h-full w-full rounded-t pb-5" alt="Post" />
                                <div className="w-full font-bold text-4xl text-gray-900 px-6 text-center uppercase mb-4">Especies</div>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 p-6">
                        <div className="flex-1 bg-white rounded overflow-hidden shadow-lg hover:bg-gray-200">
                            <Link to="/taxonomia" className="flex flex-wrap no-underline hover:no-underline">
                                <img src={taxonomias} className="h-full w-full rounded-t pb-5" alt="Post" />
                                <div className="w-full font-bold text-4xl text-gray-900 px-6 text-center uppercase mb-4">Taxonomías</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-72' style={{ marginTop: "4px" }}>

            </div>



            {/* <Footer /> */}
        </>
    );
}
