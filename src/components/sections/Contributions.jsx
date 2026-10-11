import GlassSurface from '../ui/GlassSurface'
import { FiUsers } from 'react-icons/fi'

function Contributions({ data }) {
  if (!data || data.length === 0) return <section id="experience"></section>

  return (
    <section id="experience" className="px-4 sm:px-6 py-20 md:py-28 max-w-4xl mx-auto scroll-mt-24">
      <span id="contributions" className="sr-only" aria-hidden="true" />

      {/* Section Header */}
      <div className="mb-12 text-center sm:text-left">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-100">
          Contributions
        </h2>
        <p className="font-body text-xs sm:text-sm text-purple-300/70 uppercase tracking-widest mt-1.5 font-medium">
          Community &bull; Mentorship &bull; Technical Initiatives
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((item) => (
          <GlassSurface
            key={item.id}
            spotlight={true}
            className="p-6 sm:p-7 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-purple-900/30 border border-purple-500/20 text-purple-300">
                    <FiUsers className="text-base" />
                  </div>
                  <h3 className="font-heading text-base sm:text-lg font-bold text-slate-100 leading-snug">
                    {item.organization}
                  </h3>
                </div>
              </div>

              <span className="inline-block text-xs font-semibold text-purple-200 bg-purple-950/60 border border-purple-500/25 px-2.5 py-1 rounded-full mb-3">
                {item.role}
              </span>

              <p className="font-body text-xs sm:text-sm text-slate-300/90 leading-relaxed">
                {item.description}
              </p>
            </div>
          </GlassSurface>
        ))}
      </div>
    </section>
  )
}

export default Contributions

