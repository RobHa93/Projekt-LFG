import React from 'react';

const Contact = () => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="max-w-4xl">
          <p className="md:text-3xl font-semibold text-[#fdc700]">Kontakt & Öffnungszeiten</p>
          <h1 className="mt-8 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-3xl">
            Besuchen Sie uns
          </h1>
          <p className="mt-6 text-xl/8 text-gray-700">
            Wir sind gerne für Sie da. Besuchen Sie uns zu unseren Öffnungszeiten oder kontaktieren Sie uns telefonisch oder per E-Mail.
          </p>
        </div>
        <section className="mt-20">
          <h2 className="text-2xl font-semibold tracking-tight text-pretty text-gray-900 mb-8">Öffnungszeiten</h2>

        {/* 2-Spalten-Abschnitt: Öffnungszeiten */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Spalte 1: Verkauf */}
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 mt-4">Verkauf</h3>
            <p className="mb-2 text-gray-700">Montag bis Freitag: 08:00 – 12:00 Uhr, 13:00 – 18:00 Uhr<br/>Samstag: 08:00 – 12:00 Uhr</p>
          </div>
          {/* Spalte 2: Kundendienst und Werkstatt */}
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 mt-4">Kundendienst und Werkstatt</h3>
            <p className="mb-2 text-gray-700">Montag bis Donnerstag: 07:30 – 12:00 Uhr, 13:00 – 17:30 Uhr<br/>Freitag: 07:30 – 12:00 Uhr, 13:00 – 17:00 Uhr</p>
          </div>
        </div>

        {/* Assistance & Kontakt Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Renault Assistance */}
          <div className="bg-[#000000]  rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-white"> Renault Assistance</h3>
            <p className="text-white">
              044 834 12 00 <br />
              Rund um die Uhr Unterstützung für Ihren Renault.
            </p>
          </div>
          {/* Dacia Assistance */}
          <div className="bg-[#000000] rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-white"> Dacia Assistance</h3>
            <p className="text-white">
              044 777 03 75 <br />
              Hilfe und Support für alle Dacia Modelle jederzeit verfügbar.
            </p>
          </div>
          {/* Kontakt */}
          <div className="bg-[#000000] rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-white"> Kontakt</h3>
            <p className="text-white">
              Tel: 062 871 17 16<br />
              Fax: 062 871 58 16<br />
              <a href="mailto:info@langenfeld.ch" className="underline hover:text-blue-700">info@langenfeld.ch</a>
            </p>
          </div>
        </div>


        {/* Box: Google Map */}
        <div className="grid grid-cols-1 gap-8">
          {/* Google Map */}
          <div className="bg-gray-200 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">📍 Standort</h3>
            <p className="text-black mb-4">Oeschgen-Frick</p>
            {/* Optional: Google Maps Embed */}
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761.015011262733!2d7.978720015760567!3d47.52511697915761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47906f7993db48f5%3A0x9bb6b1c8b1c2a8cb!2sLangenfeld%20Garage%20AG!5e0!3m2!1sde!2sch!4v1697263212345!5m2!1sde!2sch"
              width="100%"
              height="400"
              className="rounded"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;