// Fahrzeuge Section - Showcase von Autos
import React, { useState } from 'react';

const VehiclesSection = () => {
  const [activeTab, setActiveTab] = useState('neuwagen');

  const vehicles = {
    neuwagen: [
      {
        brand: 'BMW',
        model: '3er Limousine',
        price: 'ab CHF 45,000',
        image: '🚙',
        features: ['Automatik', 'Navigation', 'Klimaanlage', 'LED-Licht'],
        fuel: 'Benzin/Elektro'
      },
      {
        brand: 'Mercedes-Benz',
        model: 'C-Klasse',
        price: 'ab CHF 48,500',
        image: '🚗',
        features: ['Automatik', 'Premium-Audio', 'Assistenzsysteme'],
        fuel: 'Benzin/Hybrid'
      },
      {
        brand: 'Audi',
        model: 'A4 Avant',
        price: 'ab CHF 46,800',
        image: '🚘',
        features: ['Quattro', 'Virtual Cockpit', 'S-Line'],
        fuel: 'Benzin/Diesel'
      }
    ],
    occasionen: [
      {
        brand: 'BMW',
        model: 'X3 (2021)',
        price: 'CHF 35,900',
        image: '🚙',
        features: ['45,000 km', '2.0L Turbo', 'Allrad', 'Xenon'],
        fuel: 'Benzin',
        year: '2021'
      },
      {
        brand: 'Mercedes',
        model: 'E-Klasse (2020)', 
        price: 'CHF 42,500',
        image: '🚗',
        features: ['38,000 km', 'Automatik', 'Leder', 'Navi'],
        fuel: 'Diesel',
        year: '2020'
      },
      {
        brand: 'VW',
        model: 'Golf GTI (2022)',
        price: 'CHF 28,900',
        image: '🚘',
        features: ['25,000 km', 'DSG', 'Sport-Paket'],
        fuel: 'Benzin',
        year: '2022'
      }
    ]
  };

  return (
    <section id="fahrzeuge" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Unsere Fahrzeuge
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entdecken Sie unsere große Auswahl an Neuwagen und gepflegten 
            Occasionen von Premium-Marken zu fairen Preisen.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-2 rounded-lg">
            <button
              onClick={() => setActiveTab('neuwagen')}
              className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === 'neuwagen'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              🆕 Neuwagen
            </button>
            <button
              onClick={() => setActiveTab('occasionen')}
              className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === 'occasionen'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              🔄 Occasionen
            </button>
          </div>
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles[activeTab].map((vehicle, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Vehicle Image */}
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-48 flex items-center justify-center">
                <div className="text-8xl">{vehicle.image}</div>
              </div>

              {/* Vehicle Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {vehicle.brand}
                    </h3>
                    <p className="text-gray-600">{vehicle.model}</p>
                    {vehicle.year && (
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mt-1">
                        {vehicle.year}
                      </span>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-blue-600">
                      {vehicle.price}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {vehicle.features.map((feature, fIndex) => (
                      <span 
                        key={fIndex}
                        className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Fuel Type */}
                <div className="mb-6">
                  <span className="text-sm text-gray-600">
                    ⛽ {vehicle.fuel}
                  </span>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    Details ansehen
                  </button>
                  <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium">
                    Probefahrt
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">
              Nicht das Richtige dabei?
            </h3>
            <p className="text-blue-100 mb-6">
              Wir helfen Ihnen gerne bei der Suche nach Ihrem Traumfahrzeug. 
              Nutzen Sie unseren persönlichen Beratungsservice oder stöbern 
              Sie in unserem kompletten Fahrzeugbestand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                🔍 Fahrzeug-Suche
              </button>
              <button className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors border border-blue-500">
                💬 Beratung vereinbaren
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehiclesSection;