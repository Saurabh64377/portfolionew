import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { useScrollAnimation, fadeUpVariants } from '../../hooks/useScrollAnimation'

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/Saurabh64377', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/saurabh-agrahari-509459248/', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:saurabh64377@gmail.com', label: 'Email' },
]

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const { ref, inView } = useScrollAnimation()
  const year = new Date().getFullYear()

  return (
    <footer ref={ref} className="relative pt-20 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col items-center text-center gap-8"
        >
          {/* Logo */}
          <div className="flex flex-col items-center gap-3">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-white text-2xl"
              style={{ background: 'linear-gradient(135deg, #4F8CF7, #9B87F5)' }}
            >
              S
            </div>
            <p className="text-[#6B7280] text-sm max-w-sm">
              Full Stack Developer building production applications at Whizlancer.
              Open to new opportunities.
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#6B7280] hover:text-[#D0D7E2] text-sm transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-xl glass border border-white/[0.05] flex items-center justify-center text-[#6B7280] hover:text-[#C8D2E0] hover:border-accent/25 hover:bg-accent/8 transition-all duration-300"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/[0.04]" />

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-2 text-xs text-[#4B5563]">
            <span>© {year} Saurabh Agrahari. All rights reserved.</span>
            <span className="flex items-center gap-1.5">
              Made with
              <span className="text-accent/50">♥</span>
              by Saurabh
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}