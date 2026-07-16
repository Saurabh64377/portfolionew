import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader() {
  const [visible, setVisible] = useState(true)
  const [count, setCount] = useState(0)
  const containerRef = useRef(null)

  useEffect(() => {
    let frame = 0
    const total = 60
    const interval = setInterval(() => {
      frame++
      setCount(Math.round((frame / total) * 100))
      if (frame >= total) {
        clearInterval(interval)
        setTimeout(() => {
          gsap.to(containerRef.current, {
            yPercent: -100,
            duration: 0.8,
            ease: 'power4.inOut',
            onComplete: () => setVisible(false),
          })
        }, 200)
      }
    }, 15)
    return () => clearInterval(interval)
  }, [])

  if (!visible) return null

  return (
    <div
      ref={containerRef}
      className="loader-container"
      style={{ zIndex: 100000 }}
    >
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          className="loader-text mb-6"
        >
          SA
        </motion.div>
        <div className="w-48 h-px bg-white/10 mx-auto relative overflow-hidden rounded-full">
          <motion.div
            className="h-full rounded-full"
            style={{ background: 'linear-gradient(90deg, #3B82F6, #8B5CF6)' }}
            initial={{ width: '0%' }}
            animate={{ width: `${count}%` }}
            transition={{ duration: 0.05, ease: 'linear' }}
          />
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-white/30 text-sm font-mono tracking-[4px]"
        >
          {count}%
        </motion.p>
      </div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(59,130,246,0.08) 0%, transparent 70%)',
        }}
      />
    </div>
  )
}
