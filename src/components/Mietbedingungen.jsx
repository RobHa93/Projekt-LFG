import React from 'react';

const Mietbedingungen = () => {
  const conditions = [
    {
      title: 'Versicherung',
      content: 'Inklusive Haftpflicht- und Vollkaskoversicherung (Selbstbehalt je 1\'000 CHF).'
    },
    {
      title: 'Kaution',
      content: 'Als Kaution sind 200 CHF beim Mietbeginn in Bar zu hinterlegen.'
    },
    {
      title: 'Annulierung',
      content: 'Bis 48 Stunden vor Mietbeginn kostenlos, danach 50% der Grundmiete. Ohne Annulierung 100% der Grundmiete.'
    },
    {
      title: 'Fahrten ins Ausland',
      content: 'Die länderspezifischen Vorschriften bei Fahrten ins Ausland sind durch den Mieter abzuklären.'
    },
    {
      title: 'Führerausweis',
      content: 'Wir vermieten nur an Kunden mit CH-Ausweis.\nFür 14 Plätzer ist das D1 erforderlich.\nFür Kastenwagen ist Ausweis B erforderlich.'
    }
  ];

  return (
    <section id="mietbedingungen" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Mietbedingungen
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {conditions.map((condition, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-[#fdc700] mb-4">
                {condition.title}
              </h3>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {condition.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mietbedingungen;
