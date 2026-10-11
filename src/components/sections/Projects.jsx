import GlassSurface from '../ui/GlassSurface'
import BorderGlow from '../effects/BorderGlow'
import { FaGithub } from 'react-icons/fa6'
import { FiExternalLink, FiAward, FiStar, FiCpu } from 'react-icons/fi'

function Projects({ data }) {
  if (!data || data.length === 0) return <section id="projects"></section>

  // Separate Drishti as the featured project from secondary projects
  const featuredProject = data.find((p) => p.id === 'drishti') || data[0]
  const secondaryProjects = data.filter((p) => p.id !== featuredProject.id)

  return (
    <section id="projects" className="px-4 sm:px-6 py-20 md:py-28 max-w-4xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="mb-12 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/20 text-purple-300 text-xs font-body font-medium mb-3">
          <FiStar className="text-purple-400 text-xs" />
          <span>Curated Engineering Showcase</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-100">
          Featured Projects
        </h2>
        <p className="font-body text-xs sm:text-sm text-purple-300/70 uppercase tracking-widest mt-1.5 font-medium">
          Computer Vision &bull; AI Agents &bull; Full-Stack Systems
        </p>
      </div>

      <div className="space-y-8">
        {/* 1. HERO FEATURED PROJECT: Drishti */}
        {featuredProject && (
          <BorderGlow borderRadius="1.25rem" glowSize={350} className="w-full">
            <GlassSurface
              spotlight={true}
              spotlightColor="rgba(168, 85, 247, 0.16)"
              className="p-6 sm:p-8 md:p-10 flex flex-col justify-between"
            >
              <div>
                {/* Featured Header & Achievement Badge */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-purple-950/80 to-purple-900/40 border border-purple-500/35 text-purple-200 text-xs font-semibold font-body shadow-sm">
                    <FiAward className="text-purple-300 text-sm" />
                    <span>{featuredProject.achievement || 'Featured Project'}</span>
                  </span>

                  {/* Links (only if non-empty in data) */}
                  <div className="flex items-center gap-3">
                    {featuredProject.githubUrl && (
                      <a
                        href={featuredProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded"
                        aria-label={`GitHub source code for ${featuredProject.name}`}
                      >
                        <FaGithub className="text-xl" />
                      </a>
                    )}
                    {featuredProject.liveUrl && (
                      <a
                        href={featuredProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-purple-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded"
                        aria-label={`Live demo for ${featuredProject.name}`}
                      >
                        <FiExternalLink className="text-xl" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div className="mb-4">
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight">
                    {featuredProject.name}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-purple-300/80 font-medium mt-1">
                    {featuredProject.subtitle} &bull; <span className="text-slate-400 font-normal">{featuredProject.type}</span>
                  </p>
                </div>

                {/* Description */}
                <p className="font-body text-sm sm:text-base text-slate-300/90 leading-relaxed mb-5">
                  {featuredProject.description}
                </p>

                {/* Key Points */}
                {featuredProject.keyPoints && featuredProject.keyPoints.length > 0 && (
                  <div className="mb-6 bg-purple-950/20 border border-purple-500/15 rounded-xl p-4 sm:p-5">
                    <h4 className="font-body text-xs font-semibold text-purple-200 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                      <FiCpu className="text-purple-400 text-sm" />
                      <span>Key Technical Contributions</span>
                    </h4>
                    <ul className="font-body text-xs sm:text-sm text-slate-300/85 space-y-2 list-disc pl-4 leading-relaxed">
                      {featuredProject.keyPoints.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 pt-3 border-t border-purple-500/15">
                {featuredProject.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="font-body text-xs px-3 py-1 rounded-md bg-purple-950/50 text-purple-200 border border-purple-500/25 font-medium shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </GlassSurface>
          </BorderGlow>
        )}

        {/* 2. SECONDARY SHOWCASE GRID: Huddle & E-Commerce */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {secondaryProjects.map((project) => (
            <GlassSurface
              key={project.id}
              spotlight={true}
              spotlightColor="rgba(168, 85, 247, 0.12)"
              className="p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                {/* Header row */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <span className="inline-block font-body text-[11px] font-medium text-purple-300/70 uppercase tracking-wider mb-1">
                      {project.type}
                    </span>
                    <h3 className="font-heading text-xl font-bold text-slate-100 tracking-tight leading-snug">
                      {project.name}
                    </h3>
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-2.5 shrink-0">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded"
                        aria-label={`GitHub source code for ${project.name}`}
                      >
                        <FaGithub className="text-lg" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-purple-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded"
                        aria-label={`Live demo for ${project.name}`}
                      >
                        <FiExternalLink className="text-lg" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="font-body text-xs sm:text-sm text-purple-200/90 font-medium mb-3">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="font-body text-xs sm:text-sm text-slate-300/90 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Key points */}
                {project.keyPoints && project.keyPoints.length > 0 && (
                  <ul className="font-body text-xs text-slate-300/80 space-y-1.5 list-disc pl-4 mb-4 leading-relaxed">
                    {project.keyPoints.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                )}

                {/* Contribution note */}
                {project.contributionNote && (
                  <p className="font-body text-xs text-purple-300/70 italic mb-4">
                    Note: {project.contributionNote}
                  </p>
                )}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-purple-500/10 mt-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="font-body text-[11px] px-2.5 py-0.5 rounded-md bg-purple-950/40 text-purple-200 border border-purple-500/20 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </GlassSurface>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

