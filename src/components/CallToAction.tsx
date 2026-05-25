import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Download, Star } from 'lucide-react'
import { track } from '@vercel/analytics'

export default function CallToAction() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden border-t border-white/5">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl border border-amber-500/20 bg-gradient-to-b from-amber-500/5 to-transparent p-12 sm:p-16"
        >
          {/* Top line accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium mb-8"
          >
            <Star className="w-3.5 h-3.5" />
            100% Gratuit · Aucune inscription requise
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-6"
          >
            Prêt à tout savoir avant{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              d'investir ?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Télécharge notre guide PDF gratuit et protège-toi contre les risques
            cachés des cryptomonnaies. Une lecture qui peut t'éviter de tout perdre.
          </motion.p>

          <motion.a
            href="/guide-crypto.pdf"
            download
            onClick={() => track('pdf_download', { source: 'cta' })}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-base transition-all duration-200 shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:-translate-y-1"
          >
            <Download className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
            Télécharger le guide gratuitement
          </motion.a>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-5 text-xs text-gray-600"
          >
            PDF · 19 pages · Réalisé dans le cadre d'un projet scolaire
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
