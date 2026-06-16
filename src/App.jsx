import { useEffect, useRef, lazy, Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import CustomCursor from './components/common/CustomCursor'
import ScrollProgress from './components/common/ScrollProgress'
import ScrollToTop from './components/common/ScrollToTop'
import Loader from './components/common/Loader'
import ParticleBackground from './components/ui/ParticleBackground'

// Lazy load sections
const Hero = lazy(() => import('./components/sections/Hero'))
const About = lazy(() => import('./components/sections/About'))
const Skills = lazy(() => import('./components/sections/Skills'))
const Experience = lazy(() => import('./components/sections/Experience'))
const Projects = lazy(() => import('./components/sections/Projects'))
const Services = lazy(() => import('./components/sections/Services'))
const Achievements = lazy(() => import('./components/sections/Achievements'))
const Testimonials = lazy(() => import('./components/sections/Testimonials'))
const Contact = lazy(() => import('./components/sections/Contact'))

gsap.registerPlugin(ScrollTrigger)

const SectionFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-8 h-8 rounded-full border-2 border-accent border-t-transparent animate-spin" />
  </div>
)

export default function App() {
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    })
    lenisRef.current = lenis

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // Connect Lenis to ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove((time) => lenis.raf(time * 1000))
    }
  }, [])

  return (
    <Router>
      <div className="relative bg-primary noise">
        <ParticleBackground />
        <CustomCursor />
        <ScrollProgress />
        <Loader />
        <ScrollToTop />
        <Navbar />
        <main>
          <Suspense fallback={<SectionFallback />}>
            <Hero />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <About />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Skills />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Experience />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Projects />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Services />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Achievements />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Testimonials />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Contact />
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
