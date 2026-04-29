import { useRef } from 'react'
import './App.css'
import AboutSection from './components/portfolio/AboutSection'
import CanvasBackground from './components/portfolio/CanvasBackground'
import ContactSection from './components/portfolio/ContactSection'
import ExperienceSection from './components/portfolio/ExperienceSection'
import HeroSection from './components/portfolio/HeroSection'
import Hud from './components/portfolio/Hud'
import Navbar from './components/portfolio/Navbar'
import SiteFooter from './components/portfolio/SiteFooter'
import TechSection from './components/portfolio/TechSection'
import WinsSection from './components/portfolio/WinsSection'
import WorkSection from './components/portfolio/WorkSection'
import { usePortfolioEffects } from './components/portfolio/usePortfolioEffects'

function App() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  usePortfolioEffects(canvasRef)

  return (
    <div className="font-body selection:bg-primary-container selection:text-on-primary-container">
      <Hud />
      <Navbar />

      <main className="relative">
        <HeroSection />
        <AboutSection />
        <WinsSection />
        <TechSection />
        <WorkSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <CanvasBackground canvasRef={canvasRef} />
    </div>
  )
}

export default App
