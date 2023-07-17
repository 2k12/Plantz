import { useParams } from 'react-router-dom';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText } from 'mdb-react-ui-kit';
import imagendefondo from "../assets/fondo.webp";
import { useAdmin } from "../context/AdminContext";
import { useEffect, useState } from "react";


export default function EditButton() {
    const [especie, setEspecie] = useState()
    const { leerTaxonomia } = useAdmin();
    const params = useParams();

    useEffect(() => {
        async function obtenerEspecie() {
            try {
                const especiebdd = await leerTaxonomia(params.id);
                setEspecie(especiebdd);
            } catch (error) {
                console.error(error);
            }
        }

        obtenerEspecie();
    }, []);

    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 bg-cover bg-center " style={{ backgroundImage: `url(${imagendefondo})`, minHeight: '100vh' }}>
            <div className="flex items-center justify-center h-screen  ">
                <MDBContainer className=" bg-gray-900 border border-purple-500 rounded py-2  " style={{ width: "35em" }}>
                    <MDBRow className="justify-content-center  h-100">
                        <MDBCol lg="9" xl="7">
                            <MDBCard className='rounded p-3 '>
                                <div className=" text-white rounded-t" style={{
                                    backgroundColor: "#2b1b34",
                                    // backgroundImage: `url("${especie?.imagen}")`, height: '200px',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                }}>

                                </div>
                                <div className="p-4  bg-gray-700 rounded-b" >
                                    <div className="d-flex text-justify text- py-1">
                                        <div className="px-3">
                                            <MDBCardText className="mb-1 text-3xl  border-b border-purple-500 text-white font-light pb-4">
                                                {especie?.genero + " " + especie?.especie}
                                            </MDBCardText>
                                            <MDBCardText className="mb-1 h5 border-b border-purple-500 text-purple-400">
                                                REINO:
                                                <span className='ml-5 text-lg  text-white'>
                                                    {especie?.reino}
                                                </span>
                                            </MDBCardText>
                                            <MDBCardText className="mb-1 h5 border-b border-purple-500 text-purple-400">
                                                FILO:
                                                <span className='ml-5 text-lg text-white'>
                                                    {especie?.filo}
                                                </span>
                                            </MDBCardText>
                                            <MDBCardText className="mb-1 h5 border-b border-purple-500 text-purple-400">
                                                CLASE:
                                                <span className='ml-5 text-lg text-white'>
                                                    {especie?.clase}
                                                </span>
                                            </MDBCardText>
                                            <MDBCardText className="mb-1 h5 border-b border-purple-500 text-purple-400 ">
                                                ORDEN:
                                                <span className='ml-5 text-lg text-white'>
                                                    {especie?.orden}
                                                </span>
                                            </MDBCardText>
                                            <MDBCardText className="mb-1 h5 border-b border-purple-500 text-purple-400">
                                                FAMILIA:
                                                <span className='ml-5 text-lg text-white'>
                                                    {especie?.familia}
                                                </span>
                                            </MDBCardText>
                                            <MDBCardText className="mb-1 h5 border-b border-purple-500 text-purple-400">
                                                GENERO:
                                                <span className='ml-5 text-lg text-white'>
                                                    {especie?.genero}
                                                </span>
                                            </MDBCardText>
                                            <MDBCardText className="mb-1 h5 border-b border-purple-500 text-purple-400">
                                                ESPECIE:
                                                <span className='ml-5 text-lg text-white'>
                                                    {especie?.especie}
                                                </span>
                                            </MDBCardText>
                                            {/* SE PUEDE AGREGAR LOS CAMPOS PAR LA UBICACION ETC */}

                                        </div>

                                    </div>
                                </div>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        </div>
    );
}