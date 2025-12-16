import { useState } from "react";

import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Carousel from "./components/carouselBrands";
import NewsSlider from "./components/NewsSlider";
import LoadingOverlay from "./components/LoadingOverlay";

import renaultLogo from "./assets/img/renault.png";
import "./App.css";

function App() {
  const [ready, setReady] = useState(false);

  return (
    <>
      <LoadingOverlay
        durationMs={3000}
        logoSrc={renaultLogo}
        onDone={() => setReady(true)}
      />

      <div
        className={`App transition-opacity duration-300 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navigation />
        <HeroSection />
        <NewsSlider />
        <ServicesSection />
        <Carousel />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

export default App;
