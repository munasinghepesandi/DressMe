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
        <div className="min-h-screen pb-10">
            <Header />

            <main className="px-0">
                <section className="bg-mesh reveal-up relative mt-0 grid w-full overflow-hidden rounded-none border-y border-slate-200/70 px-4 py-8 md:mt-0 md:px-10 md:py-14 lg:grid-cols-2 lg:gap-10 lg:px-14">
                    <div className="relative z-10 flex flex-col gap-6">
                        <span className="w-fit rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-700 md:px-4 md:text-xs md:tracking-[0.24em]">
                            New Season 2026
                        </span>
                        <h1 className="font-display text-4xl leading-[0.98] text-slate-900 sm:text-5xl md:text-7xl">
                            Curated Street Luxe
                            <span className="block text-blue-700">for Every City Moment</span>
                        </h1>
                        <p className="max-w-xl text-sm text-slate-600 sm:text-base md:text-lg">
                            Discover fashion-forward essentials with editorial-level styling. From elevated basics to statement pieces, every drop is designed to move with your lifestyle.
                        </p>
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                            <a href="#collections" className="btn-primary rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] transition-all sm:px-7 sm:py-3 sm:text-sm sm:tracking-widest">
                                Explore Drop
                            </a>
                            <a href="#products" className="btn-ghost rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-700 transition-all hover:bg-white sm:px-7 sm:py-3 sm:text-sm sm:tracking-widest">
                                Shop Bestsellers
                            </a>
                        </div>
                        <div className="flex flex-wrap gap-4 pt-1 text-xs text-slate-600 sm:gap-6 sm:pt-3 sm:text-sm">
                            <p><span className="font-bold text-slate-900">48H</span> express delivery</p>
                            <p><span className="font-bold text-slate-900">Free</span> styling assistant</p>
                            <p><span className="font-bold text-slate-900">500+</span> new arrivals</p>
                        </div>
                    </div>

                    <div className="reveal-up stagger-1 relative mt-3 md:mt-0">
                        <div className="absolute -right-4 -top-4 h-28 w-28 rounded-full bg-blue-200/70 blur-2xl" />
                        <img
                            src={img1}
                            alt="Fashion Hero"
                            className="h-full max-h-[420px] w-full rounded-[1.2rem] object-cover shadow-[0_20px_40px_rgba(26,34,56,0.18)] sm:max-h-[520px] md:rounded-[1.6rem]"
                        />
                    </div>
                </section>

                <section id="collections" className="mt-10 w-full px-4 md:mt-14 md:px-10 lg:px-14">
                    <div className="mb-6 flex flex-col items-start justify-between gap-3 md:mb-8 md:flex-row md:items-end md:gap-4">
                        <div>
                            <h2 className="font-display text-3xl text-slate-900 md:text-5xl">Featured Collections</h2>
                            <p className="mt-1 text-sm text-slate-600 md:mt-2 md:text-base">Three standout edits built for your weekly rotation.</p>
                        </div>
                        <span className="hidden rounded-full border border-slate-300 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 md:inline-block">
                            Handpicked
                        </span>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        <article className="reveal-up stagger-1 relative overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white/80 shadow-lg">
                            <img src={img7} alt="Men's Collection" className="h-64 w-full object-cover sm:h-80" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                                <h3 className="font-display text-3xl text-white sm:text-4xl">Men</h3>
                                <a href="#" className="rounded-full bg-white px-4 py-2 text-sm font-bold uppercase tracking-wider text-slate-900">Shop</a>
                            </div>
                        </article>

                        <article className="reveal-up stagger-2 relative overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white/80 shadow-lg">
                            <img src={img5} alt="Women Collection" className="h-64 w-full object-cover sm:h-80" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                                <h3 className="font-display text-3xl text-white sm:text-4xl">Women</h3>
                                <a href="#" className="rounded-full bg-white px-4 py-2 text-sm font-bold uppercase tracking-wider text-slate-900">Shop</a>
                            </div>
                        </article>

                        <article className="reveal-up stagger-3 relative overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white/80 shadow-lg">
                            <img src={img15} alt="Kids Collection" className="h-64 w-full object-cover sm:h-80" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                                <h3 className="font-display text-3xl text-white sm:text-4xl">Kids</h3>
                                <a href="#" className="rounded-full bg-white px-4 py-2 text-sm font-bold uppercase tracking-wider text-slate-900">Shop</a>
                            </div>
                        </article>
                    </div>
                </section>

                <section className="mt-12 w-full px-4 md:px-10 lg:px-14">
                    <div className="reveal-up glass-panel flex flex-col items-start justify-between gap-5 rounded-[1.8rem] border px-6 py-7 md:flex-row md:items-center md:px-10">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-600">Limited Time</p>
                            <h2 className="font-display mt-2 text-4xl text-slate-900 md:text-5xl">Mega Winter Sale</h2>
                            <p className="mt-1 text-slate-600">Enjoy up to <span className="font-bold text-orange-600">50% off</span> on selected signature pieces.</p>
                        </div>
                        <a href="#products" className="btn-primary rounded-full px-7 py-3 text-sm font-bold uppercase tracking-wider transition-all">
                            Claim Offers
                        </a>
                    </div>
                </section>
            </main>

            <Products />
            <About />
            <Footer />
        </div>
    );
};

export default Home;
