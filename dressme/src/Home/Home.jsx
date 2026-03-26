
import img1 from "../assets/cover.png";
import img5 from "../assets/img5.avif";
import img7 from "../assets/img7.webp";
import img15 from "../assets/img15.avif";
import Header from "../Header/Head";
import About from "../About";
import Products from "./Products";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div className="bg-blue-50 min-h-screen">
            <Header />
            {/* Hero Section */}
            <section className="w-full flex flex-col md:flex-row items-center justify-between px-6 py-20 max-w-7xl mx-auto gap-12">
                <div className="flex-1 flex flex-col gap-8 animate-slide-up rounded-3xl p-8">
                    <h1 className="text-6xl md:text-7xl font-black text-blue-500 leading-tight tracking-tight mb-4">
                        Elevate Your Style<br />
                        <span className="text-gray-700">with <span className="text-blue-400">Dress Me</span></span>
                    </h1>
                    <p className="text-2xl text-gray-500 max-w-xl font-medium mb-6">
                        Discover premium fashion for every occasion. Shop the latest collections for men, women, and kids. Enjoy exclusive offers and new arrivals every week.
                    </p>
                    <a href="#collections" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold px-12 py-4 rounded-full shadow-xl transition-all duration-300 text-2xl w-fit ring-2 ring-blue-200 hover:scale-105">Shop New Arrivals</a>
                </div>
                <div className="flex-1 flex justify-center mt-8 md:mt-0">
                    <img src={img1} alt="Fashion Hero" className="h-112 w-full max-w-2xl object-cover" />
                </div>
            </section>

            {/* Featured Collections */}
            <section id="collections" className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="relative group rounded-3xl overflow-hidden shadow-xl border border-blue-100 bg-white">
                        <img src={img7} alt="Men's Collection" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-linear-to-t from-gray-600 to-transparent flex flex-col justify-end p-6">
                            <h2 className="text-3xl font-extrabold text-white mb-25 text-center">Men</h2>
                            <a href="#" className="inline-block bg-white text-blue-500 font-bold px-6 py-2 rounded-full shadow hover:bg-blue-100 transition-all duration-200">Shop Men</a>
                        </div>
                    </div>
                    <div className="relative group rounded-3xl overflow-hidden shadow-xl border border-blue-100 bg-white">
                        <img src={img5} alt="Women Collection" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-linear-to-t from-gray-600 to-transparent flex flex-col justify-end p-6">
                            <h2 className="text-3xl font-extrabold text-white mb-25 text-center">Women</h2>
                            <a href="#" className="inline-block bg-white text-blue-500 font-bold px-6 py-2 rounded-full shadow hover:bg-blue-100 transition-all duration-200">Shop Women</a>
                        </div>
                    </div>
                    <div className="relative group rounded-3xl overflow-hidden shadow-xl border border-blue-100 bg-white">
                        <img src={img15} alt="Kids Collection" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-linear-to-t from-gray-600 to-transparent flex flex-col justify-end p-6">
                            <h2 className="text-3xl font-extrabold text-white mb-25 text-center">Kids</h2>
                            <a href="#" className="inline-block bg-white text-blue-500 font-bold px-6 py-2 rounded-full shadow hover:bg-blue-100 transition-all duration-200">Shop Kids</a>
                        </div>
                    </div>

                </div>
            </section>

            {/* Sale Advertisement */}
            <section className="w-full flex flex-col md:flex-row items-center justify-center gap-8 px-4 py-10 animate-fade-in">
                <div className="flex items-center gap-4 bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform border border-blue-100">
                    <h2 className="text-2xl font-bold text-red-800">Mega Winter Sale!</h2>
                    <p className="text-lg">Up to <span className="font-extrabold text-red-700">50% OFF</span> on selected items</p>
                </div>
                
            </section>

            <Products />
            <About />
            <Footer />
        </div>
    );
};

export default Home;