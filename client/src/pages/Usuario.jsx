import { useParams } from 'react-router-dom';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText } from 'mdb-react-ui-kit';
import imagendefondo from "../assets/fondo.webp";
import { useAdmin } from "../context/AdminContext";
import { useEffect, useState } from "react";


export default function EditButton() {
    const [usuario, setUsuario] = useState()
    const { leerUsuario } = useAdmin();
    const params = useParams();

    useEffect(() => {
        async function obtenerUsuario() {
            try {
                const usuariobdd = await leerUsuario(params.id);
                setUsuario(usuariobdd);
            } catch (error) {
                console.error(error);
            }
        }

        obtenerUsuario();
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
                                    // backgroundImage: `url("${usuario?.imagen}")`, height: '200px',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                }}>

                                </div>
                                <div className="p-4  bg-gray-700 rounded-b" >
                                    <div className="d-flex text-justify text- py-1">
                                        <div className="px-3">
                                            <MDBCardText className="mb-1 text-3xl  border-b border-purple-500 text-white font-light pb-4">
                                                {usuario?.usuario}
                                            </MDBCardText>
                                            <MDBCardText className="mb-1 h5 border-b border-purple-500 text-purple-400">
                                                NOMBRE:
                                                <span className='ml-5 text-lg  text-white'>
                                                    {usuario?.nombre}
                                                </span>
                                            </MDBCardText>
                                            <MDBCardText className="mb-1 h5 border-b border-purple-500 text-purple-400">
                                                EMAIL:
                                                <span className='ml-5 text-lg text-white'>
                                                    {usuario?.email}
                                                </span>
                                            </MDBCardText>
                                            <MDBCardText className="mb-1 h5 border-b border-purple-500 text-purple-400">
                                                ROL:
                                                <span className='ml-5 text-lg text-white'>
                                                    {usuario?.rol}
                                                </span>
                                            </MDBCardText>
                                            <MDBCardText className="mb-1 h5 border-b border-purple-500 text-purple-400 ">
                                                CONTRASEÑA:
                                                <span className='text-lg text-white  block ' style={{ "overflow": "hidden" }}>
                                                    {usuario?.contrasena}
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