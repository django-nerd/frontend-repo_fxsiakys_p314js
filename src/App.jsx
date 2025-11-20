import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Dashboard />
        <footer className="border-t border-white/10 py-10 text-center text-white/60">Built with love for crypto natives • HoloWallet</footer>
      </main>
    </div>
  )
}

export default App
