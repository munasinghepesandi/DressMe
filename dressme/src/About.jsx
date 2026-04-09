export const About = () => {
    return (
        <section className="mt-14 w-full px-4 md:px-10 lg:px-14">
            <div className="glass-panel reveal-up rounded-[1.8rem] border p-8 md:p-10">
                <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-700">About Us</p>
                        <h2 className="font-display mt-3 text-4xl text-slate-900 md:text-5xl">Fashion With Character, Built for Real Life</h2>
                        <p className="mt-4 max-w-2xl leading-relaxed text-slate-600">
                            At Dress Me, style is the meeting point of confidence, craft, and culture. We create wearable statements for people who want their wardrobe to feel expressive but effortless. Every collection blends trend intelligence with everyday utility.
                        </p>
                        <p className="mt-3 max-w-2xl leading-relaxed text-slate-600">
                            We partner with responsible suppliers and prioritize quality materials to extend garment life. Better design, mindful sourcing, and inclusive sizing are at the center of what we deliver.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-3 text-center sm:grid-cols-2">
                        <div className="rounded-2xl border border-slate-200 bg-white/70 px-4 py-6">
                            <p className="font-display text-4xl text-slate-900">120k+</p>
                            <p className="text-sm text-slate-600">Happy Customers</p>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-white/70 px-4 py-6">
                            <p className="font-display text-4xl text-slate-900">40+</p>
                            <p className="text-sm text-slate-600">Global Labels</p>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-white/70 px-4 py-6">
                            <p className="font-display text-4xl text-slate-900">98%</p>
                            <p className="text-sm text-slate-600">On-Time Delivery</p>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-white/70 px-4 py-6">
                            <p className="font-display text-4xl text-slate-900">24/7</p>
                            <p className="text-sm text-slate-600">Style Support</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default About;