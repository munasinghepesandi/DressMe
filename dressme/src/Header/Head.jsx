import Logo from "../assets/lg.png";
import Search from "../assets/search.png";
import Cart from "../assets/carticon.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const avatar = "https://ui-avatars.com/api/?name=User&background=blue&color=fff&size=64";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { to: "/", label: "Home" },
        { to: "#", label: "Men" },
        { to: "#", label: "Women" },
        { to: "#", label: "Kids" },
        { to: "#", label: "Top Rated" },
        { to: "#", label: "Sale" },
        { to: "/About", label: "About" },
        { to: "/Contact", label: "Contact" },
    ];

    return (
        <header className="sticky top-0 z-40 px-0 pt-0">
            <div className="glass-panel w-full rounded-none px-4 py-4 shadow-[0_16px_34px_rgba(26,34,56,0.12)] md:px-8">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center justify-between gap-3">
                        <Link to="/" className="flex items-center gap-3 tracking-wide">
                            <img src={Logo} alt="Logo" className="w-10 rounded-full ring-2 ring-blue-100" />
                            <div>
                                <p className="font-display text-2xl leading-none text-slate-900 md:text-3xl">Dress Me</p>
                                <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 md:text-xs">Runway Everyday</p>
                            </div>
                        </Link>

                        <button
                            type="button"
                            className="rounded-xl border border-slate-300 bg-white/80 px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 md:hidden"
                            onClick={() => setIsMenuOpen((value) => !value)}
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-nav"
                        >
                            {isMenuOpen ? "Close" : "Menu"}
                        </button>
                    </div>

                    <div className="relative w-full md:max-w-lg">
                        <img src={Search} alt="Search" className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 opacity-70" />
                        <input
                            type="text"
                            placeholder="Search collections, brands, looks..."
                            className="w-full rounded-full border border-slate-300/70 bg-white/80 py-2.5 pl-12 pr-4 text-sm text-slate-700 shadow-inner outline-none transition focus:border-blue-400"
                        />
                    </div>

                    <div className="hidden items-center justify-end gap-3 md:flex">
                        <div className="relative group">
                            <img src={avatar} alt="User" className="h-10 w-10 cursor-pointer rounded-full border-2 border-blue-200 shadow" />
                            <div className="absolute right-0 mt-2 w-40 rounded-xl border border-slate-200 bg-white/95 py-2 opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 z-20">
                                <a href="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50">Profile</a>
                                <a href="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50">Orders</a>
                                <Link to="/SignIn" className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50">Sign In</Link>
                            </div>
                        </div>

                        <div className="relative">
                            <button className="rounded-full border border-slate-200 bg-white p-2 shadow hover:scale-[1.03] transition-transform">
                                <img src={Cart} alt="Cart" className="w-6 h-6" />
                            </button>
                            <span className="absolute -right-2 -top-2 rounded-full bg-orange-500 px-2 py-0.5 text-xs font-bold text-white shadow">2</span>
                        </div>
                    </div>
                </div>

                <hr className="my-3 border-t border-slate-200" />

                <nav id="mobile-nav" className={`${isMenuOpen ? "block" : "hidden"} md:block`}>
                    <ul className="grid gap-2 md:flex md:min-w-max md:items-center md:gap-5 md:overflow-x-auto md:text-base text-sm font-semibold text-slate-700">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                {link.to === "#" ? (
                                    <a
                                        href="#"
                                        className="block rounded-full px-4 py-2 hover:bg-blue-100 hover:text-blue-700 transition"
                                    >
                                        {link.label}
                                    </a>
                                ) : (
                                    <Link
                                        to={link.to}
                                        className="block rounded-full px-4 py-2 hover:bg-blue-100 hover:text-blue-700 transition"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                )}
                            </li>
                        ))}

                        <li className="mt-1 flex items-center gap-2 md:hidden">
                            <Link to="/SignIn" className="btn-ghost flex-1 rounded-xl px-3 py-2 text-center text-xs font-bold uppercase tracking-widest text-slate-700">
                                Sign In
                            </Link>
                            <button className="relative rounded-xl border border-slate-200 bg-white px-3 py-2 shadow">
                                <img src={Cart} alt="Cart" className="w-5 h-5" />
                                <span className="absolute -right-2 -top-2 rounded-full bg-orange-500 px-1.5 py-0.5 text-[10px] font-bold text-white shadow">2</span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
export default Header;