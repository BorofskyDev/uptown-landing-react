import Navbar from './components/Navbar/Navbar'
import Main from './pages/Main/Main'
import About from './pages/About/About'
import Features from './pages/Features/Features'
import Floorplans from './pages/Floorplans/Floorplans'
import Deposits from './pages/Deposits/Deposits'
import Gallery from './pages/Gallery/Gallery'
import Contact from './pages/Contact/Contact'
import Footer from './pages/Footer/Footer'

import './App.scss'

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Features />
      <Floorplans />
      <Deposits />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
