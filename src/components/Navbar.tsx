import { motion } from 'framer-motion'
import { ShieldAlert } from 'lucide-react'

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 backdrop-blur-md bg-[#0a0a0a]/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-amber-500" />
          <span className="font-semibold text-white text-sm tracking-tight">Crypto Safety Academy</span>
          <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 font-medium">
            Scolaire
          </span>
        </div>
        <a
          href="#download"
          className="text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors"
        >
          Télécharger le guide →
        </a>
      </div>
    </motion.header>
  )
}
