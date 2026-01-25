import React, { useState, useEffect, useRef } from 'react'
import MitarbeiterPortrait from '../components/MitarbeiterPortrait'
import mitarbeiterData from '../data/Mitarbeiter.json'
import Img1 from '../assets/img/showroom1.jpg'  
import Img2 from '../assets/img/showroom2.jpg'  
import Img3 from '../assets/img/showroom3.jpg'  
import Img4 from '../assets/img/showroom4.jpg'
import Img5 from '../assets/img/showroom5.jpg'


const UeberUns = () => {
  const [dienstleistungenImageVisible, setDienstleistungenImageVisible] = useState(false);
  const [galerieVisible, setGalerieVisible] = useState(false);
  
  const dienstleistungenRef = useRef(null);
  const galerieRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px'
    };

    const dienstleistungenObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => setDienstleistungenImageVisible(true), 1000);
          dienstleistungenObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const galerieObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => setGalerieVisible(true), 1000);
          galerieObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (dienstleistungenRef.current) {
      dienstleistungenObserver.observe(dienstleistungenRef.current);
    }
    if (galerieRef.current) {
      galerieObserver.observe(galerieRef.current);
    }

    return () => {
      if (dienstleistungenRef.current) {
        dienstleistungenObserver.unobserve(dienstleistungenRef.current);
      }
      if (galerieRef.current) {
        galerieObserver.unobserve(galerieRef.current);
      }
    };
  }, []);

  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="max-w-4xl">
          <p className="mt-5 text-3xl md:text-3xl font-semibold text-[#fdc700]">Über uns</p>
          <h1 className="mt-8 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-3xl">
            Die Langenfeld Garage AG
          </h1>
        </div>

        {/* Geschichte Sektion mit Bild rechts */}
        <div className=" mt-16 grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-pretty text-gray-900">
              Geschichte
            </h2>
            <p className="mt-6 text-base/7 text-gray-600">
              Seit 1989 stehen wir im Fricktal für Kompetenz,
              Zuverlässigkeit und persönliche Beratung rund ums Automobil.
              Als etablierter Garagenbetrieb vertreten wir erfolgreich
              renommierte Fahrzeugmarken und begleiten unsere Kundschaft
              bei allen Fragen rund um Mobilität.
            </p>
            <p className="mt-6 text-base/7 text-gray-600">
              Unser engagiertes und bestens ausgebildetes Team sorgt täglich
              für einen prompten, zuverlässigen Service. Dank moderner
              Infrastruktur und zeitgemässem technischem Equipment können
              sämtliche Arbeiten effizient und mit höchster Sorgfalt
              ausgeführt werden.
            </p>
            <p className="mt-6 text-base/7 text-gray-600">
              Individuelle Wünsche setzen wir flexibel und kompetent um.
              Persönlicher Kontakt, Transparenz und Qualität stehen für uns
              an oberster Stelle – überzeugen Sie sich selbst, wir freuen
              uns auf Ihren Besuch.
            </p>
          </div>
          
          {/* Bild rechts neben Geschichte */}
          <div className="flex items-start justify-center lg:justify-end">
            <img
              alt="Showroom"
              src={Img5}
              className="w-full max-w-lg rounded-2xl bg-gray-50 object-cover shadow-lg"
            />
          </div>
        </div>

        {/* Unsere Dienstleistungen mit Bild rechts */}
        <div ref={dienstleistungenRef} className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
              Unsere Dienstleistungen
            </h2>
            <ul className="mt-6 space-y-3 text-base/7 text-gray-600">
              <li>• Permanente Neuwagenausstellung</li>
              <li>• Kompetente und ehrliche Beratung</li>
              <li>• Gepflegte Occasionen mit mindestens 12 Monaten Garantie</li>
              <li>• Laufend attraktive Aktionen</li>
              <li>• Faire Finanzierungsangebote</li>
              <li>• Spezialangebote für Gewerbe- und Flottenkunden</li>
              <li>• Modern ausgestattete Werkstatt mit Fachpersonal</li>
              <li>• Ersatzwagen zu fairen Konditionen</li>
              <li>• Moderne Waschanlage für schonende Autopflege</li>
              <li>• SB-Waschplätze & Staubsauger (24h verfügbar)</li>
              <li>• Zügel- und Personentransporter bis 14 Plätze</li>
              <li>• Tankstelle inkl. Erdgas (24h)</li>
            </ul>
          </div>
          
          {/* Bild rechts neben Dienstleistungen */}
          <div className="flex items-start justify-center lg:justify-end">
            <img
              alt="Showroom"
              src={Img2}
              className={`w-full max-w-lg rounded-2xl bg-gray-50 object-cover shadow-lg transition-all duration-700 ease-in ${
                dienstleistungenImageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            />
          </div>
        </div>

        {/* Bildergalerie */}
        <div ref={galerieRef} className="mt-20 hidden lg:block">
          <div className="flex flex-wrap items-start justify-center gap-6 sm:gap-8">
            <div className="w-full sm:w-auto">
              <img
                alt="Showroom Bild 1"
                src={Img1}
                className={`aspect-4/3 w-full sm:w-96 rounded-2xl bg-gray-50 object-cover transition-all duration-700 ease-in delay-100 ${
                  galerieVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              />
            </div>
            <div className="w-full sm:w-auto">
              <img
                alt="Showroom Bild 3"
                src={Img3}
                className={`aspect-4/3 w-full sm:w-96 rounded-2xl bg-gray-50 object-cover transition-all duration-700 ease-in delay-300 ${
                  galerieVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              />
            </div>
            <div className="w-full sm:w-auto">
              <img
                alt="Showroom Bild 4"
                src={Img4}
                className={`aspect-4/3 w-full sm:w-96 rounded-2xl bg-gray-50 object-cover transition-all duration-700 ease-in delay-500 ${
                  galerieVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              />
            </div>
          </div>
        </div>

        {/* Unser Team */}
        <section className="mt-20">
          <h2 className="text-2xl font-semibold tracking-tight text-pretty text-gray-900 mb-4">Unser Team</h2>
          <p className="text-base/7 text-gray-600 mb-12">
            Lernen Sie unser kompetentes Team kennen – motiviert, professionell und immer für Sie da.
          </p>

          {/* Team Cards */}
          
          {/* Geschäftsleitung - Erste Zeile */}
          <div className="mb-15">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Geschäftsleitung</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
              {mitarbeiterData.mitarbeiter
                .filter(person => person.team === 'Geschaeftsleitung')
                .map((person) => (
                  <MitarbeiterPortrait key={person.name} person={person} />
                ))}
            </div>
          </div>

          {/* Büro - Zweite Zeile */}
          <div className="mb-15">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Büro</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
              {mitarbeiterData.mitarbeiter
                .filter(person => person.team === 'Buero')
                .map((person) => (
                  <MitarbeiterPortrait key={person.name} person={person} />
                ))}
            </div>
          </div>

          {/* Werkstatt - 3er Grid */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Werkstatt</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 gap-y-15">
              {mitarbeiterData.mitarbeiter
                .filter(person => person.team === 'Werkstatt')
                .map((person) => (
                  <MitarbeiterPortrait key={person.name} person={person} />
                ))}
            </div>
          </div>
                
        </section>
      </div>
    </div>
  );
};

export default UeberUns;