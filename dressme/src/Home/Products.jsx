import img1 from "../assets/img1.avif";
import img2 from "../assets/img9.jpg";
import img3 from "../assets/img3.avif";
import img4 from "../assets/img4.avif";
import img5 from "../assets/img5.avif";
import img6 from "../assets/img6.webp";
import img7 from "../assets/img7.webp";
import img8 from "../assets/img8.avif";

const ProductsData = [
    { id: 1, name: "Black Top", price: "$49.99", image: img1 },
    { id: 2, name: "Chunky Shoes", price: "$29.99", image: img2 },
    { id: 3, name: "Cargo Pant Pink", price: "$79.99", image: img3 },
    { id: 4, name: "Floral Frock Blue", price: "$39.99", image: img4 },
    { id: 5, name: "Casual Frock", price: "$59.99", image: img5 },
    { id: 6, name: "Office Wear", price: "$19.99", image: img6 },
    { id: 7, name: "White Shirt Men", price: "$69.99", image: img7 },
    { id: 8, name: "Hand Bag Pearlwhite", price: "$34.99", image: img8 },
];

const Products = () => {
    return (
        <section id="products" className="mb-14 mt-14 w-full px-4 md:mt-16 md:px-10 lg:px-14">
            <div className="mb-8 flex flex-col gap-3 md:mb-10 md:flex-row md:items-end md:justify-between">
                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-700">Most Wanted</p>
                    <h2 className="font-display text-3xl text-slate-900 md:text-5xl">Top Selling Products</h2>
                    <p className="mt-1 text-sm text-slate-600 md:mt-2 md:text-base">Sleek, versatile picks that never stay in stock for long.</p>
                </div>

                <a href="#" className="w-fit rounded-full border border-slate-300 bg-white/70 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-700 transition hover:bg-white">
                    View All
                </a>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {ProductsData.map((product) => (
                        <article
                            key={product.id}
                            className="group glass-panel reveal-up overflow-hidden rounded-[1.5rem] border p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_30px_rgba(26,34,56,0.16)]"
                        >
                            <div className="relative">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-56 w-full rounded-2xl object-cover transition duration-300 group-hover:scale-[1.02]"
                                />
                                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-700">
                                    Trending
                                </span>
                            </div>

                            <div className="mt-4 flex items-start justify-between gap-3">
                                <h3 className="text-base font-bold text-slate-900">{product.name}</h3>
                                <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-extrabold text-blue-700">{product.price}</span>
                            </div>

                            <p className="mt-2 text-sm text-slate-600">Tailored fit, premium comfort, and all-day style confidence.</p>

                            <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                                <button className="btn-primary flex-1 rounded-xl px-3 py-2 text-xs font-bold uppercase tracking-wider transition-all">Buy Now</button>
                                <button className="btn-ghost flex-1 rounded-xl px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 transition-all hover:bg-white">Add to Cart</button>
                            </div>
                        </article>
                    ))}
            </div>
        </section>
    );
};

export default Products;