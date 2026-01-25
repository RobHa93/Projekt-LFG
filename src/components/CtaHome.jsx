
import React from 'react';
import { Link } from 'react-router-dom';

const CtaHome = () => {
  return (
    <div className=" bg-gray-50 mt-30 text-center">
      <div className="p-6 ">
        <h3 className="text-2xl font-semibold mb-4">
          Fragen zu unseren Services?
        </h3>
        <p className="text-black mb-6">
          Vereinbaren Sie telefonisch einen Werkstatt-Termin oder kontaktieren Sie uns für eine Beratung.
        </p>
        <br />
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <Link to="/Kontakt" className="bg-[#000000] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#e6b300] transition-colors text-center">
            Kontakt aufnehmen
          </Link>
          <a href="https://langenfeld.sopl.ch/de/" target="_blank" rel="noopener noreferrer" className="bg-[#000000] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#e6b300] transition-colors text-center">
            Termin online buchen
          </a>
        </div>
      </div>
    </div>
  );
};

export default CtaHome;
