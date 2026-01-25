import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Auf Mobile immer sichtbar, auf Desktop mit Intersection Observer
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      setVisible(true);
      return;
    }

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const services = [
{
      icon: CogIcon,
      title: "Werkstatt & Kundendienst",
      description: "Schnell und zuverlässig – Service für Ihr Fahrzeug",
      link: "/werkstatt"
    },
    {
      icon: WindowIcon,
      title: "Glas / Carrosserie",
      description: "Frontscheibe & weitere Glasreparaturen inkl. Versicherungsabwicklung",
      link: "/werkstatt"
    },
    {
      icon: CheckCircleIcon,
      title: "Motorfahrzeugkontrolle",
      description: "Vorbereitung und Vorführen zur MFK inkl. Mobilitätslösung",
      link: null
    },
    {
      icon: WrenchScrewdriverIcon,
      title: "Mobilitätslösung",
      description: "Ersatzfahrzeug oder andere Lösungen während der Reparatur",
      link: null
    },
    {
      icon: TruckIcon,
      title: "Zügeln/Transportieren",
      description: "Sichern Sie sich das perfekte Fahrzeug für Ihren Umzug oder Transport: Bereits ab 20 CHF/Stunde.",
      link: "/mietwagen"
    },
    {
      icon: CubeIcon,
      title: "Tankstelle",
      description: "Top-Preise und 24 Stunden für Sie offen",
      details: "Erdgas-Tankstelle mit bargeldloser Bezahlung via Tankkarte oder EC-/Kreditkarte.",
      link: "/tankstelle"
    },
    {
      icon: PaintBrushIcon,
      title: "Waschanlage & Pflege",
      description: "Moderne Autowaschanlage und Fahrzeugpflege für strahlenden Glanz",
      link: "/waschanlage"
    },
    {
      icon: BriefcaseIcon,
      title: "Verkauf & Beratung",
      description: "Verkauf von Neu- und Occasionsfahrzeugen",
      details: "Unser Verkaufsteam berät Sie gerne bei der Auswahl Ihres neuen Fahrzeugs.",
      link: "/verkauf"
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="service"
      className={`py-20 bg-gray-50 transition-opacity duration-700 ease-in ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Überschrift */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Unsere Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wir bieten qualifizierte Service-Dienstleistungen für alle Fahrzeugmarken. Schnell, zuverlässig und transparent.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const CardContent = (
              <>
                <div className="text-center">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-12 w-12 " />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  {service.details && <p className="text-gray-500 text-xs mt-2">{service.details}</p>}
                </div>
              </>
            );

            return service.link ? (
              <Link 
                key={index}
                to={service.link}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 group block"
              >
                {CardContent}
              </Link>
            ) : (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 group"
              >
                {CardContent}
              </div>
            );
          })}
        </div>

        {/* Call-to-Action */}
        <div className="mt-30 text-center">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 group">
            <h3 className="text-2xl font-semibold mb-4">
              Fragen zu unseren Services?
            </h3>
            <p className="text-black mb-6">
              Vereinbaren Sie telefonisch einen Werkstatt-Termin oder kontaktieren Sie uns für eine Beratung.
            </p>
            <br />
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/Kontakt" className="bg-[#000000] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#e6b300] transition-colors text-center">
                 Kontakt aufnehmen
              </Link>
              <a href="https://langenfeld.sopl.ch/de/" target="_blank" rel="noopener noreferrer" className="bg-[#000000] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#e6b300] transition-colors text-center">
                 Termin online buchen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;