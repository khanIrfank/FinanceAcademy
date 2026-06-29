import React, { useState, useEffect, useRef, useCallback } from 'react'
import Tilt from 'react-parallax-tilt'
import { Activity, MessageSquare, ThumbsUp, ChevronLeft, ChevronRight, UserCircle2 } from 'lucide-react'
import { useTheme } from '../../../context/ThemeContext'

const ideas = [
  {
    title: "TOP Stocks for Second Half of 2026 – SPCX, AVGO and More",
    desc: "In this post I'll be doing a stock market update for equities to look at in the second half of 2026. The strongest sector inflows...",
    img: "/images/img_13.jpg",
    author: "Crypto-Check-",
    date: "Jun 19",
    comments: 22,
    likes: 71
  },
  {
    title: "Bottom in October? Time, Trend, Valuation & Momentum Say Not Yet",
    desc: "Bitcoin is at a very key support level — time, trend, valuation & momentum are not fully aligned yet. Here's a detailed breakdown...",
    img: "/images/img_14.jpg",
    author: "MBM_Crypto",
    date: "Updated Jun 22",
    comments: 68,
    likes: 170
  },
  {
    title: "SpaceX IPO Rocket Soars 20% in Public Debut. What Happens Next?",
    desc: "SpaceX NASDAQ:SPCX finally arrived on the public markets and the debut looked a lot like one of its Falcon rocket liftoffs...",
    img: "/images/img_15.jpg",
    author: "TradingView",
    date: "Jun 15",
    comments: 33,
    likes: 391
  },
  {
    title: "Forex EUR/USD: Liquidity Grab Before Bullish Continuation",
    desc: "EUR/USD has swept the lows and is showing signs of institutional accumulation. A strong bullish break above 1.10 would confirm...",
    img: "/images/img_14.jpg",
    author: "FX_Institute",
    date: "Jun 24",
    comments: 45,
    likes: 128
  },
  {
    title: "Gold hits $2,450 – Is this the breakout institutions were waiting for?",
    desc: "XAUUSD smashed through the $2,400 resistance on high volume. Central bank buying is accelerating and retail sentiment is lagging...",
    img: "/images/img_16.jpg",
    author: "GoldBull2026",
    date: "Jun 21",
    comments: 57,
    likes: 244
  },
  {
    title: "NVIDIA Q3 Earnings Preview: AI Demand Still Insatiable",
    desc: "NVDA set to report quarterly earnings this week with analysts expecting another massive beat on AI chip demand from cloud giants...",
    img: "/images/img_17.jpg",
    author: "TechQuant",
    date: "Jun 18",
    comments: 81,
    likes: 302
  }
]

const VISIBLE_COUNT_LG = 3
const VISIBLE_COUNT_MD = 2
const VISIBLE_COUNT_SM = 1

const IdeasSection = ({ ideasRef }) => {
  const { isDark } = useTheme()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(VISIBLE_COUNT_LG)
  const [isAnimating, setIsAnimating] = useState(false)
  const intervalRef = useRef(null)

  // Responsive visible count
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setVisibleCount(VISIBLE_COUNT_SM)
      else if (window.innerWidth < 1024) setVisibleCount(VISIBLE_COUNT_MD)
      else setVisibleCount(VISIBLE_COUNT_LG)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const maxIndex = ideas.length - visibleCount

  const goNext = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 400)
  }, [isAnimating, maxIndex])

  const goPrev = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1))
    setTimeout(() => setIsAnimating(false), 400)
  }, [isAnimating, maxIndex])

  // Auto-slide every 4s
  useEffect(() => {
    intervalRef.current = setInterval(goNext, 4000)
    return () => clearInterval(intervalRef.current)
  }, [goNext])

  const pauseAuto = () => clearInterval(intervalRef.current)
  const resumeAuto = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(goNext, 4000)
  }

  return (
    <section
      id="ideas"
      ref={ideasRef}
      className={`relative z-10 py-20 px-4 sm:px-6 lg:px-8 border-y ${isDark ? 'bg-dark-900/40 border-gold-dark/10' : 'bg-[#f0e8d0]/40 border-gold-dark/15'
        }`}
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 text-left">
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gold-dark/10 border border-gold-medium/10 text-gold-dark text-[10px] font-bold uppercase tracking-widest">
              <Activity className="w-3.5 h-3.5 text-gold-medium" /> Traders Lounge
            </div>
            <h2 className={`text-3xl sm:text-4xl font-extrabold font-display ${isDark ? 'text-white' : 'text-[#1a1200]'}`}>
              Community Trading Ideas
            </h2>
            <p className={`text-sm max-w-md leading-relaxed font-light ${isDark ? 'text-gray-500' : 'text-[#8a7050]'}`}>
              Explore Editor's Picks and popular chart analyses uploaded by seasoned financial analysts.
            </p>
          </div>

          {/* Arrow Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={goPrev}
              className={`w-10 h-10 flex items-center justify-center rounded-full border transition-all cursor-pointer hover:scale-105 ${isDark
                ? 'border-gold-dark/25 bg-dark-900 text-gold-medium hover:border-gold-medium hover:text-gold-light'
                : 'border-gold-dark/30 bg-[#f0e8d0] text-gold-dark hover:border-gold-medium hover:text-gold-medium'
                }`}
              aria-label="Previous idea"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className={`text-xs font-mono font-bold ${isDark ? 'text-gray-500' : 'text-[#9a8060]'}`}>
              {currentIndex + 1} / {maxIndex + 1}
            </span>
            <button
              onClick={goNext}
              className={`w-10 h-10 flex items-center justify-center rounded-full border transition-all cursor-pointer hover:scale-105 ${isDark
                ? 'border-gold-dark/25 bg-dark-900 text-gold-medium hover:border-gold-medium hover:text-gold-light'
                : 'border-gold-dark/30 bg-[#f0e8d0] text-gold-dark hover:border-gold-medium hover:text-gold-medium'
                }`}
              aria-label="Next idea"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slider Viewport */}
        <div
          className="overflow-hidden"
          onMouseEnter={pauseAuto}
          onMouseLeave={resumeAuto}
        >
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(calc(-${currentIndex * (100 / visibleCount)}% - ${currentIndex * 24 / visibleCount}px))`,
            }}
          >
            {ideas.map((item, idx) => (
              <div
                key={idx}
                className="flex-shrink-0"
                style={{ width: `calc(${100 / visibleCount}% - ${(visibleCount - 1) * 24 / visibleCount}px)` }}
              >
                <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} perspective={1000} scale={1.015} className="h-full">
                  <div className={`rounded-2xl overflow-hidden glass-card flex flex-col h-[460px] glow-gold hover:-translate-y-1 transition-all duration-300`}>

                    {/* Chart Image */}
                    <div className="h-52 overflow-hidden relative border-b border-gold-dark/10 bg-black flex-shrink-0">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                    </div>

                    {/* Content */}
                    <div className="p-5 flex-grow flex flex-col justify-between">
                      <div className="space-y-2.5">
                        <h3 className={`text-xs font-bold leading-snug hover:text-gold-light cursor-pointer line-clamp-2 transition-colors ${isDark ? 'text-white' : 'text-[#1a1200]'}`}>
                          {item.title}
                        </h3>
                        <p className={`text-[11px] leading-relaxed font-light line-clamp-3 ${isDark ? 'text-gray-500' : 'text-[#8a7050]'}`}>
                          {item.desc}
                        </p>
                      </div>

                      {/* Footer */}
                      <div className={`pt-4 border-t flex items-center justify-between ${isDark ? 'border-gold-dark/10' : 'border-gold-dark/15'}`}>
                        <div className="flex items-center gap-2">
                          <UserCircle2 className="w-6 h-6 text-gold-medium" />
                          <div className="flex flex-col">
                            <span className={`text-[10px] font-bold leading-none ${isDark ? 'text-gray-300' : 'text-[#3a2e10]'}`}>{item.author}</span>
                            <span className={`text-[8px] font-semibold ${isDark ? 'text-gray-600' : 'text-[#9a8060]'}`}>{item.date}</span>
                          </div>
                        </div>
                        <div className={`flex items-center gap-3 text-[10px] font-mono ${isDark ? 'text-gray-500' : 'text-[#8a7050]'}`}>
                          <span className="flex items-center gap-1"><MessageSquare className="w-3.5 h-3.5 text-gold-medium" /> {item.comments}</span>
                          <span className="flex items-center gap-1"><ThumbsUp className="w-3.5 h-3.5 text-gold-medium" /> {item.likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </div>
            ))}
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`rounded-full transition-all duration-300 cursor-pointer ${i === currentIndex
                ? 'w-6 h-2 bg-gold-medium'
                : `w-2 h-2 ${isDark ? 'bg-gold-dark/30 hover:bg-gold-dark/60' : 'bg-gold-dark/20 hover:bg-gold-dark/40'}`
                }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default IdeasSection
