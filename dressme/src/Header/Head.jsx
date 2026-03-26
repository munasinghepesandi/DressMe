import Logo from "../assets/lg.png";
import Search from "../assets/search.png";
import Cart from "../assets/carticon.png";
import { Link } from "react-router-dom";
// Placeholder avatar
const avatar = "https://ui-avatars.com/api/?name=User&background=blue&color=fff&size=64";

const Header = () => {
    return (
        <header className="shadow bg-white w-full">
            <div className="max-w-7xl mx-auto flex flex-col px-4 py-3">
                {/* Top Row: Logo, Search, User, Cart */}
                <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                    <div className="flex items-center gap-3 justify-between md:justify-start">
                        <a href="#" className="font-extrabold text-2xl text-blue-400 flex items-center gap-2 tracking-tight">
                            <img src={Logo} alt="Logo" className="w-10" />
                            DRESS ME
                        </a>
                    </div>
                    {/* Prominent Search Bar */}
                    <div className="flex-1 flex justify-center md:justify-center my-2 md:my-0">
                        <div className="relative w-full max-w-md">
                            <input type="text" placeholder="Search for products, brands..." className="w-full pl-12 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-400 bg-gray-50 shadow-inner text-gray-700 text-lg" />
                            <img src={Search} className="w-5 h-5 text-gray-400 absolute top-1/2 left-4 -translate-y-1/2" />
                        </div>
                    </div>
                    {/* User and Cart */}
                    <div className="flex items-center gap-4 justify-end">
                        {/* User Avatar */}
                        <div className="relative group">
                            <img src={avatar} alt="User" className="w-10 h-10 rounded-full border-2 border-blue-200 shadow cursor-pointer" />
                            <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Profile</a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Orders</a>
                                <Link to="/SignIn" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Sign In</Link>
                            </div>
                        </div>
                        {/* Cart Icon with Badge */}
                        <div className="relative">
                            <button className="bg-blue-400 text-white rounded-full p-2 flex items-center shadow hover:bg-blue-500 transition-all duration-200">
                                <img src={Cart} alt="Cart" className="w-6 h-6" />
                            </button>
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5 shadow">2</span>
                        </div>
                    </div>
                </div>
                {/* Divider line between header and navbar */}
                <hr className="w-full border-t border-gray-200 my-2" />
                {/* Navbar with dropdowns and categories */}
                <nav className="w-full flex justify-center mt-0">
                    <ul className="flex items-center gap-6 text-lg font-semibold">
                        <Link to="/">
                            <li className="inline-block px-3 py-2 rounded hover:bg-blue-100 hover:text-blue-500 text-gray-700 transition-all duration-150 cursor-pointer">Home</li>
                        </Link>
                        <li className="relative group inline-block px-3 py-2 rounded hover:bg-blue-100 hover:text-blue-500 text-gray-700 transition-all duration-150 cursor-pointer">
                            Men
                            <div className="absolute left-0 mt-2 w-40 bg-white rounded-xl shadow-lg py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">T-Shirts</a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Shirts</a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Pants</a>
                            </div>
                        </li>
                        <li className="relative group inline-block px-3 py-2 rounded hover:bg-blue-100 hover:text-blue-500 text-gray-700 transition-all duration-150 cursor-pointer">
                            Women
                            <div className="absolute left-0 mt-2 w-40 bg-white rounded-xl shadow-lg py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Dresses</a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Tops</a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Skirts</a>
                            </div>
                        </li>
                        <li className="relative group inline-block px-3 py-2 rounded hover:bg-blue-100 hover:text-blue-500 text-gray-700 transition-all duration-150 cursor-pointer">
                            Kids
                            <div className="absolute left-0 mt-2 w-40 bg-white rounded-xl shadow-lg py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Boys</a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Girls</a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Infants</a>
                            </div>
                        </li>
                        <li className="inline-block px-3 py-2 rounded hover:bg-blue-100 hover:text-blue-500 text-gray-700 transition-all duration-150 cursor-pointer">Top Rated</li>
                        <li className="inline-block px-3 py-2 rounded hover:bg-blue-100 hover:text-blue-500 text-gray-700 transition-all duration-150 cursor-pointer">Sale</li>
                        <Link to="/About">
                            <li className="inline-block px-3 py-2 rounded hover:bg-blue-100 hover:text-blue-500 text-gray-700 transition-all duration-150 cursor-pointer">About</li>
                        </Link>
                        <Link to="/Contact">
                            <li className="inline-block px-3 py-2 rounded hover:bg-blue-100 hover:text-blue-500 text-gray-700 transition-all duration-150 cursor-pointer">Contact</li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
export default Header;