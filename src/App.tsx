import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyGuide from './components/WhyGuide'
import GuideContent from './components/GuideContent'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      <Navbar />
      <main>
        <Hero />
        <WhyGuide />
        <GuideContent />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
