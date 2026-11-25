import Nav from './components/Nav'
import Hero from './components/Hero'
import Me from './components/Me'
import SectionDivider from './components/SectionDivider'
import Mission from './components/Mission'
import Consultorio from './components/Consultorio'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Servicios from './components/Servicios'

const App = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <SectionDivider />
      <Me />
      <SectionDivider />
      <Servicios />
      <Mission />
      <Consultorio />
      <Faq />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
