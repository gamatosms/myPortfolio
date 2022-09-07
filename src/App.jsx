import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './views/Home/Home'
import About from './views/About/About'
import Projects from './views/Projects/Projects'
import Contact from './views/Contact/Contact'

function App() {
  return (
    <div>
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
