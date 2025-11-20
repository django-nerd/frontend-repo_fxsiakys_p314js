import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, ArrowDownRight, ArrowUpRight, RefreshCw } from 'lucide-react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

const Dashboard = () => {
  const [wallets, setWallets] = useState([])
  const [assets, setAssets] = useState([])
  const [txs, setTxs] = useState([])
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', address: '', chain: '' })

  const fetchAll = async () => {
    try {
      setLoading(true)
      const [w, a, t] = await Promise.all([
        fetch(`${API_BASE}/api/wallets`).then(r => r.json()),
        fetch(`${API_BASE}/api/assets`).then(r => r.json()),
        fetch(`${API_BASE}/api/transactions`).then(r => r.json()),
      ])
      setWallets(w.items || [])
      setAssets(a.items || [])
      setTxs(t.items || [])
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAll()
  }, [])

  const createWallet = async (e) => {
    e.preventDefault()
    try {
      await fetch(`${API_BASE}/api/wallets`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      setForm({ name: '', address: '', chain: '' })
      fetchAll()
    } catch (e) { console.error(e) }
  }

  return (
    <section id="dashboard" className="bg-black text-white">
      <div className="container mx-auto px-6 md:px-10 py-14 md:py-20">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold">Your Wallets</h2>
          <button onClick={fetchAll} className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-white/10 border border-white/10 hover:bg-white/15 transition">
            <RefreshCw className="w-4 h-4" /> Refresh
          </button>
        </div>

        {/* Create wallet form */}
        <form onSubmit={createWallet} className="grid md:grid-cols-4 gap-3 mb-8">
          <input required placeholder="Wallet name" value={form.name} onChange={e=>setForm(f=>({...f, name:e.target.value}))} className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none placeholder-white/40" />
          <input required placeholder="Public address" value={form.address} onChange={e=>setForm(f=>({...f, address:e.target.value}))} className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none placeholder-white/40" />
          <input placeholder="Chain (e.g., Ethereum)" value={form.chain} onChange={e=>setForm(f=>({...f, chain:e.target.value}))} className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none placeholder-white/40" />
          <button className="rounded-xl px-4 py-3 bg-white text-black font-semibold flex items-center justify-center gap-2"><Plus className="w-4 h-4"/> Add Wallet</button>
        </form>

        {/* Wallet list */}
        <div className="grid md:grid-cols-3 gap-6">
          <AnimatePresence>
            {wallets.map(w => (
              <motion.div key={w._id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur p-6"
              >
                <div className="text-sm text-white/60">{w.chain || 'Unknown network'}</div>
                <div className="mt-1 text-xl font-semibold">{w.name}</div>
                <div className="mt-1 text-white/70 break-all">{w.address}</div>
                <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div className="text-white/60">Assets</div>
                  <div className="text-right text-white/90">{assets.filter(a=>a.wallet_id===w._id).length}</div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Transactions preview */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
          <div className="rounded-2xl border border-white/10 overflow-hidden">
            <div className="divide-y divide-white/10">
              {txs.slice(0,6).map(t => (
                <div key={t._id} className="flex items-center justify-between px-4 py-3 bg-white/[0.02]">
                  <div className="flex items-center gap-3">
                    {t.type === 'deposit' ? <ArrowDownRight className="w-4 h-4 text-emerald-400"/> : <ArrowUpRight className="w-4 h-4 text-rose-400"/>}
                    <div className="text-sm">
                      <div className="font-medium">{t.type === 'deposit' ? 'Deposit' : 'Withdraw'} {t.symbol}</div>
                      <div className="text-white/60">{t.tx_hash ? t.tx_hash.slice(0,10)+ '…' : '—'}</div>
                    </div>
                  </div>
                  <div className="text-sm font-semibold">{t.amount}</div>
                </div>
              ))}
              {txs.length === 0 && (
                <div className="px-4 py-6 text-white/60 text-sm">No transactions yet. Create some in the backend or extend the UI to add them.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
