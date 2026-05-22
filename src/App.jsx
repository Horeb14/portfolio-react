import { useReveal } from './hooks/useReveal'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CurveDown from './components/CurveDown'
import About from './components/About'
import Projects from './components/Projects'
import CV from './components/CV'
import CurveUp from './components/CurveUp'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  useReveal()
  return (
    <>
      <Navbar />
      <Hero />
      <CurveDown />
      <About />
      <Projects />
      <CV />
      <CurveUp />
      <Contact />
      <Footer />
    </>
  )
}

export default App
