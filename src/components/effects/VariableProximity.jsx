import { forwardRef, useMemo, useRef, useEffect } from 'react'

const VariableProximity = forwardRef(function VariableProximity(
  {
    label,
    fromFontVariationSettings = "'wght' 400",
    toFontVariationSettings = "'wght' 750",
    containerRef,
    radius = 120,
    falloff = 'linear',
    className = '',
    onClick,
    ...props
  },
  ref
) {
  const letterRefs = useRef([])
  const isTouchDevice = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches

  const parsedSettings = useMemo(() => {
    const parse = (str) => {
      const match = str.match(/'([^']+)'\s*(-?\d+(\.\d+)?)/)
      if (!match) return { axis: 'wght', value: 400 }
      return { axis: match[1], value: parseFloat(match[2]) }
    }
    return {
      from: parse(fromFontVariationSettings),
      to: parse(toFontVariationSettings),
    }
  }, [fromFontVariationSettings, toFontVariationSettings])

  useEffect(() => {
    if (isTouchDevice || typeof window === 'undefined') return

    const currentContainer = containerRef?.current
    const targetEl = currentContainer || window
    let mouseX = -9999
    let mouseY = -9999
    let rafId = null

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY

      if (!rafId) {
        rafId = requestAnimationFrame(updateProximity)
      }
    }

    const handleMouseLeave = () => {
      mouseX = -9999
      mouseY = -9999
      if (!rafId) {
        rafId = requestAnimationFrame(updateProximity)
      }
    }

    const updateProximity = () => {
      rafId = null
      letterRefs.current.forEach((letterSpan) => {
        if (!letterSpan) return
        const rect = letterSpan.getBoundingClientRect()
        const letterX = rect.left + rect.width / 2
        const letterY = rect.top + rect.height / 2
        const dist = Math.hypot(mouseX - letterX, mouseY - letterY)

        let proximity = 0
        if (dist < radius) {
          const ratio = 1 - dist / radius
          proximity = falloff === 'exponential' ? Math.pow(ratio, 2) : ratio
        }

        const interpolatedValue =
          parsedSettings.from.value +
          (parsedSettings.to.value - parsedSettings.from.value) * proximity

        letterSpan.style.fontVariationSettings = `'${parsedSettings.from.axis}' ${Math.round(interpolatedValue)}`
        letterSpan.style.fontWeight = Math.round(interpolatedValue)
      })
    }

    targetEl.addEventListener('mousemove', handleMouseMove, { passive: true })
    if (currentContainer) {
      currentContainer.addEventListener('mouseleave', handleMouseLeave, { passive: true })
    }

    return () => {
      targetEl.removeEventListener('mousemove', handleMouseMove)
      if (currentContainer) {
        currentContainer.removeEventListener('mouseleave', handleMouseLeave)
      }
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [containerRef, radius, falloff, parsedSettings, isTouchDevice])

  const words = label.split(' ')
  let letterIndex = 0

  return (
    <span
      ref={ref}
      className={`inline-block select-none ${className}`}
      onClick={onClick}
      {...props}
    >
      {words.map((word, wordIdx) => (
        <span key={wordIdx} className="inline-block whitespace-nowrap">
          {word.split('').map((char) => {
            const currentIdx = letterIndex++
            return (
              <span
                key={currentIdx}
                ref={(el) => (letterRefs.current[currentIdx] = el)}
                className="inline-block transition-transform duration-75"
                style={{
                  fontVariationSettings: fromFontVariationSettings,
                  fontWeight: parsedSettings.from.value,
                  display: 'inline-block',
                }}
              >
                {char}
              </span>
            )
          })}
          {wordIdx < words.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </span>
      ))}
    </span>
  )
})

export default VariableProximity
