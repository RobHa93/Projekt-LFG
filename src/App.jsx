import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

import Home from './pages/Home'
import Fahrzeuge from './pages/Fahrzeuge'
import Service from './pages/Service'
import Werkstatt from './pages/Werkstatt'
import UeberUns from './pages/UeberUns'
import Kontakt from './pages/Kontakt'

function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fahrzeuge" element={<Fahrzeuge />} />
        <Route path="/service" element={<Service />} />
        <Route path="/werkstatt" element={<Werkstatt />} />
        <Route path="/ueber-uns" element={<UeberUns />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>

      <Footer />
      <ScrollToTop />
    </BrowserRouter>
  )
}

export default App
