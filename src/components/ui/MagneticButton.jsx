import { useMagneticEffect } from '../../hooks/useMagneticEffect'

export default function MagneticButton({ children, className = '', strength = 0.35, ...props }) {
  const { elementRef, handleMouseMove, handleMouseLeave } = useMagneticEffect(strength)

  return (
    <div
      ref={elementRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-flex ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
