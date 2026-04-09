import { Link } from "react-router-dom";
import Header from "../Header/Head";

const SignIn = () => {
    return (
        <div className="min-h-screen px-4 pb-10">
            <Header />
            <div className="mx-auto mt-8 flex max-w-xl items-center justify-center">
                <div className="glass-panel reveal-up w-full rounded-[1.8rem] border p-8 shadow-[0_18px_32px_rgba(26,34,56,0.14)]">
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-700">Welcome Back</p>
                    <h2 className="font-display mt-2 text-4xl text-slate-900 md:text-5xl">Sign In</h2>
                    <p className="mb-6 mt-2 text-sm text-slate-600 md:text-base">Access your account to continue shopping your curated picks.</p>

                    <form className="w-full space-y-4">
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
                            <label htmlFor="password" className="mb-1 block text-sm font-semibold text-slate-700">Password</label>
                        <input
                            type="password"
                            id="password"
                                className="w-full rounded-xl border border-slate-300/80 bg-white/80 px-4 py-2.5 text-slate-700 outline-none transition focus:border-blue-400"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                            className="btn-primary mt-3 w-full rounded-xl py-2.5 text-sm font-bold uppercase tracking-widest transition-all"
                    >
                        Login
                    </button>
                </form>

                    <p className="mt-6 text-sm text-slate-600">
                        Don't have an account? <Link to="/SignUp" className="font-semibold text-blue-700 hover:underline">Sign Up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SignIn;