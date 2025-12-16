import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import LoadingOverlay from "./components/LoadingOverlay";

import Home from "./pages/Home";
import Fahrzeuge from "./pages/Fahrzeuge";
import Service from "./pages/Service";
import Werkstatt from "./pages/Werkstatt";
import UeberUns from "./pages/UeberUns";
import Kontakt from "./pages/Kontakt";

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

      <div className={`transition-opacity duration-300 ${ready ? "opacity-100" : "opacity-0"}`}>
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
      </div>
    </>
  );
}

export default App;
