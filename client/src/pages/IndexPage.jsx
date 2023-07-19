// import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MyComponent from "../components/Plantz";
// import Breadcrumbs from "../components/Breadcrumbs";
import { useEffect } from "react";
import imagendefondo from "../assets/fondo.webp";
import React from 'react';
import hoja from "../assets/hoja.png";
import imagen1from from "../assets/3.webp";
import imagen2from from "../assets/4.webp";
import imagen3from from "../assets/5.webp";
import imagen4from from "../assets/7.webp";
import video1 from "../assets/vid1.mp4";
import "./rt.css";
import { useUserall } from "../context/UserallContext";


function IndexPage() {
    const { leerEspecies3, especieall } = useUserall();

    useEffect(() => {
      leerEspecies3();
    }, []);
  
  

    return (
        <>
            <div className="w-full m-0 p-0 bg-cover bg-bottoms " style={{ backgroundImage: `url(${imagendefondo})`, height: "60vh", maxHeight: "460px" }}>
                <div className="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal ">
                    <p className="text-white font-light text-3xl md:text-7xl pt-8" id='tit'>
                        Plantz.
                    </p>
                    <p className="text-xl md:text-2xl text-gray-300">Conéctate con la naturaleza a través del estudio de la taxonomía vegetal</p>
                </div>
            </div>

            <div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">

                <div className="mx-0 sm:mx-6 ">

                    <div className=" w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t ">

                        <div className="flex h-full bg-white rounded overflow-hidden shadow-lg ">
                            <div className="w-full md:w-2/3 rounded-t">
                                <img src={imagen2from} className="h-full w-full shadow" alt="Cover" />
                            </div>

                            <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink ">
                                <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                                    <p className="w-full text-gray-600 text-xs md:text-sm pt-6 px-6"></p>
                                    <div className="w-full font-bold text-xl text-gray-900 px-6 text-center">ESPECIES REGISTRADAS</div>
                                    <p className="text-gray-800 font-serif text-9xl  mx-auto justify-content text-center">
                                        {especieall.length}
                                    </p>
                                    <p className="text-gray-800 font-serif mx-auto text-justify p-2 mt-4 md:text-md pt-6 px-6">Cada día se registran mas especies gracias a los constantes aportes de los taxonomos registrados en la plataforma.</p>
                                </div>

                                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                                    <div className="flex items-center justify-between">
                                        <img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src={hoja} alt="Avatar of Author" />
                                        <p className="text-gray-600 text-xs md:text-sm">Plantz Team</p>
                                    </div>
                                </div>
                            </div>


                        </div>


                        <div className="flex flex-wrap justify-between pt-12 -mx-6">


                            <div className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink " style={{width: "5em !important" }}>
                                <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                                    <div className="flex flex-wrap  no-underline hover:no-underline ">
                                        <img src={imagen4from} className="h-full w-full rounded-t pb-6" alt="Post" />
                                        <div className="w-full font-bold  text-gray-900 px-6">Plantae</div>
                                        <p className="text-gray-800 font-serif text-base px-6 mb-1">
                                            Grupo de organismos multicelulares eucariotas, fotosintéticos y autótrofos, que incluye plantas terrestres, acuáticas y algas. Producen oxígeno, fijan carbono y son la base de las cadenas alimenticias en los ecosistemas terrestres y acuáticos.
                                        </p>
                                    </div>
                                    <img src={imagen1from} className="h-80 w-full rounded-t mt-2" alt="Post" />

                                </div>
                                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                                    <div className="flex items-center justify-between">
                                        <img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src={hoja} alt="Avatar of Author" />
                                        <p className="text-gray-600 text-xs md:text-sm">Plantz Team</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
                                <div className="flex-1 flex-row bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                                    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">

                                        <img src={imagen3from} className="h-full w-full rounded-t pb-6" alt="Post" />
                                        <div className="w-full font-bold text-xl text-gray-900 px-6">Sabias Que ? </div>
                                        <p className="text-gray-800 font-serif text-base px-6 mb-5">
                                            <span className="text-green-600 text-2xl ">1.</span> La planta más pequeña del mundo es la azolla, una planta acuática flotante que tiene solo 1 milímetro de tamaño.
                                            <br />
                                            <span className="text-green-600 text-2xl ">2.</span>  Las plantas pueden comunicarse entre sí a través de señales químicas. Por ejemplo, cuando una planta es atacada por insectos, puede emitir sustancias químicas para alertar a otras plantas cercanas.
                                            <br />
                                            <span className="text-green-600 text-2xl ">3.</span>  Algunas plantas carnívoras, como la venus atrapamoscas, tienen adaptaciones especiales para capturar y digerir insectos como fuente de nutrientes adicionales.
                                            <br />
                                            <span className="text-green-600 text-2xl ">4.</span>  Las flores más grandes del mundo son las de la planta Amorphophallus titanum, también conocida como "flor cadáver". Puede alcanzar hasta 3 metros de altura.
                                        </p>
                                    </div>
                                    <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                                        <div className="flex items-center justify-between">
                                            <img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src={hoja} alt="Avatar of Author" />
                                            <p className="text-gray-600 text-xs md:text-sm">Plantz Team</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-2/3 p-6 flex flex-col flex-grow flex-shrink">
                                <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                                    <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                                        <video className="top-0 left-0 w-full h-full" src={video1} controls></video>
                                        {/* <p className="w-full text-gray-600 text-xs md:text-sm px-6">GETTING STARTED</p> */}
                                        <div className="w-full font-bold text-xl text-gray-900 px-6 pt-5">
                                            Taraxacum officinale
                                        </div>
                                        <p className="text-gray-800 font-serif text-base px-6 mb-5">
                                            Un diente de león
                                            puede contener hasta 200 florecillas en una sola cabeza de flor.

                                        </p>
                                    </a>
                                </div>
                                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                                    <div className="flex items-center justify-between">
                                        <img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Source" src={hoja} alt="Avatar of Author" />
                                        <p className="text-gray-600 text-xs md:text-sm">Plantz Team</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                                <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                                    <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                                        <img src="https://source.unsplash.com/collection/1118905/800x600" className="h-full w-full rounded-t pb-6" alt="Post" />
                                        <p className="w-full text-gray-600 text-xs md:text-sm px-6">GETTING STARTED</p>
                                        <div className="w-full font-bold text-xl text-gray-900 px-6">Lorem ipsum dolor sit amet.</div>
                                        <p className="text-gray-800 font-serif text-base px-6 mb-5">
                                            Lorem ipsum eu nunc commodo posuere et sit amet ligula.
                                        </p>
                                    </a>
                                </div>
                                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                                    <div className="flex items-center justify-between">
                                        <img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src={hoja} alt="Avatar of Author" />
                                        <p className="text-gray-600 text-xs md:text-sm">Plantz Team</p>
                                    </div>
                                </div>
                            </div>



                        </div>

                    </div>



                    {/* <div className="container font-sans bg-green-100 rounded mt-8 p-4 md:p-24 text-center">
						<h2 className="font-bold break-normal text-2xl md:text-4xl">Subscribe to Ghostwind CSS</h2>
						<h3 className="font-bold break-normal  text-gray-600 text-base md:text-xl">Get the latest posts delivered right to your inbox</h3>
						<div className="w-full text-center pt-4">
							<form action="#">
								<div className="max-w-xl mx-auto p-1 pr-0 flex flex-wrap items-center">
									<input type="email" placeholder="youremail@example.com" className="flex-1 appearance-none rounded shadow p-3 text-gray-600 mr-2 focus:outline-none" />
									<button type="submit" className="flex-1 mt-4 md:mt-0 block md:inline-block appearance-none bg-green-500 text-white text-base font-semibold tracking-wider uppercase py-4 rounded shadow hover:bg-green-400">Subscribe</button>
								</div>
							</form>
						</div>
    </div> */}


                    {/*  <div className="flex w-full items-center font-sans p-8 md:p-24">
						<img className="w-10 h-10 rounded-full mr-4" src="http://i.pravatar.cc/300" alt="Avatar of Author" />
						<div className="flex-1">
							<p className="text-base font-bold  md:text-xl leading-none">Ghostwind CSS</p>
							<p className="text-gray-600 text-xs md:text-base">Tailwind CSS version of Ghost's Casper theme by <a className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500" href="https://www.tailwindtoolbox.com">TailwindToolbox.com</a></p>
						</div>
						<div className="justify-end">
							<a href="post.html" className="bg-transparent border border-gray-500 hover:border-green-500 text-xs text-gray-500 hover:text-green-500 font-bold py-2 px-4 rounded-full">Read More</a>
						</div>
					</div> */}

                </div>

            </div>
            <div className="h-20">
            </div>
            {/* <Footer /> */}

        </>
    );
}

export default IndexPage