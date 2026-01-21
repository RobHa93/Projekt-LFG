import React from 'react';

const TankstelleUndWaschanlage = () => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="max-w-4xl">
          <p className="md:text-3xl font-semibold text-[#fdc700]">Gut gepflegt</p>
          
          {/* Tankstelle Section */}
          <div className="mb-16">
            <h1 className="mt-8 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-3xl mb-6">
              Tankstelle
            </h1>
            <p className="text-xl/8 text-balance text-gray-700 mb-6">
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

          {/* Waschtechnik Section */}
          <div>
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-3xl mb-6">
              Waschtechnik
            </h2>
            <p className="text-xl/8 text-balance text-gray-700 mb-6">
              Unsere neue Doppelportal Waschanlage wäscht Ihr Fahrzeug schonend und trotzdem sauber. Wir verfügen über mehr als 25 Jahre Erfahrung in diesem Bereich und wissen genau worauf es ankommt.
            </p>

            {/* Liste */}
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-[#fdc700] mr-2">•</span>
                <span className="text-gray-700">Doppelportal Waschanlage 07 bis 22 Uhr</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#fdc700] mr-2">•</span>
                <span className="text-gray-700">SB Waschplätze mit Hochdruckreiniger 24h</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#fdc700] mr-2">•</span>
                <span className="text-gray-700">Staubsauger 24h</span>
              </li>
            </ul>

            {/* Highlight Box */}
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Bargeldlose Zahlung möglich (EC,KK,Twint,etc.)
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Bargeldlos waschen (automatische Waschanlage) mit unserem Wasch Chip! Wir schicken Ihnen den Chip gerne per Post nach Hause. Unser Personal informiert Sie gerne über die Einzelheiten!
              </p>
            </div>

            {/* Platzhalter Bild */}
            <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/src/assets/img/werkstatt1.jpg" 
                alt="Waschanlage" 
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TankstelleUndWaschanlage;
