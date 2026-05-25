import { motion } from 'framer-motion'
import { Download, AlertTriangle } from 'lucide-react'
import { track } from '@vercel/analytics'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-orange-600/5 rounded-full blur-[80px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium mb-8"
        >
          <AlertTriangle className="w-3.5 h-3.5" />
          Guide de prévention — Projet scolaire
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6"
        >
          Les cryptomonnaies :{' '}
          <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              ce qu'on ne vous dit pas
            </span>
          </span>
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 leading-relaxed mb-10"
        >
          Avant d'investir, comprends les risques. Ce guide gratuit t'explique
          les dangers réels des cryptos — arnaques, pertes, volatilité — pour
          que tu puisses décider en toute connaissance de cause.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <a
            href="/guide-crypto.pdf"
            download
            id="download"
            onClick={() => track('pdf_download', { source: 'hero' })}
            className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold text-sm transition-all duration-200 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:-translate-y-0.5"
          >
            <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            Télécharger le guide gratuit
          </a>
          <a
            href="#why"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            En savoir plus
            <span className="text-amber-500">↓</span>
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-3 gap-4 max-w-lg mx-auto border border-white/5 rounded-2xl bg-white/[0.02] p-6"
        >
          {[
            { value: '3,8 Mrd€', label: 'Perdus en arnaques en 2023' },
            { value: '90%', label: 'Des projets finissent à 0' },
            { value: '-77%', label: 'Bitcoin en 2022 en quelques mois' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-amber-400 mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500 leading-snug">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
