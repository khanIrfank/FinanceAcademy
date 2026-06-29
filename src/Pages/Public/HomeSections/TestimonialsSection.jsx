import React from 'react'
import Tilt from 'react-parallax-tilt'
import { Users, Star, Quote } from 'lucide-react'
import { useTheme } from '../../../context/ThemeContext'

const TestimonialsSection = ({ testimonialsRef }) => {
  const { isDark } = useTheme()
  const reviews = [
    {
      name: "Marcus Sterling",
      role: "Founder, Capital Matrix Group",
      rank: "Diamond Pegasus Rank",
      img: "/images/img_33.jpg",
      text: "The institutional modules on Liquidity pools opened my eyes. We've structured a team of 40 active traders and scaled our commissions to unmatched levels."
    },
    {
      name: "Elena Rostova",
      role: "Quantitative Analyst",
      rank: "Gold Mustang Rank",
      img: "/images/img_34.jpg",
      text: "The combination of high-end educational modules and binary networking is genius. It completely changes how we share strategies and generate side overrides."
    },
    {
      name: "Aidan Vance",
      role: "Private Fund Manager",
      rank: "Dark Horse Elite Rank",
      img: "/images/img_35.jpg",
      text: "Securing fractional shares of the Global Trading Pool dividends was my target. The platform has provided unmatched support, and transparency is at 100%."
    }
  ]

  return (
    <section
      id="testimonials"
      ref={testimonialsRef}
      className={`relative z-10 py-20 px-4 sm:px-6 lg:px-8 border-y ${isDark ? 'bg-dark-900/30 border-gold-dark/10' : 'bg-[#f0e8d0]/30 border-gold-dark/15'}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gold-dark/10 border border-gold-medium/10 text-gold-dark text-[10px] font-bold uppercase tracking-widest">
            <Users className="w-3.5 h-3.5 text-gold-medium" /> Testimonials
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold font-display ${isDark ? 'text-white' : 'text-[#1a1200]'}`}>
            Endorsed by Elite Partners
          </h2>
          <p className={`text-sm max-w-md mx-auto leading-relaxed ${isDark ? 'text-gray-500' : 'text-[#8a7050]'}`}>
            Read how global networkers and retail students scaled their trading parameters and affiliate payouts.
          </p>
        </div>

        {/* Grid layout with Tilt Parallax Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((item, idx) => (
            <Tilt key={idx} tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} scale={1.02} className="h-full">
              <div
                className="relative p-6 rounded-2xl glass-card flex flex-col justify-between space-y-6 glow-gold-hover h-full transition-all duration-300"
              >
                <Quote className="absolute top-4 right-4 w-8 h-8 text-gold-dark/15 pointer-events-none" />

                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold-medium text-gold-medium" />
                  ))}
                </div>

                <p className={`text-xs leading-relaxed font-light italic ${isDark ? 'text-gray-400' : 'text-[#6a5a38]'}`}>
                  "{item.text}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-gold-dark/10">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-10 h-10 object-cover rounded-full border border-gold-medium/30"
                  />
                  <div>
                    <h4 className={`text-xs font-bold leading-snug ${isDark ? 'text-white' : 'text-[#1a1200]'}`}>{item.name}</h4>
                    <span className={`block text-[9px] ${isDark ? 'text-gray-500' : 'text-[#9a8060]'}`}>{item.role}</span>
                    <span className="inline-block mt-0.5 text-[9px] font-bold text-gold-medium">{item.rank}</span>
                  </div>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
