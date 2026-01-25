import React from 'react'
import daciaLogo from '../assets/img/dacia-logo.webp';
import renaultLogo from '../assets/img/Renault-logo.webp';
import werbevideo from '../assets/mp4/RAFALE_WEB_16x9_20s_DE.mp4';

const Verkauf = () => {
  return (
    <div className="overflow-hidden bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        
        {/* Header */}
        <div className="max-w-4xl mb-12">
          <p className="mt-5 text-3xl md:text-3xl font-semibold text-[#fdc700]">
            Verkauf und Beratung
          </p>
          <h1 className="mt-8 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-3xl">
            Verkauf von Neu- und Occasionsfahrzeugen
          </h1>
          
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Text */}
            <div className="lg:col-span-3">
              <p className="mt-6 text-base/7 text-gray-600">
                Unser Verkaufsteam berät Sie gerne bei der Auswahl Ihres neuen Fahrzeugs. Ob Neu- oder Occasionsfahrzeug, wir finden das passende Auto für Ihre Bedürfnisse. Besuchen Sie uns in unserer Ausstellung oder kontaktieren Sie uns für eine persönliche Beratung.
              </p>
                          <h1 className="mt-20 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-3xl">
                Konfigurieren Sie ihr Wunschfahrzeug:
            </h1>
              <p className="mt-6 text-base/7 text-gray-600">
                Konfigurieren Sie Ihr <a href="https://de.renault.ch/model-picker-configurator.html" target='_blank' rel="noopener noreferrer"><b>Renault</b></a>  oder <a href="https://de.dacia.ch/konfigurieren.html" target="_blank" rel="noopener noreferrer"><b>Dacia</b></a> Wunschfahrzeug und senden Sie uns Ihren Konfigurationscode.
              </p>
            </div>
            
        {/* Ansprechpartner */}
        <div className="lg:col-span-2 p-6 ml-30 bg-gray-50  ">
          <h2 className="text-2xl font-semibold text-[#fdc700] mb-6">
            Ihre Ansprechpartner
          </h2>

          {/* Ansprechpartner 1 */}
          <div className="mb-6 border-l-4  pl-4">
            <p className="font-semibold text-gray-800">Toni Hasler</p>
            <p className="text-gray-700">Verkauf</p>
            <p className="text-gray-700">+41 62 871 17 16</p>
            <a href="mailto:rheiz@langenfeld.ch" className="hover:underline">
              kundendienst@langenfeld.ch
            </a>
          </div>

          {/* Ansprechpartner 2 */}
          <div className="border-l-4 pl-4">
            <p className="font-semibold text-gray-800">Heinz Frei</p>
            <p className="text-gray-700">Verkauf</p>
            <p className="text-gray-700">+41 62 871 17 16</p>
            <a href="mailto:kundendienst@langenfeld.ch" className="hover:underline">
              kundendienst@langenfeld.ch
            </a>
          </div>
        </div>
          </div>
        </div>
        
        {/* Brand Configurators */}
        <div className="max-w-4xl mb-12">
          <div className="flex flex-col sm:flex-row mt-8 sm:mt-20 items-center gap-6 sm:gap-8 md:gap-12 py-8 px-4">
            <a href="https://de.renault.ch/model-picker-configurator.html" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:opacity-80 transition-opacity">
              <img src={renaultLogo} alt="Renault Logo" className="h-24 sm:h-14 md:h-16 w-auto object-contain mb-2" />
              <div className="text-gray-900 font-semibold text-base sm:text-lg text-black px-3 py-1 rounded mt-1 whitespace-nowrap">
                Renault
              </div>
            </a>
            <a href="https://de.dacia.ch/konfigurieren.html" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:opacity-80 transition-opacity">
              <img src={daciaLogo} alt="Dacia Logo" className="h-20 mt-0 sm:mt-6 h-8 sm:h-9 md:h-10 w-auto object-contain mb-2" />
              <div className="text-gray-900 font-semibold text-base sm:text-lg text-black px-3 py-1 rounded mt-1 whitespace-nowrap">
                Dacia
              </div>
            </a>
          </div>
        </div>
        
        {/* Video Section */}
        <div className="max-w-5xl mb-12 justify-center mx-auto">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <video 
              className="w-full h-auto"
              autoPlay 
              muted 
              loop 
              playsInline
            >
              <source src={werbevideo} type="video/mp4" />
              Ihr Browser unterstützt das Video-Format nicht.
            </video>
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default Verkauf
