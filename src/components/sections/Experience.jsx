import { motion } from 'framer-motion'
import { HiAcademicCap } from 'react-icons/hi'
import { FiCode, FiStar } from 'react-icons/fi'
import { MdRocketLaunch } from 'react-icons/md'
import { useScrollAnimation, staggerContainerVariants, staggerItemVariants } from '../../hooks/useScrollAnimation'
import { experiences } from '../../data/experience'
import SectionHeading from '../ui/SectionHeading'

const iconMap = {
  graduation: HiAcademicCap,
  code: FiCode,
  rocket: MdRocketLaunch,
  star: FiStar,
}

export default function Experience() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="experience" className="relative py-28 overflow-hidden">
      <div className="orb orb-purple w-64 h-64 bottom-20 right-0 opacity-15" />

      <div ref={ref} className="section-container relative z-10">
        <SectionHeading
          tag="Journey"
          title="My"
          highlight="Timeline"
          subtitle="The path I've taken — from education to real-world project development and where I'm heading next."
          inView={inView}
        />

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mt-20 max-w-3xl mx-auto space-y-0 relative"
        >
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/20 to-transparent md:-translate-x-1/2" />

          {experiences.map((exp, i) => {
            const Icon = iconMap[exp.icon] || FiStar
            const isEven = i % 2 === 0

            return (
              <motion.div
                key={exp.id}
                variants={staggerItemVariants}
                className={`relative flex items-start gap-6 md:gap-0 pb-12 last:pb-0 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="relative z-10 shrink-0 ml-0 md:ml-0 md:absolute md:left-1/2 md:-translate-x-1/2 md:top-6">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center border shadow-lg"
                    style={{
                      background: `${exp.color}12`,
                      borderColor: `${exp.color}25`,
                      boxShadow: `0 0 20px ${exp.color}15`,
                    }}
                  >
                    <Icon size={20} style={{ color: exp.color }} />
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`flex-1 md:w-[calc(50%-48px)] ${
                    isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 ml-0 md:ml-[calc(50%+48px)]'
                  }`}
                >
                  <div
                    className="glass-card rounded-2xl p-6 hover:scale-[1.01] transition-transform duration-300"
                    style={{ borderColor: `${exp.color}15` }}
                  >
                    <div
                      className={`flex flex-wrap items-center gap-2 mb-3 ${
                        isEven ? 'md:justify-end' : ''
                      }`}
                    >
                      <span
                        className="text-xs font-mono px-3 py-1 rounded-full"
                        style={{ background: `${exp.color}10`, color: exp.color, border: `1px solid ${exp.color}20` }}
                      >
                        {exp.period}
                      </span>
                      <span
                        className="text-xs px-3 py-1 rounded-full capitalize"
                        style={{ background: 'rgba(255,255,255,0.03)', color: 'rgba(255,255,255,0.35)', border: '1px solid rgba(255,255,255,0.06)' }}
                      >
                        {exp.type}
                      </span>
                    </div>

                    <h3 className="text-white font-bold text-base mb-1">{exp.title}</h3>
                    <div className="text-[#6B7280] text-sm mb-3 font-mono">
                      {exp.organization} · {exp.location}
                    </div>
                    <p className="text-[#A1AAB5] text-sm leading-relaxed mb-4">{exp.description}</p>

                    <ul className={`space-y-1.5 ${isEven ? 'md:text-right' : ''}`}>
                      {exp.highlights.map((h, hi) => (
                        <li key={hi} className={`flex items-center gap-2 text-xs text-[#8D95A3] ${isEven ? 'md:flex-row-reverse' : ''}`}>
                          <span
                            className="w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ background: exp.color }}
                          />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}