import Nav from './components/Nav'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Solutions from './components/Solutions'
import ValueProps from './components/ValueProps'
import Pipeline from './components/Pipeline'
import Testimonials from './components/Testimonials'
import FooterCTA from './components/FooterCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className='min-h-screen bg-white'>
      <Nav />
      <Hero />
      <Stats />
      <Solutions />
      <ValueProps />
      <Pipeline />
      <Testimonials />
      <FooterCTA />
      <Footer />
    </div>
  )
}

export default App
