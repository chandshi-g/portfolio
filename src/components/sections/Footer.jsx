import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { FiCode, FiArrowUp } from 'react-icons/fi'

function Footer({ data }) {
  const handleScrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-12 px-4 sm:px-6 border-t border-purple-500/10 text-center font-body text-xs text-slate-400">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-400">
          &copy; {new Date().getFullYear()} <span className="text-slate-200 font-medium">{data?.name || 'Chandashi Gupta'}</span>. All rights reserved.
        </p>

        {/* Useful quick links & back to top */}
        <div className="flex items-center gap-5">
          {data?.github && (
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-purple-300 transition-colors"
              aria-label="GitHub Profile"
            >
              <FaGithub className="text-base" />
            </a>
          )}
          {data?.linkedin && (
            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-purple-300 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="text-base" />
            </a>
          )}
          {data?.codolio && (
            <a
              href={data.codolio}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-purple-300 transition-colors"
              aria-label="Codolio Profile"
            >
              <FiCode className="text-base" />
            </a>
          )}

          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-1 text-slate-400 hover:text-purple-300 transition-colors ml-2 pl-3 border-l border-purple-500/20"
            aria-label="Scroll to top"
          >
            <span>Top</span>
            <FiArrowUp className="text-xs" />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer

