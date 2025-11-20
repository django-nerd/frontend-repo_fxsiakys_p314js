import React from 'react'
import { Shield, Sparkles, Wallet, Activity } from 'lucide-react'

const features = [
  {
    icon: <Wallet className="w-5 h-5" />,
    title: 'Unified Wallets',
    desc: 'Bring all your addresses under one elegant interface.'
  },
  {
    icon: <Activity className="w-5 h-5" />,
    title: 'Live Tracking',
    desc: 'Monitor balances and history with smooth animations.'
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: 'Secure by Design',
    desc: 'Client-side only keys. Your data, your control.'
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: 'Holographic UI',
    desc: 'Shimmering gradients and tactile glass elements.'
  }
]

const Features = () => {
  return (
    <section id="learn" className="bg-black text-white">
      <div className="container mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="grid md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur p-6 transition hover:bg-white/[0.06]">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white mb-4">
                {f.icon}
              </div>
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="text-white/70 text-sm mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
