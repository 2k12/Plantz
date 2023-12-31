import React from 'react';
import imagendefondo from "../assets/fondo.webp";
import hoja from "../assets/hoja.png";
import imagen1from from "../assets/3.webp";
import planta6 from "../assets/planta6.webp";
import planta7 from "../assets/planta7.webp";
import planta8 from "../assets/planta8.webp";
import imagen3from from "../assets/5.webp";
import imagen4from from "../assets/7.webp";
import Footer from "../components/Footer";
import "./rt.css";

function AcercaPage() {
	return (
		<>
			<div className="w-full m-0 p-0 bg-cover bg-bottom " style={{ backgroundImage: `url(${imagendefondo})`, height: "60vh", maxHeight: "460px" }}>

				<div className="container max-w-4xl mx-auto text-center break-normal pb-20 mb-20 ">
					<p className="text-white font-light text-6xl md:text-8xl pt-48" id="tit">
						Plantz.
					</p>
					<p className="text-xl md:text-2xl text-white">Sistema de Gestión de Plantas</p>
				</div>
			</div>

			<div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-24">


				<div className="mx-0 sm:mx-6 ">


					<div className=" w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t ">


						<div className="flex h-full bg-white rounded overflow-hidden shadow-lg ">
							<div className="w-full md:w-2/3 rounded-t">
								<img src={planta6} className="h-full w-full shadow object-cover object-center" alt="Cover" />
							</div>

							<div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink ">
								<div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
									<p className="w-full text-gray-600 text-xs md:text-sm pt-6 px-6"></p>
									<div className="w-full font-bold text-3xl text-gray-900 px-6 mt-8">Qué es Plantz. ?</div>
									<p className="text-gray-800 font-serif text-base px-6 mb-5 mt-8" style={{textAlign: "justify"}}>
										Plantz es un Aplicación web que utiliza un sistema de gestión con el cual podrás descubrir las distintas especies dentro del mundo Plantae (Plantas) en base a su taxonomía. Ayudando así a los usuarios a descubrir nuevas especies, aprender sobre su clasificación, características, y facilitar la gestión de sus propias colecciones de plantas. 
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
						<div className="flex flex-wrap justify-between pt-12 -mx-6">
							<div className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
								<div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
									<div className="flex flex-wrap no-underline hover:no-underline">
										<img src={planta7} className="h-full w-full rounded-t pb-6" alt="Post" />
										<div className="w-full font-bold text-3xl text-gray-900 px-6 text-center ">Misión</div>
										<p className="text-gray-800 font-serif text-base px-6 mb-5 mt-5"  style={{textAlign: "justify"}}>
											Proporcionar a los entusiastas de las plantas una aplicación de gestión que les permita explorar, aprender y organizar plantas según su taxonomía. </p> 
										
									</div>
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

										<img src={planta8} className="h-full w-full rounded-t pb-6" alt="Post" />
										<div className="w-full font-bold text-3xl text-gray-900 px-6 text-center ">Visión</div>
										<p className="text-gray-800 font-serif text-base px-6 mb-5 mt-5"  style={{textAlign: "justify"}}>
											Convertirnos en la aplicación líder en gestión de plantas basada en taxonomía, reconocida por su precisión, funcionalidad y contenido de calidad.</p> 
										
									</div>
									<div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
										<div className="flex items-center justify-between">
											<img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src={hoja} alt="Avatar of Author" />
											<p className="text-gray-600 text-xs md:text-sm">Plantz Team</p>
										</div>
									</div>
								</div>
							</div>



							{/* <div className="w-full md:w-2/3 p-6 flex flex-col flex-grow flex-shrink">
								<div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
									<a href="#" className="flex flex-wrap no-underline hover:no-underline">
										<img src="https://source.unsplash.com/collection/325867/800x600" className="h-full w-full rounded-t pb-6" alt="Post" />
										<p className="w-full text-gray-600 text-xs md:text-sm px-6">GETTING STARTED</p>
										<div className="w-full font-bold text-xl text-gray-900 px-6">Lorem ipsum dolor sit amet.</div>
										<p className="text-gray-800 font-serif text-base px-6 mb-5">
											Lorem ipsum eu nunc commodo posuere et sit amet ligula.
										</p>
									</a>
								</div>
								<div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
									<div className="flex items-center justify-between">
										<img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author" />
										<p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
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
										<img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author" />
										<p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
									</div>
								</div>
							</div> */}

						</div>

					</div>


					{/* 
					<div className="container font-sans bg-green-100 rounded mt-8 p-4 md:p-24 text-center">
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


					{/* <div className="flex w-full items-center font-sans p-8 md:p-24">
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

export default AcercaPage;
