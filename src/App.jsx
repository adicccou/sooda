import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import WhoBenefits from './components/WhoBenefits'
import Features from './components/Features'
import SellNow from './components/SellNow'
import ComingFeatures from './components/ComingFeatures'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <WhoBenefits />
      <Features />
      <SellNow />
      <ComingFeatures />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
