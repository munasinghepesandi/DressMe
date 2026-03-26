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
        <div className="mt-20 mb-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12 max-w-2xl mx-auto">
                    <h1 className="text-blue-600 font-bold tracking-widest uppercase text-3xl ">Top Selling Products for you</h1>
                    <p className="text-lg text-gray-400">Discover our bestsellers and new arrivals</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {ProductsData.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-3xl shadow-2xl p-4 sm:p-6 flex flex-col items-center hover:scale-105 hover:shadow-blue-100 transition-all duration-300 border border-blue-100 group w-full max-w-xs mx-auto"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-50 object-cover rounded-xl mb-6 shadow-lg group-hover:ring-4 group-hover:ring-blue-100 transition-all duration-300"
                            />
                            <h3 className="text-lg font-bold text-blue-900  group-hover:text-blue-400 transition-colors duration-200">{product.name}</h3>
                            {/* Rating */}
                            <div className="flex items-center ">
                                <span className="text-blue-400 font-bold">{product.price}</span>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:gap-4 mt-4 w-full">
                                <button className="flex-1 bg-blue-400 hover:bg-blue-500 text-white px-6  rounded-xl font-bold shadow-md transition-all duration-200 hover:scale-105">Buy Now</button>
                                <button className="flex-1 bg-gray-400 hover:bg-blue-100 text-white px-6  font-semibold rounded-xl transition-all duration-200 hover:scale-105">Add to Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;