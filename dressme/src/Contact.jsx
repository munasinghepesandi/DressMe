import Header from "./Header/Head";

const Contact = () => {
    return (
        <div className="min-h-screen px-4 pb-10">
            <Header />
            <div className="mx-auto mt-8 max-w-6xl">
                <div className="grid gap-6 md:grid-cols-2">
                    <div className="glass-panel reveal-up rounded-[1.8rem] border p-6 md:p-9">
                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-700">Let's Connect</p>
                        <h2 className="font-display mt-3 text-4xl text-slate-900 md:text-5xl">Contact Us</h2>
                        <p className="mt-3 text-sm text-slate-600 md:mt-4 md:text-base">
                            Have a question about your order, fit, or style recommendations? Our team is here to help you anytime.
                        </p>
                        <div className="mt-7 space-y-2 text-sm text-slate-700">
                            <p><span className="font-semibold">Phone:</span> +94 112 123 4567</p>
                            <p><span className="font-semibold">Email:</span> dressme@dress.lk</p>
                            <p><span className="font-semibold">Hours:</span> Mon - Sat, 9:00 AM - 8:00 PM</p>
                        </div>
                    </div>

                    <div className="glass-panel reveal-up stagger-1 rounded-[1.8rem] border p-6 md:p-9">
                        <form className="flex w-full flex-col gap-4">
                        <div>
                            <label htmlFor="name" className="mb-1 block text-sm font-semibold text-slate-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full rounded-xl border border-slate-300/80 bg-white/80 px-4 py-2.5 text-slate-700 outline-none transition focus:border-blue-400"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="mb-1 block text-sm font-semibold text-slate-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full rounded-xl border border-slate-300/80 bg-white/80 px-4 py-2.5 text-slate-700 outline-none transition focus:border-blue-400"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="mb-1 block text-sm font-semibold text-slate-700">Message</label>
                            <textarea
                                id="message"
                                className="w-full rounded-xl border border-slate-300/80 bg-white/80 px-4 py-2.5 text-slate-700 outline-none transition focus:border-blue-400"
                                placeholder="Enter your message"
                                rows="4"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="btn-primary mt-2 w-full rounded-xl py-2.5 text-sm font-bold uppercase tracking-widest transition-all"
                        >
                            Send Message
                        </button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;