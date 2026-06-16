import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import { FiStar } from 'react-icons/fi'
import { BsQuote } from 'react-icons/bs'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import { useScrollAnimation, fadeUpVariants, staggerContainerVariants, staggerItemVariants } from '../../hooks/useScrollAnimation'
import { testimonials } from '../../data/testimonials'
import SectionHeading from '../ui/SectionHeading'

function TestimonialCard({ testimonial }) {
  return (
    <div className="glass-card rounded-2xl p-8 h-full flex flex-col gap-5 relative">
      <BsQuote
        size={40}
        className="absolute top-6 right-6 opacity-10"
        style={{ color: testimonial.color }}
      />

      {/* Stars */}
      <div className="flex gap-1">
        {[...Array(testimonial.rating)].map((_, i) => (
          <FiStar key={i} size={14} style={{ color: '#f59e0b', fill: '#f59e0b' }} />
        ))}
      </div>

      <p className="text-white/60 text-sm leading-relaxed flex-1 italic">
        "{testimonial.text}"
      </p>

      <div className="flex items-center gap-3 pt-4 border-t border-white/06">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold text-white shrink-0"
          style={{ background: `${testimonial.color}25`, border: `1px solid ${testimonial.color}30` }}
        >
          {testimonial.avatar}
        </div>
        <div>
          <div className="text-white font-semibold text-sm">{testimonial.name}</div>
          <div className="text-white/35 text-xs font-mono">
            {testimonial.role} · {testimonial.company}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="testimonials" className="relative py-28 overflow-hidden">
      <div className="orb orb-blue w-80 h-80 top-10 -right-20 opacity-15" />

      <div ref={ref} className="section-container relative z-10">
        <SectionHeading
          tag="Testimonials"
          title="What People"
          highlight="Say About Me"
          subtitle="Feedback from developers, clients, and collaborators I've worked with on real projects."
          inView={inView}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-16"
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            loop
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id} className="h-auto">
                <TestimonialCard testimonial={t} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-white/20 text-xs font-mono mt-4"
        >
          * Testimonials reflect genuine feedback from collaborators and peers
        </motion.p>
      </div>
    </section>
  )
}
