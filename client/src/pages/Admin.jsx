import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import imagendefondo from "../assets/fondo.png";
import { Link } from 'react-router-dom';


export default function AdminTemplate() {
    return (
        <div className="flex justify-center " style={{ backgroundImage: `url(${imagendefondo})`, backgroundSize: 'cover', backgroundPosition: 'center center', minHeight: '100vh' }}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mt-48 absolute ">
                <div className="max-w-sm rounded overflow-hidden shadow-lg border bg-gray-900 border-purple-500">
                    <img className="w-full" src="https://i.postimg.cc/Kj4SXHb0/users-3829501336.jpg" alt="Imagen Usuarios" />
                    <div className="px-6 py-4">
                        <div className="text-xl mb-2 text-white text-center font-light mt-4">Modulo Usuarios</div>
                        <p className="text-gray-300 text-base mt-2 text-center">
                            Modulo de Gestión de Usuarios.
                        </p>
                    </div>
                    <div className="px-6 pt-4 ">
                        <Link to="#" className="inline-block  rounded w-full text-center px-3 py-1 pt-5 font-semibold text-white mr-2 mb-2 bg-green-700 hover:bg-green-600 h-20 text-2xl">
                            Gestionar
                        </Link>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg border bg-gray-900  border-purple-500">
                    <img className="w-full" src="https://i.postimg.cc/8c8yPXgp/plantas-mexicanas-peligro-en-extincion-vegetacion.jpg" alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                    <div className="text-xl mb-2 text-white text-center font-light mt-4">Modulo Especies</div>
                        <p className="text-gray-300 text-base mt-2 text-center">
                            Modulo de Gestión de Especies.
                        </p>
                    </div>
                    <div className="px-6 pt-4 ">
                        <Link to="/registrotaxonomico" className="inline-block  rounded w-full text-center px-3 py-1 pt-5 font-semibold text-white mr-2 mb-2 bg-green-700 hover:bg-green-600 h-20 text-2xl">
                            Gestionar
                        </Link>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg border bg-gray-900 border-purple-500">
                    <img className="w-full" src="https://i.postimg.cc/JhfgGzbC/Plantas-2685905361.jpg" alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                    <div className="text-xl mb-2 text-white text-center font-light mt-4">Modulo Taxonomías</div>
                        <p className="text-gray-300 text-base mt-2 text-center">
                            Modulo de Gestión de Taxonomías.
                        </p>
                    </div>
                    <div className="px-6 pt-4 ">
                        <Link to="/taxonomia" className="inline-block  rounded w-full text-center px-3 py-1 pt-5 font-semibold text-white mr-2 mb-2 bg-green-700 hover:bg-green-600 h-20 text-2xl">
                            Gestionar
                        </Link>
                    </div>
                </div>


            </div>
        </div>
    );
}
