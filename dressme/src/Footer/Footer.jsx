
const Footer = () => {
    return (
        <footer className="mt-16 w-full px-4 pb-8 md:px-10 lg:px-14">
            <div className="glass-panel rounded-[1.8rem] border px-6 py-8 md:px-10 md:py-10">
                <div className="grid gap-8 md:grid-cols-3">
                    <div>
                        <h3 className="font-display text-3xl text-slate-900 md:text-4xl">Dress Me</h3>
                        <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-600">
                            Luxury-inspired essentials for modern wardrobes. Built for quality, designed for confidence.
                        </p>
                    </div>

                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Support</p>
                        <ul className="mt-3 space-y-2 text-sm text-slate-700">
                            <li>Shipping and Returns</li>
                            <li>Order Tracking</li>
                            <li>Size Guide</li>
                        </ul>
                    </div>

                    <div className="text-left md:text-right">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Contact</p>
                        <p className="mt-3 text-sm text-slate-700">+94 112 123 4567</p>
                        <p className="text-sm text-slate-700">
                            <a href="mailto:dressme@dress.lk" className="font-semibold text-blue-700 hover:underline">dressme@dress.lk</a>
                        </p>
                    </div>
                </div>

                <div className="mt-7 border-t border-slate-200 pt-5 text-center text-sm text-slate-500 md:text-left">
                    &copy; {new Date().getFullYear()} P&M Technologies. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
export default Footer;


