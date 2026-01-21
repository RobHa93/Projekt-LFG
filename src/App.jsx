import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import LoadingOverlay from "./components/LoadingOverlay";

import Home from "./pages/Home";
import Fahrzeuge from "./pages/Fahrzeuge";
import Mietwagen from "./pages/Mietwagen";
import Reservation from "./pages/Reservation";
import Werkstatt from "./pages/Werkstatt";
import TankstelleUndWaschanlage from "./pages/TankstelleUndWaschanlage";
import UeberUns from "./pages/UeberUns";
import Kontakt from "./pages/Kontakt";

import renaultLogo from "./assets/img/renault.png";
import "./App.css";


function App() {
  const [ready, setReady] = useState(false);

  return (
    <>
      <LoadingOverlay
        durationMs={2000}
        logoSrc={renaultLogo}
        onDone={() => setReady(true)}
      />

      <div
        className={`transition-opacity duration-300 min-h-screen flex flex-col ${ready ? "opacity-100" : "opacity-0"}`}
        style={{ minHeight: '100vh' }}
      >
        <BrowserRouter>
          <Navigation />

          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/fahrzeuge" element={<Fahrzeuge />} />
              <Route path="/mietwagen" element={<Mietwagen />} />
              <Route path="/mietwagen/:id" element={<Reservation />} />
              <Route path="/werkstatt" element={<Werkstatt />} />
              <Route path="/tankstelle-und-waschanlage" element={<TankstelleUndWaschanlage />} />
              <Route path="/ueber-uns" element={<UeberUns />} />
              <Route path="/kontakt" element={<Kontakt />} />
            </Routes>
          </div>

          <Footer />
          <ScrollToTop />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
