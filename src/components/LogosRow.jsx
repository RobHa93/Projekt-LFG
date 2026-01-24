import daciaLogo from '../assets/img/dacia-logo.webp';
import renaultLogo from '../assets/img/Renault-logo.webp';

const LogosRow = () => (
<div className="bg-gray-50 flex flex-col sm:flex-row mt-12 sm:mt-20 justify-center items-center gap-6 sm:gap-8 md:gap-12 py-8 px-4 overline decoration-[#FFD131] decoration-2">    <a href="https://de.renault.ch/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:opacity-80 transition-opacity">
      <img src={renaultLogo} alt="Renault Logo" className="h-24 sm:h-14 md:h-16 w-auto object-contain mb-2" />
      <div className="text-gray-900 font-semibold text-base sm:text-lg bg-white px-2 py-1 rounded mt-1 whitespace-nowrap">
        Verkauf, Werkstatt, Service
      </div>
    </a>
    <a href="https://de.dacia.ch/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:opacity-80 transition-opacity">
      <img src={daciaLogo} alt="Dacia Logo" className="mt-0 sm:mt-6 h-8 sm:h-9 md:h-10 w-auto object-contain mb-2" />
      <div className="text-gray-900 font-semibold text-base sm:text-lg bg-white px-2 py-1 rounded mt-1 whitespace-nowrap">
        Verkauf, Werkstatt, Service
      </div>
    </a>
  </div>
);

export default LogosRow;
