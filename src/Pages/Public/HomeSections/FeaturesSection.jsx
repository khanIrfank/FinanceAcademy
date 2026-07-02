import React, { useState, useEffect, useRef } from 'react'
import Tilt from 'react-parallax-tilt'
import { Target, ShieldCheck, Zap, BarChart3, Lock, Cpu } from 'lucide-react'
import { useTheme } from '../../../context/ThemeContext'

const features = [
  {
    icon: <Cpu className="w-6 h-6 text-gold-medium" />,
    title: "Algorithmic Precision Models",
    desc: "Harness quantitative indicators developed to identify deep bank liquidity pools and execution nodes.",
    img: "/images/feature1.jpg"
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-gold-medium" />,
    title: "Live Volatility Mapping",
    desc: "Observe real-time asset flows across Major G10 currencies and benchmark equity sectors dynamically.",
    img: "/images/feature2.png"
  },
  {
    icon: <Target className="w-6 h-6 text-gold-medium" />,
    title: "Institutional Spread Optimization",
    desc: "Benefit from virtual routing designed to minimize simulated execution slippage and trade overrides.",
    img: "/images/feature3.jpg"
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-gold-medium" />,
    title: "Advanced Drawdown Shields",
    desc: "Incorporate strict risk multipliers, capital caps, and automated hedging protocols into your trading.",
    img: "/images/feature4.jpg"
  },
  {
    icon: <Lock className="w-6 h-6 text-gold-medium" />,
    title: "Encrypted Network Ledgers",
    desc: "Sponsor associations and team volumes are recorded on high-security, tamper-proof system ledgers.",
    img: "/images/img_10.jpg"
  },
  {
    icon: <Zap className="w-6 h-6 text-gold-medium" />,
    title: "Instant Commission Routing",
    desc: "Earned affiliate dividends are verified and dispatched immediately upon module sales activations.",
    img: "/images/feature6.jpg"
  }
]

const FeaturesSection = ({ featuresRef }) => {
  const { isDark } = useTheme()

  return (
    <section
      id="features"
      ref={featuresRef}
      className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="text-center space-y-3 mb-14">
        <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gold-dark/10 border border-gold-medium/10 text-gold-dark text-[10px] font-bold uppercase tracking-widest">
          <Target className="w-3.5 h-3.5 text-gold-medium" /> Platform Intelligence
        </div>
        <h2 className={`text-3xl sm:text-4xl font-extrabold font-display ${isDark ? 'text-white' : 'text-[#1a1200]'}`}>
          Sophisticated Trading Infrastructure
        </h2>
        <p className={`text-sm max-w-md mx-auto leading-relaxed ${isDark ? 'text-gray-500' : 'text-[#8a7050]'}`}>
          Elite trading requires institutional tools. Explore the high-performance modules integrated into the Dark Horse pipeline.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((item, idx) => (
          <Tilt key={idx} tiltMaxAngleX={12} tiltMaxAngleY={12} perspective={1000} scale={1.03} className="h-full">
            <div className={`relative rounded-2xl overflow-hidden border border-gold-dark/20 flex flex-col h-[260px] transition-all duration-300 group cursor-pointer glow-gold`}>

              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${item.img}')` }}
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 z-[1]" />
              {/* Gold glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-gold-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[2]" />

              {/* Content */}
              <div className="relative z-[3] flex flex-col justify-end h-full p-5 space-y-2">
                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-black/50 border border-gold-medium/30 flex items-center justify-center glow-gold mb-1 backdrop-blur-sm">
                  {item.icon}
                </div>
                <h3 className="text-sm font-bold text-gold-dark group-hover:text-gold-dark transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-[11px] text-gold-dark leading-relaxed font-light line-clamp-2 group-hover:text-gray-200 transition-colors duration-300">
                  {item.desc}
                </p>
                {/* Bottom bar */}
                <div className="h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-gold-dark to-gold-dark transition-all duration-500 rounded-full mt-1" />
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  )
}

export default FeaturesSection
