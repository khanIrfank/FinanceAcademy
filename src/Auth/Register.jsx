import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Mail, Lock, User, ArrowLeft, Users, ShieldCheck, UserCheck } from 'lucide-react'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [sponsorId, setSponsorId] = useState('DH_GLOBAL_ELITE')
    const [agree, setAgree] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            alert(`Registration successful! Sponsor linked: ${sponsorId}. Welcome to the Elite Network.`)
            navigate('/login')
        }, 2000)
    }

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-dark-950 font-sans px-4 py-12 overflow-hidden">
            {/* Background overlays */}
            <div className="fixed inset-0 grid-bg pointer-events-none z-0"></div>
            <div
                className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none z-0"
                style={{ backgroundImage: `url('/images/img_12.jpg')` }}
            ></div>
            <div className="fixed top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gold-dark/10 blur-[120px] pointer-events-none z-0 animate-pulse-slow"></div>
            <div className="fixed bottom-[-15%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gold-medium/5 blur-[150px] pointer-events-none z-0 animate-pulse-slow"></div>

            <div className="relative z-10 w-full max-w-md my-8">
                {/* Back button */}
                <Link
                    to="/"
                    className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-gold-light transition-colors duration-200 mb-6 uppercase tracking-wider text-glow"
                >
                    <ArrowLeft className="w-3.5 h-3.5" /> Back to Academy
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
                        <h2 className="text-2xl font-bold font-display uppercase tracking-widest text-white mt-3">Join Elite Club</h2>
                        <p className="text-xs text-gray-500">Apply for lifetime membership in our trading group.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">

                        {/* Sponsor Identification (MLM Hook) */}
                        <div className="bg-dark-900/60 rounded-lg p-3.5 border border-gold-dark/15 mb-2 flex items-center justify-between text-xs">
                            <div className="flex items-center gap-1.5">
                                <Users className="w-4 h-4 text-gold-medium" />
                                <span className="text-gray-500">Assigned Sponsor Code:</span>
                            </div>
                            <input
                                type="text"
                                required
                                value={sponsorId}
                                onChange={(e) => setSponsorId(e.target.value.toUpperCase())}
                                className="bg-transparent text-right font-mono font-bold text-gold-light text-xs focus:outline-none focus:border-b focus:border-gold-medium w-36 uppercase"
                            />
                        </div>

                        {/* Name */}
                        <div className="space-y-1.5">
                            <label className="text-xs text-gray-500 uppercase tracking-wider block font-semibold">Full Legal Name</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-600">
                                    <User className="w-4 h-4" />
                                </span>
                                <input
                                    type="text"
                                    required
                                    placeholder="Alexander Mercer"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full bg-dark-900 border border-gold-dark/20 rounded-lg pl-10 pr-4 py-2.5 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-gold-medium/60 focus:ring-1 focus:ring-gold-medium/60 transition-colors"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="space-y-1.5">
                            <label className="text-xs text-gray-500 uppercase tracking-wider block font-semibold">Corporate Email</label>
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
                                    className="w-full bg-dark-900 border border-gold-dark/20 rounded-lg pl-10 pr-4 py-2.5 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-gold-medium/60 focus:ring-1 focus:ring-gold-medium/60 transition-colors"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="space-y-1.5">
                            <label className="text-xs text-gray-500 uppercase tracking-wider block font-semibold">Secret Key (Password)</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-600">
                                    <Lock className="w-4 h-4" />
                                </span>
                                <input
                                    type="password"
                                    required
                                    placeholder="••••••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-dark-900 border border-gold-dark/20 rounded-lg pl-10 pr-4 py-2.5 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-gold-medium/60 focus:ring-1 focus:ring-gold-medium/60 transition-colors"
                                />
                            </div>
                        </div>

                        {/* Terms checkbox */}
                        <div className="flex items-start gap-2.5 pt-2">
                            <input
                                type="checkbox"
                                id="agree"
                                required
                                checked={agree}
                                onChange={(e) => setAgree(e.target.checked)}
                                className="mt-1 accent-gold-medium rounded"
                            />
                            <label htmlFor="agree" className="text-[10px] text-gray-500 leading-normal">
                                I agree to the <span className="text-gold-light hover:underline cursor-pointer">Risk Disclosure Policy</span> and understand that trading products are high-risk. I confirm sponsor connection is correct.
                            </label>
                        </div>

                        {/* Submit */}
                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-3 rounded-lg text-center text-xs font-bold uppercase tracking-widest text-black bg-gradient-to-r from-gold-dark via-gold-medium to-gold-light hover:brightness-110 shadow-lg shadow-gold-medium/10 transition-all cursor-pointer flex items-center justify-center gap-2"
                            >
                                {isLoading ? (
                                    <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                                ) : (
                                    <>Apply for Network Membership</>
                                )}
                            </button>
                        </div>
                    </form>

                    {/* Account Login Footer */}
                    <div className="mt-8 pt-6 border-t border-gold-dark/10 text-center text-xs">
                        <span className="text-gray-500">Already registered? </span>
                        <Link to="/login" className="text-gold-medium hover:text-gold-light hover:underline font-bold">
                            Access Terminal
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Register