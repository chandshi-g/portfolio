import { useRef } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { FiArrowDown, FiSend, FiCode } from 'react-icons/fi'
import VariableProximity from '../effects/VariableProximity'

function Me({ data }) {
  const containerRef = useRef(null)
  const isTouchDevice =
    typeof window !== 'undefined' &&
    window.matchMedia('(pointer: coarse)').matches

  if (!data) return <section id="me"></section>

  return (
    <section
      id="me"
      ref={containerRef}
      className="relative min-h-[92vh] flex flex-col items-center justify-center text-center px-5 sm:px-6 py-24 md:py-32 scroll-mt-24"
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-7 md:gap-9">

        {/* ── Name with Variable Proximity ── */}
        <h1
          className="font-heading uppercase leading-[1.08] tracking-tight"
          style={{ fontSize: 'clamp(1.9rem, 7vw, 5rem)' }}
        >
          {isTouchDevice ? (
            <span className="text-[#edeaf4] font-semibold select-none">
              {data.name || 'Chandashi Gupta'}
            </span>
          ) : (
            <VariableProximity
              label={data.name || 'Chandashi Gupta'}
              containerRef={containerRef}
              radius={110}
              falloff="linear"
              fromFontVariationSettings="'wght' 400"
              toFontVariationSettings="'wght' 700"
              className="text-[#edeaf4]"
            />
          )}
        </h1>

        {/* ── Title + Focus Tags ── */}
        <div className="space-y-2.5">
          <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-medium text-purple-200/85 tracking-wide">
            {data.title || 'Software Engineering Student'}
          </h2>
          <p className="font-body text-xs sm:text-sm text-purple-300/55 tracking-[0.22em] uppercase font-medium">
            AI/ML &bull; Full-Stack &bull; Problem Solving
          </p>
        </div>

        {/* ── CTA Buttons ── */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 pt-1">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-medium font-body bg-purple-600/20 text-purple-50 border border-purple-500/30 hover:bg-purple-600/30 hover:border-purple-400/45 backdrop-blur-sm transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-purple-400 focus-visible:outline-offset-2"
          >
            View Projects
            <FiArrowDown className="text-purple-300/70 text-sm transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-medium font-body bg-white/[0.04] text-slate-200 border border-white/[0.08] hover:bg-white/[0.07] hover:border-purple-400/25 backdrop-blur-sm transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-purple-400 focus-visible:outline-offset-2"
          >
            Contact Me
            <FiSend className="text-purple-300/60 text-sm transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* ── Social Links ── */}
        <nav
          className="flex items-center justify-center gap-6 sm:gap-7 pt-1"
          aria-label="Social profiles"
        >
          {data.github && (
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="group inline-flex items-center gap-1.5 text-[13px] font-body text-slate-500 hover:text-slate-200 transition-colors duration-200"
            >
              <FaGithub className="text-sm group-hover:text-purple-300 transition-colors duration-200" />
              <span>GitHub</span>
            </a>
          )}

          {data.linkedin && (
            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group inline-flex items-center gap-1.5 text-[13px] font-body text-slate-500 hover:text-slate-200 transition-colors duration-200"
            >
              <FaLinkedin className="text-sm group-hover:text-purple-300 transition-colors duration-200" />
              <span>LinkedIn</span>
            </a>
          )}

          {data.codolio && (
            <a
              href={data.codolio}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Codolio"
              className="group inline-flex items-center gap-1.5 text-[13px] font-body text-slate-500 hover:text-slate-200 transition-colors duration-200"
            >
              <FiCode className="text-sm group-hover:text-purple-300 transition-colors duration-200" />
              <span>Codolio</span>
            </a>
          )}
        </nav>
      </div>
    </section>
  )
}

export default Me
