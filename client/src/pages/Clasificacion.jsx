import imagendefondo from "../assets/fondo.webp";

import { useUserall } from "../context/UserallContext";
import { useEffect} from "react";
import DataTable from "../components/DataTable";

function Clasificacion() {
    const { leerEspecies3} = useUserall();


    useEffect(() => {
        leerEspecies3();
    }, []);


    return (
        <div className="mx-auto flex justify-center"  style={{ backgroundImage: `url(${imagendefondo})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
            <div className="text-white dark:text-white text-4xl font-normal  absolute left-168 top-228 w-614 h-min-content flex flex-col mt-40 md:pl-56   ">
                <div className="flex ">
                    <span className="rEGISTRODEESPECIE text-5xl ">
                        Especies
                    </span>
                    
                </div>
            </div>

            <div className="flex items-center justify-center h-screen ">
            <DataTable />

            </div>

        </div>

    );

}

export default Clasificacion;
