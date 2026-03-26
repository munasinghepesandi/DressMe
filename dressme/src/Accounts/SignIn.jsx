import { Link } from "react-router-dom";

const SignIn = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-50 py-12 px-4">
            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md flex flex-col items-center">
                <h2 className="text-3xl font-bold text-blue-500 mb-2">Sign In</h2>
                <p className="text-gray-400 mb-6">Login to your Dress Me account</p>
                <form className="w-full flex flex-col gap-4">
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
                        <label htmlFor="password" className="block text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-400"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 rounded-lg transition-all duration-200 mt-2"
                    >
                        Login
                    </button>
                </form>
                <p className="mt-6 text-gray-400 text-sm">
                    Don't have an account? <Link exact to="/SignUp"><a href="#" className="text-blue-400 hover:underline">Sign Up</a></Link>
                </p>
            </div>
        </div>
    );
}

export default SignIn;