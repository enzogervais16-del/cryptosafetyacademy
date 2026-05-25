import { ShieldAlert } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <ShieldAlert className="w-4 h-4 text-amber-500/60" />
          <span>Crypto Safety Academy — Projet scolaire de prévention</span>
        </div>
        <p className="text-xs text-gray-600 text-center sm:text-right">
          Ce site ne constitue pas un conseil financier. Destiné à un usage éducatif uniquement.
        </p>
      </div>
    </footer>
  )
}
