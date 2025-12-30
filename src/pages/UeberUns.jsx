import React from 'react'
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
    <section className="bg-white py-16 m-3">
      <div className="container max-w-6xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 mt-5">
        Die Langenfeld Garage AG
        </h1>

        {/* 2-Spalten Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Linke Spalte – Geschichte */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-[#fdc700]">
              Geschichte
            </h2>

            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Seit 1989 stehen wir im Fricktal für Kompetenz,
                Zuverlässigkeit und persönliche Beratung rund ums Automobil.
                Als etablierter Garagenbetrieb vertreten wir erfolgreich
                renommierte Fahrzeugmarken und begleiten unsere Kundschaft
                bei allen Fragen rund um Mobilität.
              </p>

              <p>
                Unser engagiertes und bestens ausgebildetes Team sorgt täglich
                für einen prompten, zuverlässigen Service. Dank moderner
                Infrastruktur und zeitgemässem technischem Equipment können
                sämtliche Arbeiten effizient und mit höchster Sorgfalt
                ausgeführt werden.
              </p>

              <p>
                Individuelle Wünsche setzen wir flexibel und kompetent um.
                Persönlicher Kontakt, Transparenz und Qualität stehen für uns
                an oberster Stelle – überzeugen Sie sich selbst, wir freuen
                uns auf Ihren Besuch.
              </p>
            </div>
          </div>

          {/* Rechte Spalte – Dienstleistungen */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-[#fdc700]">
              Unsere Dienstleistungen
            </h2>

            <ul className="space-y-3 text-gray-700">
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

        {/* Zusatzblock Ersatzwagen */}
        <div className="mt-14 bg-[#fdc700] p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2 text-gray-900">
            Ersatzwagen
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Wir garantieren Ihnen ein Maximum an Mobilität. Unser Fuhrpark
            umfasst laufend mehrere Ersatzfahrzeuge, die Ihnen zu fairen
            Preisen zur Verfügung stehen – damit Sie jederzeit mobil bleiben.
          </p>
        </div>

                {/* Überschrift */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 mt-14">Unser Team</h2>
        <p className="text-xl font-bold mb-12 text-gray-900 mt-5 ">
          Lernen Sie unser kompetentes Team kennen – motiviert, professionell und immer für Sie da.
        </p>

                {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mb-16 mt-14">
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
      </div>
    </section>
  );
};

export default UeberUns;