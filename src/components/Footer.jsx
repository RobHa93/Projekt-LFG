import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Firmenname & Social */}
        <div>
          <h2 className="text-white text-xl font-bold mb-4">
            Langenfeld Garage AG
          </h2>
          <p className="mb-6">
            Hauptstrasse 142<br />
            5072 Oeschgen
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Öffnungszeiten */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Öffnungszeiten</h3>
          <p className="font-medium text-yellow-400 mb-2">Kundendienst & Werkstatt</p>
          <p className="mb-4">
            Mo–Do: 07:30–12:00 / 13:00–17:30<br />
            Fr: 07:30–12:00 / 13:00–17:00
          </p>
          <p className="font-medium text-yellow-400 mb-2">Verkauf</p>
          <p>
            Mo–Fr: 07:30–12:00 / 13:00–18:00<br />
            Sa: 08:00–12:00
          </p>
        </div>

        {/* Kontakt & Notfall */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Kontakt</h3>
          <p>
            Tel: <a href="tel:0628711716" className="hover:text-white">062 871 17 16</a><br />
            Fax: 062 871 58 16<br />
            <a href="mailto:info@langenfeld.ch" className="hover:text-white">info@langenfeld.ch</a>
          </p>

          <div className="mt-6">
            <h4 className="text-yellow-400 font-medium mb-2">Assistance 24h</h4>
            <p>Renault: <a href="tel:0448341200" className="hover:text-white">044 834 12 00</a></p>
            <p>Dacia: <a href="tel:0447770375" className="hover:text-white">044 777 03 75</a></p>
            <p>Z.E.: <a href="tel:0448341201" className="hover:text-white">044 834 12 01</a></p>
          </div>
        </div>
      </div>

      {/* Untere Leiste */}
      <div className="border-t border-gray-700 text-center text-sm py-4">
        <a href="#" className="hover:text-white mx-2">Impressum</a> |
        <a href="#" className="hover:text-white mx-2">Datenschutz</a>
      </div>
    </footer>
  );
}