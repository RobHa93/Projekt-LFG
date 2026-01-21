import HeroSection from '../components/HeroSection'
import NewsSlider from '../components/NewsSlider'
import ServicesSection from '../components/ServicesSection'
import Carousel from '../components/carouselBrands'

import LogosRow from '../components/LogosRow'

const Home = () => {
  return (
    <>
      <HeroSection />
      <NewsSlider />
      <LogosRow />
      <ServicesSection />
      <Carousel />
    </>
  )
}

export default Home