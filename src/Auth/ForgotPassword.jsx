import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, ArrowLeft, KeyRound } from 'lucide-react'

const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            alert('Secret key reset instructions dispatched to your email address.')
        }, 2000)
    }

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-dark-950 font-sans px-4 overflow-hidden">
            {/* Background overlays */}
            <div className="fixed inset-0 grid-bg pointer-events-none z-0"></div>
            <div
                className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none z-0"
                style={{ backgroundImage: `url('/images/img_12.jpg')` }}
            ></div>
            <div className="fixed top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gold-dark/10 blur-[120px] pointer-events-none z-0 animate-pulse-slow"></div>
            <div className="fixed bottom-[-15%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gold-medium/5 blur-[150px] pointer-events-none z-0 animate-pulse-slow"></div>

            <div className="relative z-10 w-full max-w-md">
                {/* Back button */}
                <Link
                    to="/login"
                    className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-gold-light transition-colors duration-200 mb-6 uppercase tracking-wider text-glow"
                >
                    <ArrowLeft className="w-3.5 h-3.5" /> Back to Access Portal
                </Link>

                {/* Card */}
                <div className="rounded-2xl border border-gold-medium/30 p-8 sm:p-10 bg-dark-950/90 shadow-2xl glass-card glow-gold">

                    {/* Header */}
                    <div className="text-center space-y-2 mb-8">
                        <Link to="/" className="inline-block relative w-16 h-16 rounded-full overflow-hidden border border-gold-medium/30 bg-black p-0.5 glow-gold mx-auto">
                            <img
                                src="/logo.jpeg"
                                alt="Dark Horse Finance Logo"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </Link>
                        <h2 className="text-2xl font-bold font-display uppercase tracking-widest text-white mt-3">Reset Secret Key</h2>
                        <p className="text-xs text-gray-500">Provide registration email to verify sponsor credentials.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Email Input */}
                        <div className="space-y-1.5">
                            <label className="text-xs text-gray-500 uppercase tracking-wider block font-semibold">Registered Email</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-600">
                                    <Mail className="w-4 h-4" />
                                </span>
                                <input
                                    type="email"
                                    required
                                    placeholder="alexander@mercerholding.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-dark-900 border border-gold-dark/20 rounded-lg pl-10 pr-4 py-3 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-gold-medium/60 focus:ring-1 focus:ring-gold-medium/60 transition-colors"
                                />
                            </div>
                        </div>

                        {/* Submit */}
                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-3.5 rounded-lg text-center text-xs font-bold uppercase tracking-widest text-black bg-gradient-to-r from-gold-dark via-gold-medium to-gold-light hover:brightness-110 shadow-lg shadow-gold-medium/10 transition-all cursor-pointer flex items-center justify-center gap-2"
                            >
                                {isLoading ? (
                                    <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                                ) : (
                                    <>Send Recovery Instructions</>
                                )}
                            </button>
                        </div>
                    </form>

                    {/* Account Login Footer */}
                    <div className="mt-8 pt-6 border-t border-gold-dark/10 text-center text-xs">
                        <span className="text-gray-500">Remember your key credentials? </span>
                        <Link to="/login" className="text-gold-medium hover:text-gold-light hover:underline font-bold">
                            Access Terminal
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ForgotPassword