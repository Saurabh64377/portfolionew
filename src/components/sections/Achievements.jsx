import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { FiPackage, FiShield, FiRefreshCw, FiBriefcase } from 'react-icons/fi'
import { useScrollAnimation, staggerContainerVariants, staggerItemVariants } from '../../hooks/useScrollAnimation'
import SectionHeading from '../ui/SectionHeading'

const stats = [
  {
    value: 4,
    suffix: '',
    label: 'Production Projects',
    desc: 'Full-stack applications shipped from concept to deployment',
    icon: FiPackage,
    color: '#4F8CF7',
    bg: 'rgba(79,140,247,0.08)',
  },
  {
    value: 1,
    suffix: '+',
    label: 'Years Experience',
    desc: 'Professional full-stack development, internship through full-time',
    icon: FiBriefcase,
    color: '#9B87F5',
    bg: 'rgba(155,135,245,0.08)',
  },
  {
    value: 2,
    suffix: '',
    label: 'Live Deployments',
    desc: 'Production sites running on AWS EC2 with Nginx and SSL',
    icon: FiRefreshCw,
    color: '#2AB8D4',
    bg: 'rgba(42,184,212,0.08)',
  },
  {
    value: 2,
    suffix: '',
    label: 'Companies',
    desc: 'Whizlancer Pvt. Ltd. and RAI Tech Corporation',
    icon: FiShield,
    color: '#34D399',
    bg: 'rgba(52,211,153,0.08)',
  },
]

const achievementCards = [
  {
    title: 'Shipped Production Software',
    desc: 'Successfully launched 3+ production applications from concept to deployment, owning the full lifecycle from schema design to going live.',
    icon: '🚀',
    color: '#4F8CF7',
  },
  {
    title: 'Enterprise-Grade Authentication',
    desc: 'Implemented JWT-based authentication and role-based access control across multiple client projects, spanning 4-5 distinct user roles per system.',
    icon: '🔐',
    color: '#9B87F5',
  },
  {
    title: 'Automated Deployment Workflows',
    desc: 'Automated CI/CD deployment pipelines and configured production infrastructure on AWS EC2 with Nginx and PM2.',
    icon: '⚙️',
    color: '#2AB8D4',
  },
]

function StatCard({ stat, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <motion.div
      ref={ref}
      variants={staggerItemVariants}
      className="glass-card rounded-2xl p-7 text-center group hover:scale-[1.02] transition-transform duration-300"
    >
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110"
        style={{ background: stat.bg, border: `1px solid ${stat.color}20` }}
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
      <div className="text-[#8D95A3] text-xs leading-relaxed">{stat.desc}</div>
    </motion.div>
  )
}

export default function Achievements() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.05 })

  return (
    <section id="achievements" className="relative py-28 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(79,140,247,0.04) 0%, transparent 70%)' }}
      />

      <div ref={ref} className="section-container relative z-10">
        <SectionHeading
          tag="Achievements"
          title="By The"
          highlight="Numbers"
          subtitle="Honest milestones from my development journey so far — every one of them real and shipped."
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

        {/* Achievement Cards */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-6 mt-10"
        >
          {achievementCards.map((card) => (
            <motion.div
              key={card.title}
              variants={staggerItemVariants}
              className="glass-card rounded-2xl p-6"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${card.color}12`, border: `1px solid ${card.color}20` }}
              >
                <span className="text-xl">{card.icon}</span>
              </div>
              <h3 className="text-white font-semibold text-sm mb-2">{card.title}</h3>
              <p className="text-[#8D95A3] text-xs leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}