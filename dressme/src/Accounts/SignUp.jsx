
import Header from "../Header/Head";


const SignUp = () => {

    return (
        <div className="min-h-screen px-4 pb-10">
            <Header />
            <div className="mt-8 flex w-full items-center justify-center px-0 md:px-6 lg:px-10">
                <div className="glass-panel reveal-up w-full max-w-3xl rounded-[1.8rem] border p-8 shadow-[0_18px_32px_rgba(26,34,56,0.14)]">
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-700">Create Account</p>
                    <h2 className="font-display mt-2 text-4xl text-slate-900 md:text-5xl">Sign Up</h2>
                    <p className="mb-6 mt-2 text-sm text-slate-600 md:text-base">Start building your personalized style profile in minutes.</p>

                    <form className="w-full space-y-4">
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
                        Create Account
                    </button>
                </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;