import { useState, useRef, useCallback } from 'react'

export default function GlassSurface({
  children,
  className = '',
  spotlight = false,
  spotlightColor = 'rgba(168, 85, 247, 0.14)',
  spotlightSize = 350,
  as: Component = 'div',
  ...props
}) {
  const cardRef = useRef(null)
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = useCallback(
    (e) => {
      if (!spotlight || !cardRef.current) return
      const rect = cardRef.current.getBoundingClientRect()
      setSpotlightPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    },
    [spotlight]
  )

  return (
    <Component
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative rounded-2xl transition-all duration-300 ease-out ${
        isHovered ? '-translate-y-1 shadow-xl shadow-purple-950/25 border-purple-500/30' : 'shadow-lg shadow-black/40 border-purple-500/12'
      } ${className}`}
      style={{
        background: isHovered
          ? 'rgba(15, 11, 28, 0.65)'
          : 'rgba(10, 8, 18, 0.48)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        border: isHovered
          ? '1px solid rgba(168, 85, 247, 0.28)'
          : '1px solid rgba(168, 85, 247, 0.12)',
      }}
      {...props}
    >
      {/* Dynamic spotlight reflection on hover */}
      {spotlight && isHovered && (
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
          style={{
            background: `radial-gradient(${spotlightSize}px circle at ${spotlightPos.x}px ${spotlightPos.y}px, ${spotlightColor}, transparent 70%)`,
          }}
          aria-hidden="true"
        />
      )}

      {/* Gentle liquid glass top sheen */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent transition-opacity duration-300 group-hover:via-violet-400/35"
        aria-hidden="true"
      />

      {children}
    </Component>
  )
}

