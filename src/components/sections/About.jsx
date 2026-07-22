import { motion } from 'framer-motion'
import { FiCode, FiServer, FiDatabase, FiGlobe, FiGithub } from 'react-icons/fi'
import { HiAcademicCap } from 'react-icons/hi'
import { useScrollAnimation, fadeUpVariants, slideLeftVariants, slideRightVariants, staggerContainerVariants, staggerItemVariants } from '../../hooks/useScrollAnimation'
import SectionHeading from '../ui/SectionHeading'

const highlights = [
  {
    icon: FiCode,
    label: 'Frontend',
    desc: 'React.js, Redux Toolkit, Tailwind CSS',
    color: '#4F8CF7',
    bg: 'rgba(79,140,247,0.08)',
  },
  {
    icon: FiServer,
    label: 'Backend',
    desc: 'Node.js, Express.js, REST APIs, JWT',
    color: '#9B87F5',
    bg: 'rgba(155,135,245,0.08)',
  },
  {
    icon: FiDatabase,
    label: 'Database',
    desc: 'MySQL, MongoDB',
    color: '#2AB8D4',
    bg: 'rgba(42,184,212,0.08)',
  },
  {
    icon: FiGlobe,
    label: 'Cloud & DevOps',
    desc: 'AWS EC2, Nginx, PM2, CI/CD',
    color: '#34D399',
    bg: 'rgba(52,211,153,0.08)',
  },
]

const traits = [
  'Problem Solver',
  'Fast Learner',
  'Detail Oriented',
  'Ownership Mindset',
  'Scalability Focused',
]

export default function About() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.1 })
  const { ref: leftRef, inView: leftInView } = useScrollAnimation({ threshold: 0.1 })
  const { ref: rightRef, inView: rightInView } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="orb orb-purple w-80 h-80 -top-10 -right-20 opacity-20" />

      <div ref={ref} className="section-container relative z-10">
        <SectionHeading
          tag="About Me"
          title="Building Software"
          highlight="People Actually Use"
          subtitle="A Full Stack Developer focused on shipping production-grade applications — from database schema to deployed infrastructure."
          inView={inView}
        />

        <div className="mt-20 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            ref={leftRef}
            variants={slideLeftVariants}
            initial="hidden"
            animate={leftInView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            <div className="glass-card rounded-2xl p-7 space-y-4">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(79,140,247,0.12)', border: '1px solid rgba(79,140,247,0.15)' }}
                >
                  <HiAcademicCap size={20} style={{ color: '#8CAFED' }} />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">BCA, JS University, Agra</div>
                  <div className="text-[#6B7280] text-xs font-mono">2022 – 2025 · CGPA 7.96/10</div>
                </div>
              </div>

              <p className="text-[#A1AAB5] text-sm leading-relaxed">
                I'm <span className="text-[#D0D7E2] font-medium">Saurabh Agrahari</span>, a Full Stack Developer
                currently building production applications at{' '}
                <span className="text-[#D0D7E2]">Whizlancer Pvt. Ltd.</span> I work end-to-end — from
                React frontends to Node.js/Express APIs backed by MySQL and MongoDB.
              </p>
              <p className="text-[#A1AAB5] text-sm leading-relaxed">
                My work centers on <span className="text-[#C8D2E0]">role-based systems</span> — school
                management platforms, multi-tenant SaaS tools, and internal dashboards where getting
                authentication and permissions right matters as much as the UI. I've shipped{' '}
                <span className="text-[#C8D2E0]">4 production projects</span>, two of them live and
                publicly deployed on AWS.
              </p>
              <p className="text-[#A1AAB5] text-sm leading-relaxed">
                Beyond writing code, I own the <span className="gradient-text font-semibold">full deployment
                pipeline</span> — AWS EC2, Nginx reverse proxies, PM2 process management, and SSL — so
                what I build actually reaches users, not just a local dev server.
              </p>
            </div>

            {/* Traits */}
            <div className="flex flex-wrap gap-2">
              {traits.map((trait) => (
                <span key={trait} className="tech-badge">
                  {trait}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex gap-3">
              <a href="#contact" className="btn-primary text-sm">
                Let's Work Together
              </a>
              <a
                href="https://github.com/Saurabh64377"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm gap-2"
              >
                <FiGithub size={15} /> GitHub
              </a>
            </div>
          </motion.div>

          {/* Right: Highlight Cards */}
          <motion.div
            ref={rightRef}
            variants={staggerContainerVariants}
            initial="hidden"
            animate={rightInView ? 'visible' : 'hidden'}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item) => (
              <motion.div
                key={item.label}
                variants={staggerItemVariants}
                className="glass-card rounded-2xl p-5 group hover:scale-[1.02] transition-transform duration-300"
                style={{ '--accent': item.color }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ background: item.bg, border: `1px solid ${item.color}25` }}
                >
                  <item.icon size={20} style={{ color: item.color }} />
                </div>
                <div className="font-semibold text-white text-sm mb-1">{item.label}</div>
                <div className="text-[#8D95A3] text-xs leading-relaxed">{item.desc}</div>
              </motion.div>
            ))}

            {/* Focus Card */}
            <motion.div
              variants={staggerItemVariants}
              className="col-span-2 glass-card rounded-2xl p-5 animated-border"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(79,140,247,0.1)', border: '1px solid rgba(79,140,247,0.15)' }}
                >
                  <span className="text-xl">🔐</span>
                </div>
                <div>
                  <div className="font-semibold text-white text-sm mb-1">What I Care About</div>
                  <p className="text-[#8D95A3] text-xs leading-relaxed">
                    Getting authentication, role-based permissions, and deployment right — the parts
                    of an app that don't show up in a demo but decide whether it survives production.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}