import { useRef, useState, useCallback } from 'react'

export default function Magnet({
  children,
  strength = 12,
  className = '',
  ...props
}) {
  const ref = useRef(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const isTouch =
    typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const handleMouseMove = useCallback(
    (e) => {
      if (isTouch || prefersReducedMotion || !ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const deltaX = (e.clientX - centerX) / (rect.width / 2)
      const deltaY = (e.clientY - centerY) / (rect.height / 2)

      // Capped, gentle pull
      setOffset({
        x: Math.max(-1, Math.min(1, deltaX)) * strength,
        y: Math.max(-1, Math.min(1, deltaY)) * strength,
      })
    },
    [strength, isTouch, prefersReducedMotion]
  )

  const handleMouseLeave = useCallback(() => {
    setOffset({ x: 0, y: 0 })
  }, [])

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block transition-transform duration-200 ease-out ${className}`}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
      }}
      {...props}
    >
      {children}
    </div>
  )
}
