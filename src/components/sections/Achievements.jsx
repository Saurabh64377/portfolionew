import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { FiCode, FiPackage, FiCpu, FiAward } from 'react-icons/fi'
import { useScrollAnimation, staggerContainerVariants, staggerItemVariants } from '../../hooks/useScrollAnimation'
import SectionHeading from '../ui/SectionHeading'

const stats = [
  {
    value: 7,
    suffix: '+',
    label: 'Projects Built',
    desc: 'Full-stack applications from concept to deployment',
    icon: FiPackage,
    color: '#6c63ff',
    bg: 'rgba(108,99,255,0.1)',
  },
  {
    value: 15,
    suffix: '+',
    label: 'Technologies',
    desc: 'Languages, frameworks and tools mastered',
    icon: FiCpu,
    color: '#43e97b',
    bg: 'rgba(67,233,123,0.1)',
  },
  {
    value: 5000,
    suffix: '+',
    label: 'Lines of Code',
    desc: 'Written with clean architecture in mind',
    icon: FiCode,
    color: '#38f9d7',
    bg: 'rgba(56,249,215,0.1)',
  },
  {
    value: 100,
    suffix: '%',
    label: 'Dedication',
    desc: 'Committed to delivering quality products',
    icon: FiAward,
    color: '#f093fb',
    bg: 'rgba(240,147,251,0.1)',
  },
]

const milestones = [
  { year: '2021', event: 'Started BCA — began learning programming' },
  { year: '2022', event: 'Built first HTML/CSS projects, learned JavaScript' },
  { year: '2023', event: 'Dove into MERN stack, built first full-stack app' },
  { year: '2024', event: 'Completed 7+ production-grade projects, BCA graduate' },
  { year: '2024+', event: 'Seeking Full Stack Developer opportunities' },
]

function StatCard({ stat, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <motion.div
      ref={ref}
      variants={staggerItemVariants}
      className="glass-card rounded-2xl p-7 text-center group hover:scale-105 transition-transform duration-300"
    >
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110"
        style={{ background: stat.bg, border: `1px solid ${stat.color}25` }}
      >
        <stat.icon size={24} style={{ color: stat.color }} />
      </div>

      <div className="text-4xl font-black mb-2" style={{ color: stat.color }}>
        {inView ? (
          <CountUp end={stat.value} duration={2.5} separator="," />
        ) : (
          '0'
        )}
        <span>{stat.suffix}</span>
      </div>

      <div className="text-white font-semibold text-sm mb-2">{stat.label}</div>
      <div className="text-white/35 text-xs leading-relaxed">{stat.desc}</div>
    </motion.div>
  )
}

export default function Achievements() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.05 })

  return (
    <section id="achievements" className="relative py-28 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(108,99,255,0.06) 0%, transparent 70%)' }}
      />

      <div ref={ref} className="section-container relative z-10">
        <SectionHeading
          tag="Achievements"
          title="By The"
          highlight="Numbers"
          subtitle="Measurable milestones from my development journey — every line of code written with purpose."
          inView={inView}
        />

        {/* Stats Grid */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </motion.div>

        {/* Milestones Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-20"
        >
          <h3 className="text-center text-white/40 text-xs font-mono tracking-[3px] uppercase mb-10">
            Development Journey
          </h3>
          <div className="relative flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-0">
            {/* Line */}
            <div className="hidden sm:block absolute left-0 right-0 top-5 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

            {milestones.map((m, i) => (
              <div key={i} className="flex sm:flex-col items-start sm:items-center gap-3 sm:gap-3 relative z-10 flex-1">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-mono font-bold shrink-0"
                  style={{ background: 'rgba(108,99,255,0.15)', border: '1px solid rgba(108,99,255,0.25)', color: '#a5a0ff' }}
                >
                  {m.year.slice(-2)}
                </div>
                <div className="sm:text-center">
                  <div className="text-accent/80 text-xs font-mono font-bold mb-0.5">{m.year}</div>
                  <div className="text-white/40 text-xs leading-snug max-w-[120px]">{m.event}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
