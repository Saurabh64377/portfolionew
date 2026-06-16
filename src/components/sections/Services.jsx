import { motion } from 'framer-motion'
import { FiLayers, FiServer, FiDatabase, FiMonitor, FiZap } from 'react-icons/fi'
import { MdApi } from 'react-icons/md'
import { useScrollAnimation, staggerContainerVariants, staggerItemVariants } from '../../hooks/useScrollAnimation'
import { services } from '../../data/services'
import SectionHeading from '../ui/SectionHeading'

const iconMap = {
  layers: FiLayers,
  server: FiServer,
  api: MdApi,
  database: FiDatabase,
  dashboard: FiMonitor,
  realtime: FiZap,
}

export default function Services() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.05 })

  return (
    <section id="services" className="relative py-28 overflow-hidden">
      <div className="orb orb-purple w-80 h-80 top-0 right-0 opacity-15" />
      <div className="orb orb-green w-60 h-60 bottom-0 left-0 opacity-15" />

      <div ref={ref} className="section-container relative z-10">
        <SectionHeading
          tag="Services"
          title="What I"
          highlight="Build For You"
          subtitle="End-to-end development services to bring your product ideas to life — from architecture to deployment."
          inView={inView}
        />

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
        >
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || FiLayers
            return (
              <motion.div
                key={service.id}
                variants={staggerItemVariants}
                className="glass-card rounded-2xl p-7 group relative overflow-hidden hover:scale-[1.02] transition-all duration-400"
                style={{ borderColor: service.borderColor }}
              >
                {/* Glow blob */}
                <div
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: service.glowColor, filter: 'blur(40px)' }}
                />

                {/* Number */}
                <div className="absolute top-6 right-6 text-5xl font-black text-white/03 select-none font-mono">
                  0{service.id}
                </div>

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 relative z-10 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${service.gradient.replace('from-', '').replace(' to-', ', ').split('/')[0]})`,
                    border: `1px solid ${service.borderColor}`,
                  }}
                >
                  <Icon size={22} style={{ color: 'rgba(255,255,255,0.8)' }} />
                </div>

                <h3 className="text-white font-bold text-base mb-3 relative z-10">{service.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed mb-5 relative z-10">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 relative z-10">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2.5 text-xs text-white/45">
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: service.borderColor.replace('0.25', '0.7') }}
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
            Discuss Your Project
          </a>
        </motion.div>
      </div>
    </section>
  )
}
