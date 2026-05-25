import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import { Check, BookOpen } from 'lucide-react'

const chapters = [
  {
    num: '01',
    title: 'Comprendre les cryptomonnaies',
    points: [
      "Qu'est-ce qu'une blockchain ?",
      'Bitcoin, Ethereum et les altcoins expliqués simplement',
      'Comment fonctionne un portefeuille numérique',
    ],
  },
  {
    num: '02',
    title: 'Les risques financiers concrets',
    points: [
      'Pourquoi la volatilité est si dangereuse',
      'Les études de cas : pertes réelles de particuliers',
      'Absence de protection des consommateurs',
    ],
  },
  {
    num: '03',
    title: 'Identifier les arnaques',
    points: [
      'Rug pull, pump & dump, pyramides de Ponzi',
      'Reconnaître les faux influenceurs crypto',
      'Comment signaler une arnaque en France',
    ],
  },
  {
    num: '04',
    title: 'Cadre légal & fiscal',
    points: [
      "Règlementation en Europe (MiCA)",
      'Obligations fiscales sur les plus-values',
      'Plateformes légales vs non régulées',
    ],
  },
]

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export default function GuideContent() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 lg:py-32 relative border-t border-white/5">
      {/* Subtle glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[500px] h-[2px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Text */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-amber-500 text-sm font-medium tracking-widest uppercase mb-4">
              Contenu du guide
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6 tracking-tight">
              Un guide complet,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                accessible à tous
              </span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              Rédigé dans un langage clair et sans jargon technique, ce guide de{' '}
              <span className="text-white font-medium">19 pages</span> s'adresse aux élèves,
              parents et enseignants qui veulent comprendre les enjeux des cryptomonnaies
              avant de prendre toute décision.
            </p>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-amber-500/5 border border-amber-500/15">
              <BookOpen className="w-5 h-5 text-amber-400 shrink-0" />
              <p className="text-sm text-gray-300">
                Niveau : Accessible dès le lycée · Durée de lecture : ~25 min
              </p>
            </div>
          </motion.div>

          {/* Right: Chapters */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="space-y-4"
          >
            {chapters.map((chapter) => (
              <motion.div
                key={chapter.num}
                variants={itemVariants}
                className="group rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-amber-500/20 transition-all duration-300 overflow-hidden"
              >
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold text-amber-500/60 tracking-widest">{chapter.num}</span>
                    <h3 className="text-sm font-semibold text-white">{chapter.title}</h3>
                  </div>
                  <ul className="space-y-1.5">
                    {chapter.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
                        <span className="text-xs text-gray-400">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
