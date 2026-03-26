
const Footer = () => {
    return (
        <footer className="bg-blue-300 py-10 mt-20 w-full shadow-inner">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="mb-4 md:mb-0 text-center md:text-left">
                    <h3 className="font-extrabold text-2xl text-blue-900 mb-1">Dress Me</h3>
                    <p className="text-gray-700">&copy; {new Date().getFullYear()} P&M Technologies. All rights reserved.</p>
                </div>
                <div className="text-center md:text-right">
                    <p className="mb-1">Contact: <span className="font-semibold text-blue-800">+94 112 123 4567</span></p>
                    <p>Email: <a href="mailto:dressme@dress.lk" className="text-blue-800 hover:underline font-semibold">dressme@dress.lk</a></p>
                </div>
            </div>
        </footer>
    );
}
export default Footer;


