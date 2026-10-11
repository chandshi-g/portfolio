import { portfolioData } from './data/portfolioData'
import MoltenMetal from './components/effects/MoltenMetal'
import SplashCursor from './components/effects/SplashCursor'
import Navbar from './components/sections/Navbar'
import Me from './components/sections/Me'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Contributions from './components/sections/Contributions'
import Education from './components/sections/Education'
import Certifications from './components/sections/Certifications'
import BeyondTech from './components/sections/BeyondTech'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'

function Portfolio() {
  return (
    <div className="relative min-h-screen text-[#f5f3ff] selection:bg-purple-600/40 selection:text-white bg-[#07050d] overflow-x-hidden">
      {/* LEVEL 1: Atmospheric Molten Metal Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-80">
        <MoltenMetal />
      </div>

      {/* Subtle dark translucent overlay to guarantee text and glass contrast */}
      <div
        className="fixed inset-0 z-[1] pointer-events-none bg-[#07050d]/50"
        aria-hidden="true"
      />

      {/* Global Splash Cursor effect */}
      <SplashCursor palette={['#A855F7', '#D946EF', '#67E8F9']} intensity={0.5} />

      {/* Main Content Sections */}
      <div className="relative z-10 pt-16 md:pt-20">
        <Navbar />
        <main>
          <Me data={portfolioData.personal} />
          <Skills data={portfolioData.skills} />
          <Projects data={portfolioData.projects} />
          <Contributions data={portfolioData.contributions} />
          <Education data={portfolioData.education} />
          <Certifications data={portfolioData.certifications} />
          <BeyondTech data={portfolioData.beyondTech} />
          <Contact data={portfolioData.contact} />
        </main>
        <Footer data={portfolioData.personal} />
      </div>
    </div>
  )
}

export default Portfolio
