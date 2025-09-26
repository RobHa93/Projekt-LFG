import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Carousel from './components/carouselBrands'
import NewsSlider from './components/NewsSlider'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navigation />
      <HeroSection />
      <NewsSlider />
      <ServicesSection />
      <Carousel />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
