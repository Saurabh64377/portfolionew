import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { FiArrowDown, FiGithub, FiLinkedin, FiDownload, FiMail } from 'react-icons/fi'
import { useTypewriter } from '../../hooks/useTypewriter'
import MagneticButton from '../ui/MagneticButton'

const roles = [
  'Full Stack Developer',
  'MERN Stack Developer',
  'React.js Developer',
  'Node.js Developer',
  'API Developer',
]

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/saurabh-agrahari', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/saurabh-agrahari', label: 'LinkedIn' },
]

const stats = [
  { value: '7+', label: 'Projects Built' },
  { value: '15+', label: 'Technologies' },
  { value: '1+', label: 'Years Coding' },
]

export default function Hero() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const statsRef = useRef(null)
  const displayText = useTypewriter(roles, 70, 40, 2200)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 1.4 })
    tl.fromTo(
      titleRef.current.querySelectorAll('.hero-word'),
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.08, duration: 0.9, ease: 'power4.out' }
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
        '-=0.5'
      )
      .fromTo(
        '.hero-cta',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo(
        statsRef.current.querySelectorAll('.stat-item'),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.08, duration: 0.6, ease: 'power3.out' },
        '-=0.3'
      )
  }, [])

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(108,99,255,0.15) 0%, transparent 65%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none bg-grid"
        style={{ opacity: 0.4 }}
      />

      {/* Floating Orbs */}
      <div className="orb orb-purple animate-float w-96 h-96 -top-20 -left-20 opacity-50" />
      <div className="orb orb-pink animate-float-delay w-72 h-72 -bottom-10 -right-10 opacity-40" />
      <div className="orb orb-blue animate-float-slow w-60 h-60 top-1/2 right-1/4 opacity-30" />

      <div className="section-container relative z-10 pt-28 pb-20">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
            className="hero-cta"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong border border-white/10 text-sm text-white/60">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for new opportunities
            </div>
          </motion.div>

          {/* Main Title */}
          <div ref={titleRef} className="overflow-hidden">
            <h1 className="heading-xl text-white overflow-hidden">
              <div className="overflow-hidden">
                <span className="hero-word inline-block">Hi, I'm&nbsp;</span>
              </div>
              <div className="overflow-hidden">
                <span className="hero-word inline-block gradient-text">Saurabh</span>
              </div>
              <div className="overflow-hidden">
                <span className="hero-word inline-block">Agrahari</span>
              </div>
            </h1>
          </div>

          {/* Typewriter */}
          <div ref={subtitleRef}>
            <div className="flex items-center justify-center gap-2 text-xl sm:text-2xl md:text-3xl font-semibold text-white/70">
              <span className="text-white/30">{'<'}</span>
              <span className="gradient-text min-w-[280px] sm:min-w-[340px] text-left">
                {displayText}
              </span>
              <span className="typewriter-cursor" />
              <span className="text-white/30">{'/>'}</span>
            </div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.7 }}
            className="text-white/45 text-base sm:text-lg max-w-2xl leading-relaxed"
          >
            Fresher Full Stack Developer passionate about building scalable web applications.
            Specialized in the <span className="text-white/70">MERN Stack</span> — crafting
            seamless experiences from pixel-perfect UIs to robust backends.
          </motion.p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <MagneticButton>
              <a href="#projects" className="btn-primary hero-cta gap-2">
                View My Work
                <FiArrowDown size={16} />
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href="#contact" className="btn-secondary hero-cta">
                <FiMail size={16} />
                Contact Me
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href="/resume.pdf"
                download
                className="btn-secondary hero-cta gap-2"
              >
                <FiDownload size={16} />
                Resume
              </a>
            </MagneticButton>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.6 }}
            className="flex items-center gap-3 hero-cta"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-11 h-11 rounded-xl glass border border-white/08 flex items-center justify-center text-white/40 hover:text-white hover:border-accent/40 hover:bg-accent/10 transition-all duration-300 hover:scale-110"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>

          {/* Stats */}
          <div ref={statsRef} className="flex flex-wrap justify-center gap-8 mt-4 pt-8 border-t border-white/06 w-full max-w-md">
            {stats.map((s, i) => (
              <div key={i} className="stat-item text-center">
                <div className="text-2xl sm:text-3xl font-black gradient-text">{s.value}</div>
                <div className="text-xs text-white/35 mt-0.5 font-mono tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/20 text-xs font-mono tracking-[3px] uppercase">Scroll</span>
        <div className="w-5 h-8 border border-white/15 rounded-full flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-2 rounded-full bg-accent/60"
          />
        </div>
      </motion.div>
    </section>
  )
}
