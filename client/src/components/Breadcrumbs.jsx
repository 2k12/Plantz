import "./breadcrumbs.css";
import { Link, useLocation } from "react-router-dom";
function Breadcrumbs() {

    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    return (
        <>
            <div className="w-full rounded-md container-fluid" id="bread">
                <ol className="list-reset flex flex-wrap">
                    <li className="text-white dark:text-white ms-4 md:ms-0 md:hover:text-purple-400 md:p-0 md:dark:hover:text-purple-500">
                        <div className="pl-10 md:pl-56">
                            <Link to="/"> 🟣 Inicio</Link>
                        </div>
                    </li>
                    {pathnames.map((path, index) => {
                        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                        const isLast = index === pathnames.length - 1;
                        const breadcrumbText = path.charAt(0).toUpperCase() + path.slice(1);
                        return (
                            <li
                                key={index}
                                className="paths text-white dark:text-white ms-2 md:hover:text-purple-400 md:p-0 md:dark:hover:text-purple-500"
                            >
                                {isLast ? (
                                    " > 🟣" + breadcrumbText
                                ) : (
                                    <Link to={routeTo}>{" > 🟣" + breadcrumbText}</Link>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </div>
        </>

    )
}

export default Breadcrumbs