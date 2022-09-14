import './App.css'
import Navbar from './components/Navbar/Navbar'
import MobileNav from './components/Navbar/mobileNav'
import Footer from './components/Footer/Footer'
import Home from './views/Home/Home'
import About from './views/About/About'
import Projects from './views/Projects/Projects'
import Contact from './views/Contact/Contact'

function App() {
  return (
    <div>
      <MobileNav />
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
