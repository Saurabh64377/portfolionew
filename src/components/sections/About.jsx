import { motion } from 'framer-motion'
import { FiCode, FiServer, FiDatabase, FiGlobe, FiGithub } from 'react-icons/fi'
import { HiAcademicCap } from 'react-icons/hi'
import { useScrollAnimation, fadeUpVariants, slideLeftVariants, slideRightVariants, staggerContainerVariants, staggerItemVariants } from '../../hooks/useScrollAnimation'
import SectionHeading from '../ui/SectionHeading'

const highlights = [
  {
    icon: FiCode,
    label: 'Frontend',
    desc: 'React.js, Redux, Tailwind CSS',
    color: '#6c63ff',
    bg: 'rgba(108,99,255,0.1)',
  },
  {
    icon: FiServer,
    label: 'Backend',
    desc: 'Node.js, Express.js, REST APIs',
    color: '#43e97b',
    bg: 'rgba(67,233,123,0.1)',
  },
  {
    icon: FiDatabase,
    label: 'Database',
    desc: 'MongoDB, MySQL, Mongoose',
    color: '#38f9d7',
    bg: 'rgba(56,249,215,0.1)',
  },
  {
    icon: FiGlobe,
    label: 'Cloud',
    desc: 'Cloudinary, Socket.IO, JWT',
    color: '#f093fb',
    bg: 'rgba(240,147,251,0.1)',
  },
]

const traits = [
  'Problem Solver',
  'Fast Learner',
  'Team Player',
  'Detail Oriented',
  'Open Source Contributor',
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
          title="Turning Ideas Into"
          highlight="Digital Reality"
          subtitle="A passionate Full Stack Developer building production-grade applications with clean code, scalable architecture, and pixel-perfect UIs."
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
                  style={{ background: 'rgba(108,99,255,0.15)', border: '1px solid rgba(108,99,255,0.2)' }}
                >
                  <HiAcademicCap size={20} style={{ color: '#a5a0ff' }} />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">BCA Graduate</div>
                  <div className="text-white/40 text-xs font-mono">Bachelor of Computer Applications</div>
                </div>
              </div>

              <p className="text-white/55 text-sm leading-relaxed">
                I'm <span className="text-white font-medium">Saurabh Agrahari</span>, a passionate Full Stack Developer
                with expertise in the MERN stack. I specialize in building end-to-end web applications
                — from intuitive React frontends to scalable Node.js backends.
              </p>
              <p className="text-white/55 text-sm leading-relaxed">
                With <span className="text-white/80">7+ projects</span> under my belt, I've built real-world applications
                including e-commerce platforms, real-time chat systems, expense trackers, and admin dashboards.
                My goal is to build software that <span className="text-white/80">solves real problems</span> at scale.
              </p>
              <p className="text-white/55 text-sm leading-relaxed">
                I dream of building my own software company someday. Until then, I'm looking for opportunities
                at <span className="gradient-text font-semibold">product companies and startups</span> where I can
                contribute, learn, and grow rapidly.
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
                href="https://github.com/saurabh-agrahari"
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
                className="glass-card rounded-2xl p-5 group hover:scale-105 transition-transform duration-300"
                style={{ '--accent': item.color }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ background: item.bg, border: `1px solid ${item.color}30` }}
                >
                  <item.icon size={20} style={{ color: item.color }} />
                </div>
                <div className="font-semibold text-white text-sm mb-1">{item.label}</div>
                <div className="text-white/40 text-xs leading-relaxed">{item.desc}</div>
              </motion.div>
            ))}

            {/* Dream Card */}
            <motion.div
              variants={staggerItemVariants}
              className="col-span-2 glass-card rounded-2xl p-5 animated-border"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(108,99,255,0.12)', border: '1px solid rgba(108,99,255,0.2)' }}
                >
                  <span className="text-xl">🚀</span>
                </div>
                <div>
                  <div className="font-semibold text-white text-sm mb-1">Big Dream</div>
                  <p className="text-white/45 text-xs leading-relaxed">
                    Passionate about building products that scale. My ultimate goal is to found a
                    software company that creates tools developers love.
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
