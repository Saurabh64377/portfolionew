import { motion } from 'framer-motion'
import { fadeUpVariants, staggerContainerVariants, staggerItemVariants } from '../../hooks/useScrollAnimation'

export default function SectionHeading({ tag, title, highlight, subtitle, align = 'center', inView }) {
  const alignClass = align === 'left' ? 'items-start text-left' : 'items-center text-center'

  return (
    <motion.div
      variants={staggerContainerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={`flex flex-col gap-4 ${alignClass}`}
    >
      {tag && (
        <motion.div variants={staggerItemVariants}>
          <span className="section-tag">{tag}</span>
        </motion.div>
      )}
      <motion.h2
        variants={staggerItemVariants}
        className="heading-lg text-white"
      >
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={staggerItemVariants}
          className="text-[#A1AAB5] text-base sm:text-lg max-w-2xl leading-relaxed"
          style={align === 'center' ? { marginLeft: 'auto', marginRight: 'auto' } : {}}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}