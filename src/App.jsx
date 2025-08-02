import Header from './components/Header'
import Banner from './components/Banner'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Features from './components/Features'
import AISection from './components/AISection'
import PlatformSections from './components/PlatformSections'
import Tools from './components/Tools'
import ROI from './components/ROI'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Banner />
      <main>
        <Hero />
        <Stats />
        <Features />
        <AISection />
        <PlatformSections />
        <Tools />
        <ROI />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
