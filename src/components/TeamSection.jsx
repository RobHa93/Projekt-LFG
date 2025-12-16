// Team Section basierend auf ATG-AG Mitarbeiter
import React from 'react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Max Müller",
      role: "Inhaber & Geschäftsführer", 
      email: "max.mueller@autocenter-lfg.ch",
      phone: "044 123 45 67",
      specialization: "Unternehmensführung, Kundenberatung"
    },
    {
      name: "Sarah Weber",
      role: "Verkaufsberaterin & Geschäftsleitung",
      email: "sarah.weber@autocenter-lfg.ch", 
      phone: "044 123 45 68",
      specialization: "Fahrzeugverkauf, Kundenbetreuung"
    },
    {
      name: "Thomas Kraft",
      role: "Werkstattleiter",
      email: "thomas.kraft@autocenter-lfg.ch",
      phone: "044 123 45 69",
      specialization: "Werkstattorganisation, Qualitätskontrolle"
    },
    {
      name: "Anna Fischer",
      role: "Service-Beraterin",
      email: "anna.fischer@autocenter-lfg.ch",
      phone: "044 123 45 70",
      specialization: "Terminplanung, Kundenservice"
    },
    {
      name: "Michael Bauer", 
      role: "Kfz-Mechatroniker",
      email: "michael.bauer@autocenter-lfg.ch",
      phone: "044 123 45 71",
      specialization: "Diagnose, Reparaturen, Wartung"
    },
    {
      name: "Lisa Zimmermann",
      role: "Administration",
      email: "lisa.zimmermann@autocenter-lfg.ch", 
      phone: "044 123 45 72",
      specialization: "Buchhaltung, Verwaltung"
    },
    {
      name: "Stefan Richter",
      role: "Ersatzteillager-Leiter",
      email: "stefan.richter@autocenter-lfg.ch",
      phone: "044 123 45 73", 
      specialization: "Ersatzteil-Beschaffung, Logistik"
    },
    {
      name: "Julia Graf",
      role: "Kfz-Mechatronikerin i.A.",
      email: "julia.graf@autocenter-lfg.ch",
      phone: "044 123 45 74",
      specialization: "Ausbildung, Wartungsarbeiten"
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Unser Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Da die Automobil-Technik laufend weiterentwickelt wird, achten wir auf die 
            ständige Weiterbildung aller Mitarbeiterinnen und Mitarbeiter. 
            Lernen Sie unser kompetentes Team kennen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Avatar Placeholder */}
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  {member.specialization}
                </p>
                
                <div className="space-y-2">
                  <a 
                    href={`mailto:${member.email}`}
                    className="flex items-center justify-center text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <span className="mr-2">📧</span>
                    E-Mail
                  </a>
                  <a 
                    href={`tel:${member.phone.replace(/\s/g, '')}`}
                    className="flex items-center justify-center text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <span className="mr-2">📞</span>
                    {member.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">
              Karriere bei AutoCenter LFG
            </h3>
            <p className="text-blue-100 mb-6">
              Wir bilden aus und suchen immer motivierte Mitarbeiter für unser Team. 
              Interesse an einer Karriere in der Automobilbranche?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                🎓 Ausbildungsplätze
              </button>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors border border-blue-400">
                💼 Stellenangebote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
