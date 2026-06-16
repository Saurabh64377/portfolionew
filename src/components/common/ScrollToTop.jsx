import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setVisible(scrollTop > 400)
      setProgress(scrollPct)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    // Lenis ke saath compatible — window event dispatch karta hai
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Circle SVG params
  const size   = 48
  const stroke = 2.5
  const radius = (size - stroke * 2) / 2
  const circ   = 2 * Math.PI * radius
  const dash   = circ - (progress / 100) * circ

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-to-top"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-6 z-[9999] group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
        >
          {/* Progress ring */}
          <svg
            width={size}
            height={size}
            className="rotate-[-90deg] absolute inset-0"
          >
            {/* Track */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth={stroke}
            />
            {/* Progress */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="url(#scrollGrad)"
              strokeWidth={stroke}
              strokeLinecap="round"
              strokeDasharray={circ}
              strokeDashoffset={dash}
              style={{ transition: 'stroke-dashoffset 0.15s linear' }}
            />
            <defs>
              <linearGradient id="scrollGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#6c63ff" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
          </svg>

          {/* Button core */}
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center relative z-10 transition-all duration-300"
            style={{
              background: 'rgba(10,10,15,0.85)',
              border: '1px solid rgba(108,99,255,0.25)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
            }}
          >
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <FiArrowUp
                size={18}
                className="text-white/60 group-hover:text-white transition-colors duration-300"
              />
            </motion.div>
          </div>

          {/* Tooltip */}
          <span
            className="absolute right-14 top-1/2 -translate-y-1/2 whitespace-nowrap text-xs text-white/60 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/08 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
          >
            Top pe jao
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
