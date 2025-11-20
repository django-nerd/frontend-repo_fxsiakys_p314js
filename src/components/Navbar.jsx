import React from 'react'
import { Wallet, Menu } from 'lucide-react'

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/30 py-3 pl-4 pr-3">
          <a href="#" className="flex items-center gap-2 text-white">
            <div className="h-8 w-8 rounded-lg bg-white text-black flex items-center justify-center">
              <Wallet className="w-4 h-4" />
            </div>
            <span className="font-semibold">HoloWallet</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#dashboard" className="hover:text-white">Dashboard</a>
            <a href="#learn" className="hover:text-white">Features</a>
            <a href="#" className="hover:text-white">Pricing</a>
          </nav>
          <button className="md:hidden text-white/80 hover:text-white p-2">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
