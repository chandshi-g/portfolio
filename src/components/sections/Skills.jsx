import GlassSurface from '../ui/GlassSurface'
import { FiCode, FiTerminal, FiDatabase, FiCpu, FiCompass } from 'react-icons/fi'

const CATEGORY_META = {
  languages: { title: 'Languages', icon: FiCode },
  frameworks: { title: 'Frameworks', icon: FiTerminal },
  toolsAndPlatforms: { title: 'Tools & Platforms', icon: FiDatabase },
  coreCS: { title: 'Core CS', icon: FiCompass },
  aiAssistedDevelopment: { title: 'AI-Assisted Development', icon: FiCpu },
}

function Skills({ data }) {
  if (!data) return <section id="skills"></section>

  return (
    <section id="skills" className="px-4 sm:px-6 py-20 md:py-28 max-w-4xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="mb-12 text-center sm:text-left">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-100">
          Skills
        </h2>
        <p className="font-body text-xs sm:text-sm text-purple-300/70 uppercase tracking-widest mt-1.5 font-medium">
          Languages &bull; Frameworks &bull; Systems &bull; AI Tooling
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {Object.entries(data).map(([category, items]) => {
          const meta = CATEGORY_META[category] || { title: category, icon: FiCode }
          const Icon = meta.icon
          const isFullWidth = category === 'aiAssistedDevelopment'

          return (
            <GlassSurface
              key={category}
              spotlight={true}
              className={`p-6 sm:p-7 flex flex-col justify-between ${
                isFullWidth ? 'md:col-span-2' : ''
              }`}
            >
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="p-2 rounded-lg bg-purple-900/30 border border-purple-500/20 text-purple-300">
                    <Icon className="text-base" />
                  </div>
                  <h3 className="font-heading text-base sm:text-lg font-bold text-slate-100 tracking-tight">
                    {meta.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {items.map((skill, idx) => (
                    <span
                      key={idx}
                      className="font-body text-xs sm:text-sm px-3 py-1.5 rounded-lg bg-purple-950/35 hover:bg-purple-900/40 text-slate-200 border border-purple-500/15 hover:border-purple-400/30 transition-colors duration-150 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </GlassSurface>
          )
        })}
      </div>
    </section>
  )
}

export default Skills

