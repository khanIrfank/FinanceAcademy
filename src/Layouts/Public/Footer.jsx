import React from 'react'
import { Send, ShieldAlert, Award, Globe, ShieldCheck, FileText, Scale } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { isDark } = useTheme()

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for subscribing to Dark Horse Intelligence reports!')
  }

  return (
    <footer className={`relative z-10 border-t font-sans mt-16 ${isDark ? 'bg-dark-950 border-gold-dark/20 text-gray-400' : 'bg-[#f5f0e8] border-gold-dark/20 text-[#8a7050]'}`}>
      {/* Upper Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Info */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gold-medium/30 bg-black flex items-center justify-center p-0.5 glow-gold">
                <img
                  src="/logo.jpeg"
                  alt="Dark Horse Finance Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <span className="text-lg font-bold font-display uppercase tracking-widest bg-gradient-to-r from-gold-light via-gold-medium to-gold-dark bg-clip-text text-transparent">
                  Dark Horse
                </span>
                <span className="block text-[9px] uppercase tracking-[0.25em] text-gray-400 font-medium">
                  Finance Academy
                </span>
              </div>
            </div>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-500' : 'text-[#8a7050]'}`}>
              Elite institutional-grade education in Real Estate, Forex, Equities, and Cryptocurrencies. Empowering traders with algorithmic precision and collaborative analysis.
            </p>
            <div className="flex items-center gap-3 pt-2">
            {[Globe, Award, ShieldAlert].map((Icon, i) => (
              <div key={i} className={`flex items-center justify-center w-8 h-8 rounded-full border cursor-pointer transition-colors duration-200 ${isDark ? 'border-gold-dark/20 bg-dark-900 text-gold-medium hover:text-gold-light hover:border-gold-medium' : 'border-gold-dark/20 bg-[#f0e8d0] text-gold-dark hover:text-gold-medium hover:border-gold-medium'}`}>
                <Icon className="w-4 h-4" />
              </div>
            ))}
          </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold font-display uppercase tracking-wider text-gold-light">
              Academy & Platform
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="hover:text-gold-light hover:underline transition-all text-left"
                >
                  Home Portal
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('markets')}
                  className="hover:text-gold-light hover:underline transition-all text-left"
                >
                  Live Market Feed
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('academy')}
                  className="hover:text-gold-light hover:underline transition-all text-left"
                >
                  Trading Academy
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('news')}
                  className="hover:text-gold-light hover:underline transition-all text-left"
                >
                  Daily Market News
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('ideas')}
                  className="hover:text-gold-light hover:underline transition-all text-left"
                >
                  Community Trading Ideas
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Trust */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold font-display uppercase tracking-wider text-gold-light">
              Legal & Trust
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { icon: ShieldCheck, label: 'Risk Disclosure Policy' },
                { icon: FileText,    label: 'Terms of Service' },
                { icon: Scale,       label: 'Privacy Policy' },
                { icon: ShieldAlert, label: 'Compliance & Regulatory' },
              ].map(({ icon: Icon, label }) => (
                <li key={label}>
                  <button
                    onClick={() => alert('Document will be available soon.')}
                    className={`flex items-center gap-2 text-left hover:text-gold-light transition-colors text-sm ${isDark ? 'text-gray-500' : 'text-[#8a7050]'}`}
                  >
                    <Icon className="w-3.5 h-3.5 text-gold-medium shrink-0" />
                    <span dangerouslySetInnerHTML={{ __html: label }} />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold font-display uppercase tracking-wider text-gold-light">
              Market Intelligence
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Subscribe to get institutional trade blueprints, technical reports, and VIP lounge invitations.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2">
            <input
            type="email"
            required
            placeholder="Institutional email"
            className={`w-full border rounded-lg px-4 py-2 text-sm placeholder-gray-600 focus:outline-none focus:border-gold-medium/60 ${isDark ? 'bg-dark-900 border-gold-dark/20 text-gray-200' : 'bg-white border-gold-dark/20 text-[#3a2e10]'}`}
          />
              <button
                type="submit"
                className="bg-gradient-to-r from-gold-dark to-gold-medium text-black px-4 py-2 rounded-lg hover:brightness-110 transition-all flex items-center justify-center shrink-0 cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Disclosures */}
    <div className={`border-t py-8 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-dark-950 border-gold-dark/10' : 'bg-[#f0e8d0] border-gold-dark/15'}`}>
        <div className={`max-w-7xl mx-auto text-[11px] leading-relaxed text-justify space-y-4 ${isDark ? 'text-gray-600' : 'text-[#9a8060]'}`}>
          <p>
            <strong>Risk Warning:</strong> Trading Real Estate assets, G10 Foreign Exchange (Forex), Stock Markets, CFDs, and digital assets carries high levels of risk and speculation. Education modules are structured for training purposes only and do not constitute financial advice. Dark Horse Finance does not claim responsibility for mock execution results.
          </p>
        </div>
      </div>

      {/* Copyright */}
    <div className={`py-6 border-t text-center text-xs px-4 ${isDark ? 'bg-black border-gold-dark/5 text-gray-600' : 'bg-[#ede4d0] border-gold-dark/10 text-[#9a8060]'}`}>
        <p>&copy; {currentYear} Dark Horse Finance. Strategy. Growth. Wealth. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer