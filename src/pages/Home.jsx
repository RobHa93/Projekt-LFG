import HeroSection from '../components/HeroSection'
import NewsSlider from '../components/NewsSlider'
import ServicesSection from '../components/ServicesSection'
import CtaHome from '../components/CtaHome'
import LogosRow from '../components/LogosRow'

const Home = () => {
  return (
    <div className="bg-gray-50">
      <HeroSection />
      <NewsSlider />
      <ServicesSection />
      <LogosRow />
      <CtaHome />
    </div>
  )
}

export default Home