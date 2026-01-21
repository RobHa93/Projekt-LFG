import daciaLogo from '../assets/img/dacia-logo.webp';
import renaultLogo from '../assets/img/Renault-logo.webp';

const LogosRow = () => (
<div className=" bg-gray-50 flex mt-20 justify-center items-start gap-12 my-8 mb-4 overline decoration-[#FFD131] decoration-2">    <div className="flex flex-col items-center">
      <img src={renaultLogo} alt="Renault Logo" className="h-16 w-auto object-contain mb-2" />
      <div className="text-gray-900 font-semibold text-lg bg-white px-2 py-1 rounded mt-1">
        Verkauf, Werkstatt, Service
      </div>
    </div>
    <div className="flex flex-col items-center">
      <img src={daciaLogo} alt="Dacia Logo" className=" mt-6 h-10 w-auto object-contain mb-2" />
      <div className="text-gray-900 font-semibold text-lg bg-white px-2 py-1 rounded mt-1">
        Verkauf, Werkstatt, Service
      </div>
    </div>
  </div>
);

export default LogosRow;
