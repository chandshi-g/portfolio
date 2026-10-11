import { useRef, useState, useCallback } from 'react'

export default function BorderGlow({
  children,
  className = '',
  glowColor1 = '#A855F7',
  glowColor2 = '#D946EF',
  glowSize = 250,
  borderRadius = '1rem',
}) {
  const containerRef = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
    setOpacity(1)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setOpacity(0)
  }, [])

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative p-[1px] transition-all duration-300 ${className}`}
      style={{ borderRadius }}
    >
      {/* Dynamic travelling mouse-following border light */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-out"
        style={{
          borderRadius,
          opacity,
          background: `radial-gradient(${glowSize}px circle at ${position.x}px ${position.y}px, ${glowColor1}88, ${glowColor2}44, transparent 70%)`,
        }}
        aria-hidden="true"
      />

      {/* Subtle ambient gradient border idle state */}
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          borderRadius,
          background: `linear-gradient(135deg, ${glowColor1}40 0%, ${glowColor2}20 50%, transparent 100%)`,
        }}
        aria-hidden="true"
      />

      {/* Inner card surface */}
      <div
        className="relative h-full w-full overflow-hidden"
        style={{ borderRadius: `calc(${borderRadius} - 1px)` }}
      >
        {children}
      </div>
    </div>
  )
}
