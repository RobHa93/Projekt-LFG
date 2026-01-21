import HeroSection from '../components/HeroSection'
import NewsSlider from '../components/NewsSlider'
import ServicesSection from '../components/ServicesSection'

import LogosRow from '../components/LogosRow'

const Home = () => {
  return (
    <div className="bg-gray-50">
      <HeroSection />
      <NewsSlider />
      <LogosRow />
      <ServicesSection />
    </div>
  )
}

export default Home