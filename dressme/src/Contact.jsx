import Header from "./Header/Head";

const Contact = () => {
    return (
        <div>
            <Header />
            <div className="min-h-screen flex items-center justify-center bg-blue-50 py-12 px-4">
                <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
                    <h2 className="text-3xl font-bold text-blue-400 mb-2">Contact Us</h2>
                    <p className="text-gray-400 mb-6">We would love to hear from you! Please fill out the form below to get in touch.</p>
                    <form className="w-full flex flex-col gap-4">
                        <div>
                            <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-400"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-400"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
                            <textarea
                                id="message"
                                className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-400"
                                placeholder="Enter your message"
                                rows="4"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-400 hover:bg-blue-500 text-white font-semibold py-2 rounded-lg transition-all duration-200 mt-2"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Contact;