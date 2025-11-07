import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Treatment from './components/Treatment'
import Testimonials from './components/Testimonials'
import Stats from './components/Stats'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Treatment />
      <Stats />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
