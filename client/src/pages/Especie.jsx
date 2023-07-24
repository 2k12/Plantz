import { useParams } from 'react-router-dom';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText } from 'mdb-react-ui-kit';
import imagendefondo from "../assets/fondo.webp";
import { useUserall } from "../context/UserallContext";
import Slider from "../components/Slide";
import './especie.css'
import { useEffect, useState } from "react";


export default function Especie() {
    const [especie, setEspecie] = useState()
    const { leerEspecie3 } = useUserall();

    const params = useParams();

    useEffect(() => {

        async function obtenerEspecie() {
            try {
                const especiebdd = await leerEspecie3(params.id);
                setEspecie(especiebdd);
                // console.log(especie)
                // console.log(especiebdd)
            } catch (error) {
                console.error(error);
            }
        }

        obtenerEspecie();
    }, []);



    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar si el modal está abierto o cerrado
    const [previewImage, setPreviewImage] = useState(''); // Estado para almacenar la URL de la imagen seleccionada para la previsualización

    const handleSlideChange = (slideIndex) => {
        setCurrentSlide(slideIndex); // Actualiza el estado con el índice del botón seleccionado
    };
    const handleImageClick = (imageURL) => {
        setIsModalOpen(true); // Abre el modal
        setPreviewImage(imageURL); // Almacena la URL de la imagen seleccionada para la previsualización
    };

    const handleCloseModal = () => {
        setIsModalOpen(false); // Cierra el modal
        setPreviewImage(''); // Resetea la URL de la imagen seleccionada para la previsualización
    };

    let images = [
        // especie?.imagen1,
        // especie?.imagen2,
        // especie?.imagen3,
        // especie?.imagen4,

    ];

    if (especie?.length === 3) {
        images.push(especie?.imagen1)
        images.push(especie?.imagen2)
        images.push(especie?.imagen3)
    } else if (especie?.length === 2) {
        images.push(especie?.imagen1)
        images.push(especie?.imagen2)

    } else if (especie?.length === 1) {
        images.push(especie?.imagen1)

    } else {
        images.push(especie?.imagen1)
        images.push(especie?.imagen2)
        images.push(especie?.imagen3)
        images.push(especie?.imagen4)
    }

    return (
        <div  >
            {/* Title */}
            <div className="text-center pt-36 md:pt-32">
                {/* <p className="text-sm md:text-base text-teal-500 font-bold">- 29 FEBRUARY 2020 -<span className="text-gray-900"></span>
                </p> */}
                <h1 className="text-3xl md:text-6xl mt-16 mb-5 italic">{especie?.nombre_cientifico}</h1>
            </div>

            {/* Carrusel de imágenes */}
            <Slider images={images} />


            {/* Container */}
            <div className="container max-w-5xl mx-auto mt-10 mb-20">
                <div className="mx-0 sm:mx-6">
                    <div className="bg-gray-200 w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal shadow-md m-5">
                        {/* Post Content */}
                        {/* Lead Para */}
                        <span className="font-serif">
                            <span className='font-bold'>Nombre Común:</span> {especie?.nombre_comun} <br />
                            <span className='font-bold'>Reino:</span> {especie?.reino} <br />
                            <span className='font-bold'>Filo:</span> {especie?.filo} <br />
                            <span className='font-bold'>Clase:</span> {especie?.clase} <br />
                            <span className='font-bold'>Orden:</span> {especie?.orden} <br />
                            <span className='font-bold'>Familia:</span> {especie?.familia} <br />
                            <span className='font-bold'>Género:</span> <span className='italic'>{especie?.genero}</span> <br />
                            <span className='font-bold'>Especie:</span> <span className='italic'>{especie?.especie}</span> <br />
                            {/* <hr className='border border-gray-500 mt-5 mb-8'/> */}
                            <span className='justify-between '>
                                <br />
                                <pre  className="font-serif">{especie?.descripcion}</pre>
                            </span>
                        </span>
                        {/* / Post Content */}
                    </div>
                </div>
            </div>
        </div>
    );



}