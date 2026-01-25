import React from 'react';
import tankstelleImg2 from '../assets/img/tankstelle2.jpg';

const TankstelleUndWaschanlage = () => {
  return (
    <div className="overflow-hidden bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="max-w-4xl">
          <p className="mt-5 text-3xl md:text-3xl font-semibold text-[#fdc700]">Gut gepflegt</p>
          
          {/* Tankstelle Section */}
          <div className="mb-16">
            <h1 className="mt-8 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-3xl mb-6">
              Tankstelle
            </h1>
            <p className="text-xl/8 text-gray-700 mb-6">
              Geniessen Sie die zahlreichen Vorteile einer Kundenkarte.
              Hier finden Sie alle wichtigen Informationen:
              von den Kartenanträgen für Firmen und Privatkunden bis hin zu Bestellungen von Ersatz-, Zusatz- oder Vorzahlerkarten.
            </p>
            <a 
              href="#tankkarte" 
              className="text-[#fdc700] hover:underline font-medium text-lg"
            >
              Tankkarte bestellen
            </a>
          </div>
          {/* Tankstelle Bild */}
          <div className="mb-12">
            <img src={tankstelleImg2} alt="Tankstelle" className="w-full max-w-3xl rounded-2xl shadow-lg" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default TankstelleUndWaschanlage;
