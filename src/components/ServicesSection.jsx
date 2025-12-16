import React from 'react';
import { 
  CogIcon,
  WrenchScrewdriverIcon,
  TruckIcon,
  PaintBrushIcon,
  CheckCircleIcon,
  WindowIcon,
  CubeIcon,
  BriefcaseIcon,

} from '@heroicons/react/24/outline';

const ServicesSection = () => {
  const services = [
    {
      icon: CogIcon,
      title: "Werkstatt & Kundendienst",
      description: "Schnell und zuverlässig – Service für Ihr Fahrzeug",
    },
    {
      icon: WrenchScrewdriverIcon,
      title: "Mobilitätslösung",
      description: "Ersatzfahrzeug oder andere Lösungen während der Reparatur",
    },
    {
      icon: TruckIcon,
      title: "Zügeln/Transportieren",
      description: "Sichern Sie sich das perfekte Fahrzeug für Ihren Umzug oder Transport: Bereits ab 20 CHF/Stunde.",
    },
    {
      icon: PaintBrushIcon,
      title: "Werkstatt & Carrosserie",
      description: "Karosserie- und Lackierarbeiten fachgerecht und preiswert",
    },
    {
      icon: WindowIcon,
      title: "Glas-Service",
      description: "Frontscheibe & weitere Glasreparaturen inkl. Versicherungsabwicklung",
    },
    {
      icon: CheckCircleIcon,
      title: "Motorfahrzeugkontrolle",
      description: "Vorbereitung und Vorführen zur MFK inkl. Mobilitätslösung",
    },
    {
      icon: CubeIcon,
      title: "Tankstelle",
      description: "Top-Preise und 24 Stunden für Sie offen",
      details: "Erdgas-Tankstelle mit bargeldloser Bezahlung via Tankkarte oder EC-/Kreditkarte. Profitieren Sie von attraktiven Konditionen.",
    },
    {
      icon: BriefcaseIcon,
      title: "Waschanlage",
      description: "Moderne Waschanlage mit Osmosewasser",
      details: "Doppelportal-Waschanlage von 07:00 bis 22:00 Uhr. SB-Waschplätze mit Hochdruckreiniger und Staubsauger 24h verfügbar. Bargeldlose Zahlung möglich.",
    },
  ];

  return (
    <section id="service" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Überschrift */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Unsere Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wir bieten qualifizierte Service-Dienstleistungen für alle Fahrzeugmarken. Schnell, zuverlässig und transparent.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="text-center">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-12 w-12 text-[#fdc700]" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  {service.details && <p className="text-gray-500 text-xs mt-2">{service.details}</p>}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call-to-Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 group">
            <h3 className="text-2xl font-semibold mb-4">
              Fragen zu unseren Services?
            </h3>
            <p className="text-black mb-6">
              Vereinbaren Sie telefonisch einen Werkstatt-Termin oder kontaktieren Sie uns für eine Beratung.
            </p>
            <br />
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#fdc700] text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-[#e6b300] transition-colors">
                📞 Jetzt anrufen
              </button>
              <button className="bg-[#fdc700] text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-[#e6b300] transition-colors">
                📅 Termin online buchen
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;