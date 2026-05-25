import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrendingDown, ShieldOff, Zap } from 'lucide-react'

const cards = [
  {
    icon: TrendingDown,
    title: 'Risques financiers',
    desc: "Les cryptos ne sont pas des investissements comme les autres. Tu peux perdre l'intégralité de ton capital en quelques heures, sans recours possible. Il n'existe aucune garantie des dépôts.",
    color: 'from-red-500/20 to-red-600/5',
    border: 'border-red-500/20',
    iconColor: 'text-red-400',
    iconBg: 'bg-red-500/10',
  },
  {
    icon: ShieldOff,
    title: 'Arnaques & escroqueries',
    desc: "Faux projets, rug pulls, phishing, pump & dump… les fraudes liées aux cryptos ont explosé. Les jeunes de 18-30 ans sont les premières victimes de ces arnaques sophistiquées.",
    color: 'from-orange-500/20 to-orange-600/5',
    border: 'border-orange-500/20',
    iconColor: 'text-orange-400',
    iconBg: 'bg-orange-500/10',
  },
  {
    icon: Zap,
    title: 'Volatilité extrême',
    desc: "Bitcoin peut perdre 50% de sa valeur en un mois. Cette instabilité rend impossible toute planification financière sérieuse et expose les investisseurs non avertis à des chocs violents.",
    color: 'from-amber-500/20 to-amber-600/5',
    border: 'border-amber-500/20',
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-500/10',
  },
]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function WhyGuide() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="why" className="py-24 lg:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-amber-500 text-sm font-medium tracking-widest uppercase mb-4">
            Pourquoi ce guide ?
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Ce que personne ne t'explique
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Les publicités et influenceurs te vendent du rêve. Ce guide te montre la réalité.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                variants={item}
                className={`relative group rounded-2xl border ${card.border} bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-all duration-300 overflow-hidden`}
              >
                {/* Glow bg */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl`} />

                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${card.iconBg} mb-6`}>
                    <Icon className={`w-6 h-6 ${card.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{card.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
