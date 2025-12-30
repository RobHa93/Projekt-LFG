import React from 'react'
import Img1 from '../assets/img/showroom1.jpg'  
import Img2 from '../assets/img/showroom2.jpg'  
import Img3 from '../assets/img/showroom3.jpg'  
import Img4 from '../assets/img/showroom4.jpg'
import Img5 from '../assets/img/showroom5.jpg'

// Team Mitglieder
const teamMembers = [
  { name: "Heinz Frei", role: "Verkauf / Inhaber ", email: "hfrei@langenfeld.ch", phone: "+41 62 871 17 16" },
  { name: "Toni Hasler", role: "VVerkauf / Inhaber ", email: "thasler@langenfeld.ch", phone: "+41 62 871 17 16" },
  { name: "Roland Heiz", role: "Leiter Aftersales ", email: "trheiz@langenfeld.ch", phone: "+41 62 871 17 16" },
  { name: "Liridon Pajaziti", role: "Kundendienst", email: "kundendienst@langenfeld.ch", phone: "+41 62 871 17 16" },
  { name: "Mara Keller", role: "Sekretariat ", email: "mkeller@langenfeld.ch", phone: "+41 62 871 17 16" },
  { name: "Kessler Lukas", role: "Werkstatt, Koordination Werkstatt, Mechaniker ", phone: "+41 62 871 17 16" },
];

const UeberUns = () => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="max-w-4xl">
          <p className="md:text-3xl font-semibold text-[#fdc700]">Über uns</p>
          <h1 className="mt-8 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-3xl">
            Die Langenfeld Garage AG
          </h1>
          <p className="mt-6 text-xl/8 text-balance text-gray-700">
            Seit 1989 Ihr verlässlicher Partner für Mobilität im Fricktal.
          </p>
        </div>

        {/* Geschichte und Dienstleistungen Sektion mit Bildergalerie */}
        <div className="mt-20">
          <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:min-w-full lg:flex-none lg:gap-y-8">
              <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                {/* Geschichte */}
                <h2 className="text-2xl font-semibold tracking-tight text-pretty text-gray-900">
                  Geschichte
                </h2>
                <p className="mt-6 text-xl/8 text-gray-700">
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

                {/* Bild neben Geschichte */}
                <div className="mt-8">
                  <img
                    alt="Geschichte Bild"
                    src={Img5}
                    className="w-full max-w-md rounded-2xl bg-gray-50 object-cover"
                  />
                </div>

                {/* Unsere Dienstleistungen */}
                <div className="mt-12">
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
              </div>
              
              {/* Bildergalerie rechts */}
              <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                  <img
                    alt="Showroom Bild 1"
                    src={Img1}
                    className="aspect-4/3 w-128 max-w-none rounded-2xl bg-gray-50 object-cover max-sm:w-120"
                  />
                </div>
                <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-148 lg:items-start lg:justify-end lg:gap-x-8">
                 
                  <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                    <img
                      alt="Showroom Bild 3"
                      src={Img3}
                      className="aspect-4/3 w-148 max-w-none flex-none rounded-2xl bg-gray-50 object-cover max-sm:w-120"
                    />
                  </div>
                  <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                    <img
                      alt="Showroom Bild 4"
                      src={Img4}
                      className="aspect-4/3 w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                </div>
              </div>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-gray-50 text-gray-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
              >
                {/* Avatar als Initialen */}
                <div className="w-24 h-24 bg-[#fdc700] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <div className="space-y-1 text-sm">
                  <a href={`mailto:${member.email}`} className="block hover:text-blue-600 transition-colors">📧 E-Mail</a>
                  <a href={`tel:${member.phone}`} className="block hover:text-blue-600 transition-colors">📞 {member.phone}</a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default UeberUns;