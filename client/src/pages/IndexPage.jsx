// import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MyComponent from "../components/Plantz";
// import Breadcrumbs from "../components/Breadcrumbs";
import imagendefondo from "../assets/fondo.webp";
function IndexPage() {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 bg-cover bg-center" style={{ backgroundImage: `url(${imagendefondo})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
            {/* <Navbar /> */}
            {/* <Breadcrumbs/> */}
            <MyComponent />
            <Footer />
        </div>
    )
}

export default IndexPage