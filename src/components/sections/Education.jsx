import GlassSurface from '../ui/GlassSurface'
import { FiBookOpen } from 'react-icons/fi'

function Education({ data }) {
  if (!data || data.length === 0) return <section id="education"></section>

  return (
    <section id="education" className="px-4 sm:px-6 py-20 md:py-28 max-w-4xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="mb-12 text-center sm:text-left">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-100">
          Education
        </h2>
        <p className="font-body text-xs sm:text-sm text-purple-300/70 uppercase tracking-widest mt-1.5 font-medium">
          Academic Foundation &bull; Artificial Intelligence
        </p>
      </div>

      <div className="space-y-5">
        {data.map((edu, idx) => (
          <GlassSurface key={idx} spotlight={true} className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-purple-900/30 border border-purple-500/20 text-purple-300 shrink-0">
                  <FiBookOpen className="text-xl" />
                </div>
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-100 mb-1 tracking-tight">
                    {edu.institution}
                  </h3>
                  <p className="font-body text-sm sm:text-base font-medium text-purple-200">
                    {edu.degree}
                  </p>
                  <p className="font-body text-xs sm:text-sm text-slate-400 mt-1">
                    {edu.period}
                  </p>
                </div>
              </div>

              {edu.cgpa && (
                <div className="self-start sm:self-center px-4 py-2 rounded-xl bg-purple-950/50 border border-purple-500/30 text-purple-200 text-sm font-semibold font-body shadow-sm">
                  CGPA: <span className="text-white font-bold">{edu.cgpa}</span>
                </div>
              )}
            </div>
          </GlassSurface>
        ))}
      </div>
    </section>
  )
}

export default Education

