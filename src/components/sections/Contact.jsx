import GlassSurface from '../ui/GlassSurface'
import BorderGlow from '../effects/BorderGlow'
import Magnet from '../ui/Magnet'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { FiCode, FiArrowUpRight, FiSend, FiMail } from 'react-icons/fi'

function Contact({ data }) {
  if (!data) return <section id="contact"></section>

  return (
    <section id="contact" className="px-4 sm:px-6 py-20 md:py-28 max-w-4xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="mb-12 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-100">
          Contact
        </h2>
        <p className="font-body text-xs sm:text-sm text-purple-300/70 uppercase tracking-widest mt-1.5 font-medium">
          Collaboration &bull; Opportunities &bull; Inquiries
        </p>
      </div>

      {/* Glass Contact Surface with selective BorderGlow */}
      <BorderGlow borderRadius="1.25rem" glowSize={300} className="max-w-2xl mx-auto">
        <GlassSurface spotlight={true} className="p-8 sm:p-12 text-center">
          <div className="space-y-6">
            <p className="font-body text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-md mx-auto">
              I'm always open to discussing new projects, software engineering opportunities, or technology collaborations.
            </p>

            {/* Main Contact CTA Button */}
            {data.email && (
              <div className="pt-2 pb-4">
                <Magnet strength={10}>
                  <a
                    href={`mailto:${data.email}`}
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl text-sm sm:text-base font-semibold font-body bg-purple-600/40 hover:bg-purple-600/50 text-white border border-purple-400/50 backdrop-blur-md shadow-xl shadow-purple-950/40 hover:shadow-purple-600/25 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
                  >
                    <FiSend className="text-purple-300" />
                    <span>Get In Touch</span>
                  </a>
                </Magnet>
                <div className="mt-3">
                  <a
                    href={`mailto:${data.email}`}
                    className="font-body text-xs sm:text-sm text-purple-300/80 hover:text-purple-200 transition-colors inline-flex items-center gap-1.5"
                  >
                    <FiMail className="text-xs" />
                    <span>{data.email}</span>
                  </a>
                </div>
              </div>
            )}

            {/* Social Links Row */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-6 border-t border-purple-500/15">
              {data.github && (
                <a
                  href={data.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-xs sm:text-sm font-body text-slate-300 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded"
                >
                  <FaGithub className="text-base text-slate-400 group-hover:text-purple-300 transition-colors" />
                  <span>GitHub</span>
                  <FiArrowUpRight className="text-xs opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
              )}

              {data.linkedin && (
                <a
                  href={data.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-xs sm:text-sm font-body text-slate-300 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded"
                >
                  <FaLinkedin className="text-base text-slate-400 group-hover:text-purple-300 transition-colors" />
                  <span>LinkedIn</span>
                  <FiArrowUpRight className="text-xs opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
              )}

              {data.codolio && (
                <a
                  href={data.codolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-xs sm:text-sm font-body text-slate-300 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded"
                >
                  <FiCode className="text-base text-slate-400 group-hover:text-purple-300 transition-colors" />
                  <span>Codolio</span>
                  <FiArrowUpRight className="text-xs opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
              )}
            </div>
          </div>
        </GlassSurface>
      </BorderGlow>
    </section>
  )
}

export default Contact

