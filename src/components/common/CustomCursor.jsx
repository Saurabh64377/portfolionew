import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const posRef = useRef({ x: 0, y: 0 })
  const ringPosRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const onMouseMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY }
      gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.1, ease: 'power2.out' })
    }

    const ringFollowLoop = () => {
      ringPosRef.current.x += (posRef.current.x - ringPosRef.current.x) * 0.12
      ringPosRef.current.y += (posRef.current.y - ringPosRef.current.y) * 0.12
      gsap.set(ring, { x: ringPosRef.current.x, y: ringPosRef.current.y })
      requestAnimationFrame(ringFollowLoop)
    }
    ringFollowLoop()

    const onMouseEnterLink = () => ring.classList.add('cursor-hover')
    const onMouseLeaveLink = () => ring.classList.remove('cursor-hover')

    const addListeners = () => {
      document.querySelectorAll('a, button, [data-cursor-hover]').forEach((el) => {
        el.addEventListener('mouseenter', onMouseEnterLink)
        el.addEventListener('mouseleave', onMouseLeaveLink)
      })
    }
    addListeners()
    const observer = new MutationObserver(addListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    window.addEventListener('mousemove', onMouseMove)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" />
      <div ref={ringRef} className="cursor-ring hidden md:block" />
    </>
  )
}
