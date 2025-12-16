import React from 'react';

// Team Mitglieder
const teamMembers = [
  { name: "Heinz Frei", role: "Verkauf / Inhaber ", email: "hfrei@langenfeld.ch", phone: "+41 62 871 17 16" },
  { name: "Toni Hasler", role: "VVerkauf / Inhaber ", email: "thasler@langenfeld.ch", phone: "+41 62 871 17 16" },
  { name: "Roland Heiz", role: "Leiter Aftersales ", email: "trheiz@langenfeld.ch", phone: "+41 62 871 17 16" },
  { name: "Liridon Pajaziti", role: "Kundendienst", email: "kundendienst@langenfeld.ch", phone: "+41 62 871 17 16" },
  { name: "Mara Keller", role: "Sekretariat ", email: "mkeller@langenfeld.ch", phone: "+41 62 871 17 16" },
  { name: "Kessler Lukas", role: "Werkstatt, Koordination Werkstatt, Mechaniker ", phone: "+41 62 871 17 16" },
];

const Contact = () => {
  return (
    <section className="bg-white py-16 m-3">
      <div className="max-w-7xl mx-auto px-4">
        {/* Überschrift */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Unser Team</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Lernen Sie unser kompetentes Team kennen – motiviert, professionell und immer für Sie da.
          </p>
        </div>

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

        {/* Boxen: Google Map + Assistance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Google Map */}
          <div className="bg-[#fdc700] rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">📍 Standort</h3>
            <p className="text-black mb-4">Oeschgen-Frick</p>
            {/* Optional: Google Maps Embed */}
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761.015011262733!2d7.978720015760567!3d47.52511697915761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47906f7993db48f5%3A0x9bb6b1c8b1c2a8cb!2sLangenfeld%20Garage%20AG!5e0!3m2!1sde!2sch!4v1697263212345!5m2!1sde!2sch"
              width="100%"
              height="200"
              className="rounded"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Renault Assistance */}
          <div className="bg-black rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-white text-xl font-semibold mb-4">🚗 Renault Assistance</h3>
            <p className="text-[#fdc700]">
                 044 834 12 00 <br />
              Rund um die Uhr Unterstützung für Ihren Renault.
            </p>
          </div>

          {/* Dacia Assistance */}
          <div className="bg-black rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-white text-xl font-semibold mb-4">🛠 Dacia Assistance</h3>
            <p className="text-[#fdc700]">
               044 777 03 75 <br />
              Hilfe und Support für alle Dacia Modelle jederzeit verfügbar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;