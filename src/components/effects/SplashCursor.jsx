import { useEffect, useRef } from 'react'

export default function SplashCursor({
  intensity = 0.55,
  palette = ['#A855F7', '#D946EF', '#67E8F9'],
  className = '',
}) {
  const canvasRef = useRef(null)

  useEffect(() => {
    // Graceful bail on touch devices or reduced motion
    const isTouch = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (isTouch || prefersReducedMotion) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize, { passive: true })

    const particles = []
    let lastX = -1
    let lastY = -1

    // Parse hex to rgb
    const parsedColors = palette.map((hex) => {
      const num = parseInt(hex.replace('#', ''), 16)
      return {
        r: (num >> 16) & 255,
        g: (num >> 8) & 255,
        b: num & 255,
      }
    })

    const spawnSplash = (x, y, dx, dy) => {
      const speed = Math.hypot(dx, dy)
      if (speed < 1.5) return

      // Weighted color choice: 60% violet, 30% magenta, 10% cyan
      const rand = Math.random()
      let color
      if (rand < 0.6) {
        color = parsedColors[0] // Violet
      } else if (rand < 0.9) {
        color = parsedColors[1] // Magenta
      } else {
        color = parsedColors[2] // Cyan
      }

      const count = Math.min(Math.floor(speed * 0.4) + 1, 4)
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2
        const dist = Math.random() * 18
        particles.push({
          x: x + Math.cos(angle) * dist,
          y: y + Math.sin(angle) * dist,
          radius: (Math.random() * 22 + 14) * intensity,
          maxRadius: (Math.random() * 45 + 35) * intensity,
          color,
          alpha: (Math.random() * 0.28 + 0.15) * intensity,
          decay: Math.random() * 0.025 + 0.02,
        })
      }
    }

    const handleMouseMove = (e) => {
      const x = e.clientX
      const y = e.clientY
      if (lastX >= 0 && lastY >= 0) {
        spawnSplash(x, y, x - lastX, y - lastY)
      }
      lastX = x
      lastY = y
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    let animId
    const render = () => {
      ctx.clearRect(0, 0, width, height)

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.alpha -= p.decay
        p.radius += (p.maxRadius - p.radius) * 0.08

        if (p.alpha <= 0.01) {
          particles.splice(i, 1)
          continue
        }

        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          Math.max(p.radius, 1)
        )
        gradient.addColorStop(
          0,
          `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.alpha})`
        )
        gradient.addColorStop(
          0.6,
          `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.alpha * 0.4})`
        )
        gradient.addColorStop(
          1,
          `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0)`
        )

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()
      }

      animId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animId)
    }
  }, [intensity, palette])

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-20 transition-opacity duration-500 ${className}`}
      style={{ mixBlendMode: 'screen' }}
      aria-hidden="true"
    />
  )
}
