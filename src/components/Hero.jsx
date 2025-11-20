import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative w-full h-[80vh] md:h-[88vh] overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/44zrIZf-iQZhbQNQ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Holographic gradient overlays */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
        <div className="absolute -top-20 right-0 h-80 w-80 rounded-full blur-3xl opacity-40" style={{
          background: 'conic-gradient(from 180deg at 50% 50%, #00E5FF33, #B388FF33, #00E5FF33)'
        }} />
        <div className="absolute -bottom-10 left-10 h-72 w-72 rounded-full blur-3xl opacity-30" style={{
          background: 'radial-gradient(closest-side, #7C3AED44, transparent)'
        }} />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur text-white/80 text-xs md:text-sm mb-4">
              Ultra-real wallet • Shiny, holographic crypto vibes
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70">
              All your crypto. One beautiful wallet.
            </h1>
            <p className="mt-5 text-base md:text-lg text-white/80 max-w-2xl">
              Manage wallets, track assets, and record transactions with a futuristic, animated experience.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#dashboard" className="inline-flex items-center rounded-xl px-5 py-3 bg-white text-black font-semibold shadow-[0_0_40px_-10px_rgba(255,255,255,0.6)] hover:shadow-[0_0_60px_-8px_rgba(255,255,255,0.7)] transition">
                Launch Dashboard
              </a>
              <a href="#learn" className="inline-flex items-center rounded-xl px-5 py-3 bg-white/10 text-white/90 border border-white/10 backdrop-blur hover:bg-white/15 transition">
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
