import GlassSurface from '../ui/GlassSurface'
import { FiCheckCircle } from 'react-icons/fi'

function Certifications({ data }) {
  if (!data || data.length === 0) return <section id="certifications"></section>

  return (
    <section id="certifications" className="px-4 sm:px-6 py-20 md:py-28 max-w-4xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="mb-12 text-center sm:text-left">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-100">
          Certifications
        </h2>
        <p className="font-body text-xs sm:text-sm text-purple-300/70 uppercase tracking-widest mt-1.5 font-medium">
          Verified Credentials &bull; Continuous Learning
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {data.map((cert, idx) => (
          <GlassSurface
            key={idx}
            spotlight={true}
            className="p-6 flex flex-col justify-between"
          >
            <div>
              <div className="p-2 w-fit rounded-lg bg-purple-900/30 border border-purple-500/20 text-purple-300 mb-3">
                <FiCheckCircle className="text-base" />
              </div>
              <h3 className="font-heading text-base font-bold text-slate-100 leading-snug">
                {cert.title}
              </h3>
            </div>
            <p className="font-body text-xs text-purple-300/80 mt-4 pt-3 border-t border-purple-500/15 font-medium">
              {cert.issuer}
            </p>
          </GlassSurface>
        ))}
      </div>
    </section>
  )
}

export default Certifications

