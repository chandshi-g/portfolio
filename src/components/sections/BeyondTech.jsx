import GlassSurface from '../ui/GlassSurface'
import { FiEdit3, FiCompass } from 'react-icons/fi'
import { IoGameControllerOutline } from 'react-icons/io5'
import { MdSportsTennis } from 'react-icons/md'

const ICONS = {
  Writing: FiEdit3,
  Badminton: MdSportsTennis,
  Chess: IoGameControllerOutline,
  Exploring: FiCompass,
}

function BeyondTech({ data }) {
  if (!data || data.length === 0) return <section id="beyond-tech"></section>

  return (
    <section id="beyond-tech" className="px-4 sm:px-6 py-20 md:py-28 max-w-4xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="mb-12 text-center sm:text-left">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-100">
          Beyond Tech
        </h2>
        <p className="font-body text-xs sm:text-sm text-purple-300/70 uppercase tracking-widest mt-1.5 font-medium">
          Life &bull; Curiosity &bull; Offline Pursuits
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {data.map((item, idx) => {
          const label = typeof item === 'object' ? item.label : item
          const desc = typeof item === 'object' ? item.description : ''
          const Icon = ICONS[label] || FiCompass

          return (
            <GlassSurface
              key={idx}
              spotlight={true}
              className="p-6 sm:p-7"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-purple-900/30 border border-purple-500/20 text-purple-300 shrink-0">
                  <Icon className="text-xl" />
                </div>
                <div>
                  <h3 className="font-heading text-base sm:text-lg font-bold text-slate-100 mb-1 tracking-tight">
                    {label}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-slate-300/85 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            </GlassSurface>
          )
        })}
      </div>
    </section>
  )
}

export default BeyondTech

