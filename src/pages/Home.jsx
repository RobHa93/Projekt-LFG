import HeroSection from '../components/HeroSection'
import NewsSlider from '../components/NewsSlider'
import ServicesSection from '../components/ServicesSection'
import Carousel from '../components/carouselBrands'

import LogosRow from '../components/LogosRow'

const Home = () => {
  return (
    <div className="bg-gray-50">
      <HeroSection />
      <NewsSlider />
      <LogosRow />
      <ServicesSection />
      <Carousel />
    </div>
  )
}

export default Home