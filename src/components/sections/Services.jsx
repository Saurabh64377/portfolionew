import { motion } from 'framer-motion'
import { FiLayers, FiShield, FiDatabase, FiMonitor, FiCloud } from 'react-icons/fi'
import { MdApi } from 'react-icons/md'
import { useScrollAnimation, staggerContainerVariants, staggerItemVariants } from '../../hooks/useScrollAnimation'
import { services } from '../../data/services'
import SectionHeading from '../ui/SectionHeading'

const iconMap = {
  layers: FiLayers,
  api: MdApi,
  auth: FiShield,
  database: FiDatabase,
  cloud: FiCloud,
  dashboard: FiMonitor,
}

export default function Services() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.05 })

  return (
    <section id="services" className="relative py-28 overflow-hidden">
      <div className="orb orb-purple w-80 h-80 top-0 right-0 opacity-15" />
      <div className="orb orb-green w-60 h-60 bottom-0 left-0 opacity-15" />

      <div ref={ref} className="section-container relative z-10">
        <SectionHeading
          tag="What I Build"
          title="Core"
          highlight="Capabilities"
          subtitle="What I actually bring to a full-stack project — from database schema to production deployment."
          inView={inView}
        />

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon] || FiLayers
            return (
              <motion.div
                key={service.id}
                variants={staggerItemVariants}
                className="glass-card rounded-2xl p-7 group relative overflow-hidden hover:scale-[1.01] transition-all duration-400"
                style={{ borderColor: `${service.color}20` }}
              >
                {/* Subtle glow blob */}
                <div
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `${service.color}12`, filter: 'blur(40px)' }}
                />

                {/* Number */}
                <div className="absolute top-6 right-6 text-5xl font-black text-white/[0.02] select-none font-mono">
                  0{service.id}
                </div>

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 relative z-10 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${service.color}12`, border: `1px solid ${service.color}25` }}
                >
                  <Icon size={22} style={{ color: service.color }} />
                </div>

                <h3 className="text-white font-bold text-base mb-3 relative z-10">{service.title}</h3>
                <p className="text-[#8D95A3] text-sm leading-relaxed mb-5 relative z-10">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 relative z-10">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2.5 text-xs text-[#A1AAB5]">
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: service.color }}
                      />
                      {feat}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex justify-center mt-14"
        >
          <a href="#contact" className="btn-primary gap-2">
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}